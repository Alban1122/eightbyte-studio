"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

const GA_ID = "G-Q630WHGV0P";
const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const { lang } = useLanguage();
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setMounted(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  };

  const showBanner = mounted && consent === null;
  const loadGA = consent === "accepted";

  return (
    <>
      {loadGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.06] bg-navy-950/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-8 py-5 sm:flex-row sm:justify-between lg:px-12">
              <p className="text-center text-[14px] font-light leading-relaxed text-white/50 sm:text-left">
                {t(tr.cookie.message, lang)}{" "}
                <Link
                  href="/privacy-policy"
                  className="text-gold-400 underline underline-offset-2 transition-colors duration-300 hover:text-gold-300"
                >
                  {t(tr.footer.privacy, lang)}
                </Link>
              </p>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="border border-white/[0.12] px-5 py-2.5 text-[12px] font-light tracking-[0.1em] text-white/60 uppercase transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  {t(tr.cookie.decline, lang)}
                </button>
                <button
                  onClick={handleAccept}
                  className="bg-gold-400 px-5 py-2.5 text-[12px] font-medium tracking-[0.1em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300"
                >
                  {t(tr.cookie.accept, lang)}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
