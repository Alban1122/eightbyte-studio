"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();

  const footerLinks = [
    { label: t(tr.nav.services, lang), href: "#sherbimet" },
    { label: t(tr.nav.projects, lang), href: "#projektet" },
    { label: t(tr.nav.contact, lang), href: "#kontakti" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-8 py-10 sm:flex-row sm:justify-between lg:px-12">
        <p className="text-[12px] font-light text-white/20">
          {t(tr.footer.copyright, lang)}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-light tracking-[0.15em] text-white/25 uppercase transition-colors duration-300 hover:text-white/50"
            >
              {link.label}
            </a>
          ))}
          <span className="h-3 w-[1px] bg-white/10" />
          <Link
            href="/privacy-policy"
            className="text-[11px] font-light tracking-[0.15em] text-white/25 uppercase transition-colors duration-300 hover:text-white/50"
          >
            {t(tr.footer.privacy, lang)}
          </Link>
          <Link
            href="/terms-of-service"
            className="text-[11px] font-light tracking-[0.15em] text-white/25 uppercase transition-colors duration-300 hover:text-white/50"
          >
            {t(tr.footer.terms, lang)}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/albanmucaj_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 transition-colors duration-300 hover:text-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alban-mucaj-52ba1636b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 transition-colors duration-300 hover:text-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
