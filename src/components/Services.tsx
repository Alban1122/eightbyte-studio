"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t, COMPLETED_PROJECTS, TOTAL_OFFER_SPOTS } from "@/lib/translations";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconStorefront() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /><path d="M3 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" /><path d="M9 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" /><path d="M15 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" />
    </svg>
  );
}

function IconDiamond() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9z" /><path d="M2 9h20" /><path d="m10 3 2 6" /><path d="m14 3-2 6" /><path d="m6 3 4 6" /><path d="m18 3-4 6" /><path d="m12 9 0 13" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface CardData {
  icon: React.ReactNode;
  badges: string[];
  badgeType: "offer" | "featured";
  title: string;
  description: string;
  features: readonly string[];
  oldPrice: string;
  price: string;
  priceNote?: string;
  buttonLabel: string;
  buttonHref: string;
  featured?: boolean;
}

function Card({ card }: { card: CardData }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative flex flex-col overflow-hidden transition-all duration-500 ${
        card.featured
          ? "border border-gold-400/20 bg-gold-400/[0.02] lg:-translate-y-2"
          : "border border-white/[0.06] bg-white/[0.01]"
      } hover:-translate-y-1 hover:border-gold-400/25 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.06)] ${
        card.featured ? "lg:hover:-translate-y-3" : ""
      }`}
    >
      {/* Badges */}
      <div className={`flex flex-wrap items-center justify-center gap-2 border-b px-4 py-2.5 ${
        card.badgeType === "featured"
          ? "border-gold-400/10 bg-gold-400/[0.04]"
          : "border-red-500/10 bg-red-500/[0.04]"
      }`}>
        {card.badges.map((badge) => (
          <span
            key={badge}
            className={`text-[10px] font-medium tracking-[0.2em] uppercase ${
              badge.includes("POPULAR") || badge.includes("POPULLARIZUAR")
                ? "text-gold-400"
                : "text-red-400"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="flex flex-1 flex-col px-8 pb-10 pt-10 sm:px-10">
        <div className={`flex h-12 w-12 items-center justify-center ${card.featured ? "text-gold-400" : "text-white/40"} transition-colors duration-300 group-hover:text-gold-400`}>
          {card.icon}
        </div>
        <h3 className="mt-6 text-lg font-normal tracking-[-0.01em] text-white">{card.title}</h3>
        <p className="mt-3 text-[14px] font-light leading-relaxed text-white/35">{card.description}</p>
        <div className="mt-8 h-[1px] w-full bg-white/[0.06]" />
        <ul className="mt-8 flex flex-col gap-4">
          {card.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className={card.featured ? "text-gold-400/70" : "text-white/20"}><CheckIcon /></span>
              <span className="text-[13px] font-light leading-snug text-white/50">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex-1" />

        {/* Pricing */}
        <div className="mt-10">
          <span className="text-[15px] font-light text-white/30 line-through decoration-red-400/40">{card.oldPrice}</span>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-2xl font-normal tracking-tight text-gold-400">{card.price}</span>
            {card.priceNote && <span className="text-sm font-light text-white/30">{card.priceNote}</span>}
          </div>
        </div>

        <a
          href={card.buttonHref}
          className={`mt-6 flex items-center justify-center gap-2.5 px-6 py-4 text-[12px] font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
            card.featured ? "bg-gold-400 text-navy-950 hover:bg-gold-300" : "border border-white/[0.1] text-white/50 hover:border-white/20 hover:text-white"
          }`}
        >
          {card.buttonLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      {card.featured && (
        <>
          <div className="absolute left-0 top-0 h-8 w-[1px] bg-gradient-to-b from-gold-400/40 to-transparent" />
          <div className="absolute left-0 top-0 h-[1px] w-8 bg-gradient-to-r from-gold-400/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-gradient-to-t from-gold-400/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-[1px] w-8 bg-gradient-to-l from-gold-400/40 to-transparent" />
        </>
      )}
    </motion.div>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards: CardData[] = [
    {
      icon: <IconGlobe />,
      badges: [t(tr.services.card1.badge, lang)],
      badgeType: "offer",
      title: t(tr.services.card1.title, lang),
      description: t(tr.services.card1.description, lang),
      features: tr.services.card1.features[lang],
      oldPrice: t(tr.services.card1.oldPrice, lang),
      price: t(tr.services.card1.price, lang),
      buttonLabel: t(tr.services.card1.button, lang),
      buttonHref: "#kontakti",
    },
    {
      icon: <IconStorefront />,
      badges: [t(tr.services.card2.badge, lang), t(tr.services.card2.badge2, lang)],
      badgeType: "featured",
      title: t(tr.services.card2.title, lang),
      description: t(tr.services.card2.description, lang),
      features: tr.services.card2.features[lang],
      oldPrice: t(tr.services.card2.oldPrice, lang),
      price: t(tr.services.card2.price, lang),
      buttonLabel: t(tr.services.card2.button, lang),
      buttonHref: "#projektet",
      featured: true,
    },
    {
      icon: <IconDiamond />,
      badges: [t(tr.services.card3.badge, lang)],
      badgeType: "offer",
      title: t(tr.services.card3.title, lang),
      description: t(tr.services.card3.description, lang),
      features: tr.services.card3.features[lang],
      oldPrice: t(tr.services.card3.oldPrice, lang),
      price: t(tr.services.card3.price, lang),
      priceNote: t(tr.services.card3.priceNote, lang),
      buttonLabel: t(tr.services.card3.button, lang),
      buttonHref: "#kontakti",
    },
  ];

  return (
    <section ref={sectionRef} id="sherbimet" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(28,34,56,0.5)_0%,transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className="max-w-xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/30 uppercase">
            <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
            {t(tr.services.label, lang)}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-white">
            {t(tr.services.heading1, lang)}<br />
            <span className="font-normal text-gold-400">{t(tr.services.heading2, lang)}</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] font-light leading-[1.8] text-white/40">
            {t(tr.services.subheading, lang)}
          </motion.p>
        </motion.div>

        {/* Offer banner */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-14"
        >
          <div className="relative overflow-hidden border border-red-500/15 bg-red-500/[0.03]">
            <div className="flex flex-col items-center gap-3 px-6 py-5 sm:flex-row sm:justify-between">
              <p className="text-center text-[13px] font-medium tracking-wide text-red-300/80 sm:text-left">
                <span className="mr-2">&#128293;</span>
                {t(tr.services.offerBanner, lang)}
              </p>
              <span className="inline-flex items-center gap-2 border border-red-500/20 bg-red-500/[0.06] px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] text-red-300/90 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
                </span>
                {TOTAL_OFFER_SPOTS - COMPLETED_PROJECTS.length}/{TOTAL_OFFER_SPOTS}{" "}
                {lang === "en" ? "SPOTS AVAILABLE" : "VENDE TË DISPONUESHME"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          className="mt-6 grid items-start gap-4 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
