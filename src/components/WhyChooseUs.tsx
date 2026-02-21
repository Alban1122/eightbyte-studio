"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

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

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

function IconRocket() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function IconFlag() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function DifferentiatorCard({ card }: { card: CardItem }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden border border-white/[0.06] bg-white/[0.01] transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/20 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.06)]"
    >
      <div className="relative px-8 py-10 sm:px-10 sm:py-12">
        <div className="flex h-12 w-12 items-center justify-center text-gold-400/70 transition-colors duration-300 group-hover:text-gold-400">
          {card.icon}
        </div>
        <h3 className="mt-6 text-[17px] font-normal tracking-[-0.01em] text-white">
          {card.title}
        </h3>
        <p className="mt-3 text-[14px] font-light leading-[1.8] text-white/35">
          {card.description}
        </p>
      </div>
      <div className="absolute left-0 top-0 h-8 w-[1px] bg-gradient-to-b from-gold-400/0 to-transparent transition-all duration-500 group-hover:from-gold-400/30" />
      <div className="absolute left-0 top-0 h-[1px] w-8 bg-gradient-to-r from-gold-400/0 to-transparent transition-all duration-500 group-hover:from-gold-400/30" />
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards: CardItem[] = [
    {
      icon: <IconRocket />,
      title: t(tr.whyUs.card1.title, lang),
      description: t(tr.whyUs.card1.description, lang),
    },
    {
      icon: <IconTrendingUp />,
      title: t(tr.whyUs.card2.title, lang),
      description: t(tr.whyUs.card2.description, lang),
    },
    {
      icon: <IconFlag />,
      title: t(tr.whyUs.card3.title, lang),
      description: t(tr.whyUs.card3.description, lang),
    },
    {
      icon: <IconWallet />,
      title: t(tr.whyUs.card4.title, lang),
      description: t(tr.whyUs.card4.description, lang),
    },
  ];

  return (
    <section ref={sectionRef} id="rreth-nesh" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.02] blur-[150px]" />
      </div>
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-xl"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/30 uppercase">
            <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
            {t(tr.whyUs.label, lang)}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-white">
            {t(tr.whyUs.heading1, lang)}<br />
            <span className="font-normal text-gold-400">{t(tr.whyUs.heading2, lang)}</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] font-light leading-[1.8] text-white/40">
            {t(tr.whyUs.subheading, lang)}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <DifferentiatorCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
