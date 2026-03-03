"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } };

interface Review {
  id: number;
  name: string;
  company: string;
  rating: number;
  message: string;
  createdAt: string;
}

const inputClasses = "w-full bg-white/[0.03] border border-white/[0.08] px-5 py-3.5 text-[14px] font-light text-white placeholder:text-white/20 transition-all duration-300 focus:border-gold-400/30 focus:outline-none focus:ring-0 focus:bg-white/[0.05]";

function StarSelector({ rating, onRate, hoverRating, onHover, onLeave }: {
  rating: number;
  onRate: (n: number) => void;
  hoverRating: number;
  onHover: (n: number) => void;
  onLeave: () => void;
}) {
  return (
    <div className="flex gap-1.5" onMouseLeave={onLeave}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (hoverRating || rating);
        return (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            onMouseEnter={() => onHover(star)}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            className="transition-transform duration-150 hover:scale-110"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#D4A853" : "none"} stroke={filled ? "#D4A853" : "currentColor"} strokeWidth="1.5" className={filled ? "" : "text-white/20"}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= rating ? "#D4A853" : "none"} stroke={star <= rating ? "#D4A853" : "currentColor"} strokeWidth="1.5" className={star <= rating ? "" : "text-white/10"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const { lang } = useLanguage();
  const rv = tr.testimonials.reviews;
  const [expanded, setExpanded] = useState(false);
  const needsClamp = review.message.length > 200;

  return (
    <motion.div variants={fadeUp} className="border border-white/[0.05] bg-white/[0.01] px-8 py-8 sm:px-10 sm:py-10">
      <StarDisplay rating={review.rating} />
      <div className="mt-5">
        <p className={`text-[14px] font-light leading-[1.8] text-white/50 ${!expanded && needsClamp ? "line-clamp-4" : ""}`}>
          &ldquo;{review.message}&rdquo;
        </p>
        {needsClamp && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[13px] font-light text-gold-400/70 transition-colors duration-200 hover:text-gold-400"
          >
            {expanded ? t(rv.readLess, lang) : t(rv.readMore, lang)}
          </button>
        )}
      </div>
      <div className="mt-6 h-[1px] w-8 bg-white/[0.04]" />
      <div className="mt-5">
        <p className="text-[14px] font-light text-white/70">{review.name}</p>
        <p className="mt-0.5 text-[12px] font-light text-white/30">{review.company}</p>
      </div>
      <p className="mt-3 text-[11px] font-light text-white/40">{new Date(review.createdAt).toLocaleDateString()}</p>
    </motion.div>
  );
}

function ReviewForm({ onSubmit }: { onSubmit: (review: Review) => void }) {
  const { lang } = useLanguage();
  const rv = tr.testimonials.reviews;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, rating, message, website }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit review");
      }

      const review: Review = await res.json();
      onSubmit(review);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setCompany("");
        setRating(5);
        setMessage("");
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="border border-gold-400/15 bg-gold-400/[0.02] p-8 sm:p-10">
      <h3 className="text-[15px] font-light tracking-wide text-white/60">{t(rv.formHeading, lang)}</h3>
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
              </svg>
              <p className="mt-4 text-[15px] font-light text-white/60">{t(rv.success, lang)}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t(rv.nameField, lang)}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder={t(rv.businessField, lang)}
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClasses}
                />
              </div>
              {/* Honeypot — hidden from humans, bots fill it */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
              />
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-light text-white/30">{t(rv.ratingField, lang)}</span>
                <StarSelector
                  rating={rating}
                  onRate={setRating}
                  hoverRating={hoverRating}
                  onHover={setHoverRating}
                  onLeave={() => setHoverRating(0)}
                />
              </div>
              <textarea
                placeholder={t(rv.messageField, lang)}
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClasses} resize-none`}
              />
              {error && (
                <p className="text-[13px] font-light text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 flex w-full items-center justify-center gap-3 bg-gold-400 px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950" />
                ) : (
                  t(rv.submit, lang)
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
      })
      .catch(() => {
        // silently fail — reviews just won't show
      })
      .finally(() => setLoading(false));
  }, []);

  const handleNewReview = useCallback((review: Review) => {
    setReviews((prev) => [review, ...prev]);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.015] blur-[150px]" />
      </div>
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className="max-w-xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/40 uppercase">
            <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
            {t(tr.testimonials.label, lang)}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-white">
            {t(tr.testimonials.heading1, lang)}<br />
            <span className="font-normal text-gold-400">{t(tr.testimonials.heading2, lang)}</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-6"><div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" /></motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] font-light leading-[1.8] text-white/40">{t(tr.testimonials.subheading, lang)}</motion.p>
        </motion.div>

        <div className="mt-16">
          <ReviewForm onSubmit={handleNewReview} />
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="flex justify-center py-8">
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-gold-400/60" />
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-[14px] font-light text-white/25">{t(tr.testimonials.reviews.noReviews, lang)}</p>
          ) : (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
