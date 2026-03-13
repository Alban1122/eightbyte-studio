"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } };

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

type Screenshot = { src: string; alt: string; label: string };

function ScreenshotShowcase({ screenshots, urlLabel }: { screenshots: Screenshot[]; urlLabel: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow */}
      <div className="absolute -inset-8 rounded-3xl bg-gold-400/[0.04] blur-[60px]" />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-navy-900/90 shadow-2xl shadow-black/60">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#0c0c14] px-5 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
          </div>
          <div className="mx-auto flex h-6 w-56 items-center justify-center rounded-lg bg-white/[0.05] px-4">
            <span className="flex items-center gap-1.5 text-[10px] text-white/25">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              {urlLabel}
            </span>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[current].src}
                alt={screenshots[current].alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={current === 0}
                loading={current === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Previous screenshot"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % screenshots.length)}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Next screenshot"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex justify-center gap-3">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setCurrent(i)}
            aria-label={`View ${shot.label} screenshot`}
            className={`group relative overflow-hidden rounded-lg border transition-all duration-300 ${
              i === current
                ? "border-gold-400/40 shadow-lg shadow-gold-400/10"
                : "border-white/[0.08] hover:border-white/20"
            }`}
          >
            <div className="relative h-12 w-20 sm:h-14 sm:w-24">
              <Image
                src={shot.src}
                alt={`${shot.label} - website design portfolio web developer Tirana`}
                fill
                className={`object-cover object-top transition-all duration-300 ${
                  i === current ? "brightness-100" : "brightness-50 group-hover:brightness-75"
                }`}
                sizes="96px"
              />
            </div>
            {i === current && (
              <motion.div
                layoutId={`activeThumb-${urlLabel}`}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-400"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function PlaceholderCard({ title, badge }: { title: string; badge: string }) {
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.01] transition-all duration-500 hover:border-white/[0.1]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 bg-navy-800/50" />
        <div className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-gold-400/[0.04] blur-[50px]" />
        <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-white/[0.02] blur-[40px]" />
        <div className="absolute inset-8 flex flex-col gap-3 opacity-[0.06]">
          <div className="h-2 w-1/3 rounded-sm bg-white" />
          <div className="h-1 w-2/3 rounded-sm bg-white" />
          <div className="h-1 w-1/2 rounded-sm bg-white" />
          <div className="mt-4 h-20 w-full rounded-sm bg-white" />
        </div>
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="border border-white/[0.1] bg-navy-950/80 px-5 py-2 text-[11px] font-light tracking-[0.2em] text-white/40 uppercase backdrop-blur-sm">{badge}</span>
        </div>
      </div>
      <div className="px-6 py-6 sm:px-8">
        <p className="text-[14px] font-light text-white/30">{title}</p>
      </div>
    </motion.div>
  );
}

/* ── Per-project data ── */
const farm88Screenshots: Screenshot[] = [
  { src: "/projects/farm88/hero.png", alt: "Restaurant website Albania - modern website design by web developer Tirana Eight Byte Studio", label: "Hero" },
  { src: "/projects/farm88/menu.png", alt: "Digital menu Albania - restaurant website design with SEO optimization Tirana", label: "Menu" },
  { src: "/projects/farm88/contact.png", alt: "Small business website Albania - restaurant contact page with Google optimization", label: "Contact" },
];

const odaScreenshots: Screenshot[] = [
  { src: "/projects/oda-e-prizrenit/hero.png", alt: "Oda e Prizrenit restaurant website - luxury dark design Albanian traditional restaurant", label: "Hero" },
  { src: "/projects/oda-e-prizrenit/about.png", alt: "Oda e Prizrenit about section - traditional Albanian cuisine restaurant website", label: "About" },
  { src: "/projects/oda-e-prizrenit/menu.png", alt: "Oda e Prizrenit interactive menu - 90+ dishes Albanian restaurant website", label: "Menu" },
];

const farm88TechStack = ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"];
const odaTechStack = ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"];

export default function Projects() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const featuredRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-60px" });
  const odaRef = useRef<HTMLDivElement>(null);
  const odaInView = useInView(odaRef, { once: true, margin: "-60px" });
  const placeholderRef = useRef<HTMLDivElement>(null);
  const placeholderInView = useInView(placeholderRef, { once: true, margin: "-60px" });

  const farm = tr.projects.farm88;
  const farmFeatures = farm.features[lang];
  const farmStats = farm.stats[lang];

  const oda = tr.projects.odaEPrizrenit;
  const odaFeatures = oda.features[lang];
  const odaStats = oda.stats[lang];

  return (
    <section ref={sectionRef} id="projektet" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_50%_60%,rgba(28,34,56,0.4)_0%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className="max-w-xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/40 uppercase">
            <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
            {t(tr.projects.label, lang)}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-white">
            {t(tr.projects.heading1, lang)}<br />
            <span className="font-normal text-gold-400">{t(tr.projects.heading2, lang)}</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-6"><div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" /></motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] font-light leading-[1.8] text-white/40">{t(tr.projects.subheading, lang)}</motion.p>
        </motion.div>

        {/* ── Farm 88 Showcase ── */}
        <motion.div ref={featuredRef} initial="hidden" animate={featuredInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }} className="mt-16 overflow-hidden border border-white/[0.06] bg-white/[0.01]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left — Screenshot showcase */}
            <motion.div variants={fadeUp} className="relative overflow-hidden border-b border-white/[0.06] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_30%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
              <div className="relative">
                <ScreenshotShowcase screenshots={farm88Screenshots} urlLabel="farm88.al" />
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div variants={stagger} className="flex flex-col px-8 py-10 sm:px-12 sm:py-14 lg:px-14">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 border border-gold-400/20 bg-gold-400/[0.06] px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-400/80 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
                  {t(farm.badge, lang)}
                </span>
              </motion.div>
              <motion.h3 variants={fadeUp} className="mt-8 text-3xl font-light tracking-[-0.01em] text-white sm:text-4xl">
                {t(farm.name, lang)}{" "}<span className="text-white/30">{t(farm.nameSuffix, lang)}</span>
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-5 text-[14px] font-light leading-[1.8] text-white/40">{t(farm.description, lang)}</motion.p>

              <motion.div variants={fadeIn} className="mt-8"><div className="h-[1px] w-full bg-white/[0.06]" /></motion.div>

              {/* Features */}
              <motion.ul variants={fadeUp} className="mt-8 flex flex-col gap-3">
                {farmFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold-400/70"><CheckIcon /></span>
                    <span className="text-[13px] font-light leading-snug text-white/50">{feature}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Tech stack */}
              <motion.div variants={fadeUp} className="mt-8">
                <p className="text-[10px] font-medium tracking-[0.15em] text-white/20 uppercase">{t(farm.techStack, lang)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {farm88TechStack.map((tech) => (
                    <span key={tech} className="border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[10px] font-light text-white/30">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <div className="flex-1" />

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <a href="https://farm88.al" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 bg-gold-400 px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20">
                  {t(farm.ctaPrimary, lang)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
                </a>
                <a href="#kontakti" className="group inline-flex items-center gap-2.5 border border-white/[0.1] px-7 py-3.5 text-[11px] font-light tracking-[0.1em] text-white/40 uppercase transition-all duration-300 hover:border-white/20 hover:text-white/70">
                  {t(farm.ctaSecondary, lang)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 border-t border-white/[0.06] sm:grid-cols-4">
            {farmStats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col gap-1 px-8 py-6 sm:px-10 ${i < 3 ? "border-b border-r border-white/[0.06] sm:border-b-0" : "border-b border-white/[0.06] sm:border-b-0"}`}>
                <span className="text-xl font-light text-gold-400/80">{stat.value}</span>
                <span className="text-[11px] font-light text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Oda e Prizrenit Showcase ── */}
        <motion.div ref={odaRef} initial="hidden" animate={odaInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }} className="mt-4 overflow-hidden border border-white/[0.06] bg-white/[0.01]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left — Screenshot showcase */}
            <motion.div variants={fadeUp} className="relative overflow-hidden border-b border-white/[0.06] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_30%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
              <div className="relative">
                <ScreenshotShowcase screenshots={odaScreenshots} urlLabel="odaeprizrenit.al" />
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div variants={stagger} className="flex flex-col px-8 py-10 sm:px-12 sm:py-14 lg:px-14">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 border border-gold-400/20 bg-gold-400/[0.06] px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-400/80 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
                  {t(oda.badge, lang)}
                </span>
              </motion.div>
              <motion.h3 variants={fadeUp} className="mt-8 text-3xl font-light tracking-[-0.01em] text-white sm:text-4xl">
                {t(oda.name, lang)}{" "}<span className="text-white/30">{t(oda.nameSuffix, lang)}</span>
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-5 text-[14px] font-light leading-[1.8] text-white/40">{t(oda.description, lang)}</motion.p>

              <motion.div variants={fadeIn} className="mt-8"><div className="h-[1px] w-full bg-white/[0.06]" /></motion.div>

              {/* Features */}
              <motion.ul variants={fadeUp} className="mt-8 flex flex-col gap-3">
                {odaFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold-400/70"><CheckIcon /></span>
                    <span className="text-[13px] font-light leading-snug text-white/50">{feature}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Tech stack */}
              <motion.div variants={fadeUp} className="mt-8">
                <p className="text-[10px] font-medium tracking-[0.15em] text-white/20 uppercase">{t(oda.techStack, lang)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {odaTechStack.map((tech) => (
                    <span key={tech} className="border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[10px] font-light text-white/30">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <div className="flex-1" />

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <a href="https://odaeprizrenit.al" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 bg-gold-400 px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20">
                  {t(oda.ctaPrimary, lang)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
                </a>
                <a href="#kontakti" className="group inline-flex items-center gap-2.5 border border-white/[0.1] px-7 py-3.5 text-[11px] font-light tracking-[0.1em] text-white/40 uppercase transition-all duration-300 hover:border-white/20 hover:text-white/70">
                  {t(oda.ctaSecondary, lang)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 border-t border-white/[0.06] sm:grid-cols-4">
            {odaStats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col gap-1 px-8 py-6 sm:px-10 ${i < 3 ? "border-b border-r border-white/[0.06] sm:border-b-0" : "border-b border-white/[0.06] sm:border-b-0"}`}>
                <span className="text-xl font-light text-gold-400/80">{stat.value}</span>
                <span className="text-[11px] font-light text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Placeholder Projects ── */}
        <motion.div ref={placeholderRef} initial="hidden" animate={placeholderInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }} className="mt-4 grid gap-4 sm:grid-cols-2">
          <PlaceholderCard title={t(tr.projects.placeholder1.title, lang)} badge={t(tr.projects.placeholder1.badge, lang)} />
          <PlaceholderCard title={t(tr.projects.placeholder2.title, lang)} badge={t(tr.projects.placeholder2.badge, lang)} />
        </motion.div>

        {/* ── Portfolio CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={placeholderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <a href="#kontakti" className="group inline-flex items-center gap-3 border border-gold-400/20 bg-gold-400/[0.04] px-8 py-4 text-[12px] font-medium tracking-[0.15em] text-gold-400/70 uppercase transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-400/[0.08] hover:text-gold-400">
            {t(tr.projects.ctaPortfolio, lang)}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
