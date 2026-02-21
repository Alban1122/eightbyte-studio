"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t, type Lang } from "@/lib/translations";

function LanguageSwitcher({
  lang,
  setLang,
  compact = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  compact?: boolean;
}) {
  const flagSize = compact ? "text-base" : "text-lg";
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
        <span className={`${flagSize} leading-none`}>&#x1F1EC;&#x1F1E7;</span>
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
        <span className={`${flagSize} leading-none`}>&#x1F1E6;&#x1F1F1;</span>
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
