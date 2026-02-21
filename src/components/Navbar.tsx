"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t, type Lang } from "@/lib/translations";

function FlagGB({ size = 20 }: { size?: number }) {
  const w = size;
  const h = Math.round(size * 0.667);
  return (
    <svg width={w} height={h} viewBox="0 0 60 30" className="shrink-0 rounded-[2px] overflow-hidden">
      <clipPath id="gb"><rect width="60" height="30" /></clipPath>
      <g clipPath="url(#gb)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0L60 30" stroke="#C8102E" strokeWidth="2" transform="translate(0,-1)" />
        <path d="M60 0L0 30" stroke="#C8102E" strokeWidth="2" transform="translate(0,1)" />
        <path d="M30 0V30M0 15H60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagAL({ size = 20 }: { size?: number }) {
  const w = size;
  const h = Math.round(size * 0.714);
  return (
    <svg width={w} height={h} viewBox="0 0 980 700" className="shrink-0 rounded-[2px] overflow-hidden">
      <rect width="980" height="700" fill="#E41E20" />
      <path d="M490 136.5c-8.1 24.6-18.4 50.7-34.3 70.6-14.7 18.4-35.3 30.5-58.3 36.3 7.3-13.1 17.4-24.9 17.4-41.8 0-10.6-6.3-19.7-16-25.8 16.2-3.5 28.4-11.2 35.6-24.2 4.5-8.2 4.4-19.4-1.4-29 14.5 7.2 30 19.5 38.4 22.4 3.1 1.1 6 1.7 8.6 1.7v-10.2h20v10.2c2.6 0 5.5-.6 8.6-1.7 8.4-2.9 23.9-15.2 38.4-22.4-5.8 9.6-5.9 20.8-1.4 29 7.2 13 19.4 20.7 35.6 24.2-9.7 6.1-16 15.2-16 25.8 0 16.9 10.1 28.7 17.4 41.8-23-5.8-43.6-17.9-58.3-36.3-15.9-19.9-26.2-46-34.3-70.6zm0 122.5c-8.1 24.6-18.4 50.7-34.3 70.6-14.7 18.4-35.3 30.5-58.3 36.3 7.3-13.1 17.4-24.9 17.4-41.8 0-10.6-6.3-19.7-16-25.8 16.2-3.5 28.4-11.2 35.6-24.2 4.5-8.2 4.4-19.4-1.4-29 14.5 7.2 30 19.5 38.4 22.4 3.1 1.1 6 1.7 8.6 1.7v-10.2h20v10.2c2.6 0 5.5-.6 8.6-1.7 8.4-2.9 23.9-15.2 38.4-22.4-5.8 9.6-5.9 20.8-1.4 29 7.2 13 19.4 20.7 35.6 24.2-9.7 6.1-16 15.2-16 25.8 0 16.9 10.1 28.7 17.4 41.8-23-5.8-43.6-17.9-58.3-36.3-15.9-19.9-26.2-46-34.3-70.6z" fill="#000" />
    </svg>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
  compact = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  compact?: boolean;
}) {
  const flagPx = compact ? 16 : 20;
  const textSize = compact ? "text-[10px]" : "text-[11px]";

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`flex items-center gap-1.5 rounded-sm px-2 py-1 ${textSize} font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
          lang === "en"
            ? "bg-gold-400/10 text-gold-400"
            : "text-white/30 hover:text-white/60"
        }`}
      >
        <FlagGB size={flagPx} />
        EN
      </button>
      <span className="text-[10px] text-white/15">|</span>
      <button
        onClick={() => setLang("al")}
        aria-label="Kalo në Shqip"
        className={`flex items-center gap-1.5 rounded-sm px-2 py-1 ${textSize} font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
          lang === "al"
            ? "bg-gold-400/10 text-gold-400"
            : "text-white/30 hover:text-white/60"
        }`}
      >
        <FlagAL size={flagPx} />
        AL
      </button>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t(tr.nav.services, lang), href: "#sherbimet" },
    { label: t(tr.nav.projects, lang), href: "#projektet" },
    { label: t(tr.nav.about, lang), href: "#rreth-nesh" },
    { label: t(tr.nav.contact, lang), href: "#kontakti" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-12">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <span className="text-[15px] font-light tracking-[0.2em] text-white uppercase">
            Eight Byte
          </span>
          <span className="h-3 w-[1px] bg-gold-400/40" />
          <span className="text-[15px] font-light tracking-[0.2em] text-gold-400 uppercase">
            Studio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-light tracking-[0.15em] text-white/50 uppercase transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="h-4 w-[1px] bg-white/10" />

          <LanguageSwitcher lang={lang} setLang={setLang} />

          <a
            href="#kontakti"
            className="text-[12px] font-light tracking-[0.15em] text-gold-400 uppercase transition-colors duration-300 hover:text-gold-300"
          >
            {t(tr.nav.cta, lang)}
          </a>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} setLang={setLang} compact />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col items-end gap-[6px]">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 8, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1px] bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[1px] w-3 bg-white"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -8, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1px] w-4 bg-white"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy-950/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.5 }}
                  className="text-lg font-light tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 h-[1px] w-12 bg-gold-400/30"
              />
              <motion.a
                href="#kontakti"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg font-light tracking-[0.2em] text-gold-400 uppercase"
              >
                {t(tr.nav.cta, lang)}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
