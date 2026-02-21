"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

/* ─── Animation variants ─── */
const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

/* ─── Architectural Visual ─── */
function ArchitecturalVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-full min-h-[500px] w-full items-center justify-center lg:min-h-0"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-gold-400/[0.04] blur-[120px]" />
      </div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative h-[400px] w-[360px] sm:h-[460px] sm:w-[400px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-8 rounded-sm border border-white/[0.08]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-12 left-16 right-4 top-4 rounded-sm border border-gold-400/20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-20 left-24 right-16 top-16 rounded-sm border border-white/[0.05]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute left-8 top-8"
        >
          <div className="h-6 w-[1px] bg-gold-400/60" />
          <div className="absolute left-0 top-0 h-[1px] w-6 bg-gold-400/60" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 right-4"
        >
          <div className="absolute bottom-0 right-0 h-6 w-[1px] bg-gold-400/60" />
          <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gold-400/60" />
        </motion.div>
        <motion.div
          animate={{ y: [-6, 6] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute right-0 top-1/4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="h-20 w-20 rounded-full border border-gold-400/15"
          />
        </motion.div>
        <motion.div
          animate={{ y: [4, -4] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-32 left-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="h-3 w-3 rounded-full bg-gold-400/30"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-24 left-4 right-20 top-32"
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-6 left-20"
        >
          <motion.div
            animate={{ y: [3, -3] }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="grid grid-cols-3 gap-2.5"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`h-[3px] w-[3px] rounded-full ${i === 4 ? "bg-gold-400/40" : "bg-white/[0.08]"}`} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 90] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-12 top-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="h-4 w-4 border border-white/[0.06]"
          />
        </motion.div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-40 w-40 rounded-full bg-gold-400/[0.03] blur-[60px]" />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(28,34,56,0.8)_0%,transparent_70%)]" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gold-400/[0.02] blur-[150px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gold-400/[0.015] blur-[130px]"
        />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-8 py-32 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-12 lg:py-0"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          {/* Badge — in hero content, not header */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/40 uppercase">
              <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
              {t(tr.hero.badge, lang)}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-10 text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-[1.1] tracking-[-0.02em] text-white"
          >
            {t(tr.hero.headline1, lang)}
            <br />
            <span className="font-normal text-gold-400">{t(tr.hero.headline2, lang)}</span>
          </motion.h1>

          <motion.div variants={fadeIn} className="mt-8">
            <div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl font-light tracking-wide text-white/70 sm:text-2xl"
          >
            {t(tr.hero.tagline, lang)}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] font-light leading-[1.8] text-white/40"
          >
            {t(tr.hero.description, lang)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#projektet"
              className="group relative inline-flex items-center gap-3 bg-gold-400 px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300"
            >
              {t(tr.hero.ctaPrimary, lang)}
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#kontakti"
              className="group inline-flex items-center gap-3 border border-white/[0.12] px-8 py-4 text-[13px] font-light tracking-[0.1em] text-white/60 uppercase transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              {t(tr.hero.ctaSecondary, lang)}
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="hidden items-center justify-center lg:flex"
        >
          <ArchitecturalVisual />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[11px] font-light tracking-[0.25em] text-white/25 uppercase">
            {t(tr.hero.scroll, lang)}
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gold-400/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
