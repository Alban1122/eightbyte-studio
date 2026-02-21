"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations as tr, t } from "@/lib/translations";

const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } };

function LocationIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>; }
function WhatsAppIcon({ size = 18 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>; }
function EmailIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>; }
function InstagramIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>; }
function PhoneIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function SendIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>; }
function CheckCircleIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>; }

function ContactForm() {
  const { lang } = useLanguage();
  const form = tr.contact.form;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", projectType: "", message: "" }); }, 4000);
  };

  const inputClasses = "w-full bg-white/[0.03] border border-white/[0.08] px-5 py-3.5 text-[14px] font-light text-white placeholder:text-white/20 transition-all duration-300 focus:border-gold-400/30 focus:outline-none focus:ring-0 focus:bg-white/[0.05]";
  const options = form.projectOptions[lang];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center border border-gold-400/15 bg-gold-400/[0.03] px-8 py-20 text-center">
            <div className="text-gold-400"><CheckCircleIcon /></div>
            <p className="mt-4 text-lg font-light text-white/70">{t(form.success1, lang)}</p>
            <p className="mt-2 text-[14px] font-light text-white/35">{t(form.success2, lang)}</p>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder={t(form.name, lang)} required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} />
              <input type="email" placeholder={t(form.emailField, lang)} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="tel" placeholder={t(form.phone, lang)} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} />
              <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={`${inputClasses} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_16px_center] bg-no-repeat ${!formData.projectType ? "text-white/20" : ""}`}>
                <option value="" className="bg-navy-900 text-white/40">{t(form.projectType, lang)}</option>
                {options.map((opt, i) => (<option key={i} value={opt} className="bg-navy-900 text-white">{opt}</option>))}
              </select>
            </div>
            <textarea placeholder={t(form.message, lang)} required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} />
            <button type="submit" className="group mt-2 flex w-full items-center justify-center gap-3 bg-gold-400 px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-navy-950 uppercase transition-all duration-300 hover:bg-gold-300">
              {t(form.submit, lang)}<SendIcon />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactInfo() {
  const { lang } = useLanguage();
  const contacts = [
    { icon: <LocationIcon />, label: t(tr.contact.location.label, lang), value: t(tr.contact.location.value, lang) },
    { icon: <PhoneIcon />, label: t(tr.contact.whatsapp, lang), value: "+355 69 523 2002", href: "https://wa.me/355695232002" },
    { icon: <EmailIcon />, label: t(tr.contact.email, lang), value: "albanmucaj22@gmail.com", href: "mailto:albanmucaj22@gmail.com" },
    { icon: <InstagramIcon />, label: t(tr.contact.instagram, lang), value: "@albanmucaj_", href: "https://instagram.com/albanmucaj_" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6">
        {contacts.map((item) => {
          const content = (
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-gold-400/60">{item.icon}</div>
              <div>
                <p className="text-[11px] font-light tracking-[0.15em] text-white/25 uppercase">{item.label}</p>
                <p className="mt-1 text-[14px] font-light text-white/60 transition-colors duration-300 group-hover:text-white">{item.value}</p>
              </div>
            </div>
          );
          if ("href" in item && item.href) {
            return <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group">{content}</a>;
          }
          return <div key={item.label}>{content}</div>;
        })}
      </div>
      <div className="mt-10 h-[1px] w-full bg-white/[0.06]" />
      <div className="mt-8 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="text-[13px] font-light text-white/40">{t(tr.contact.available, lang)}</span>
      </div>
      <a href="https://wa.me/355695232002?text=P%C3%ABrsh%C3%ABndetje!%20D%C3%ABshiroj%20t%C3%AB%20diskutoj%20p%C3%ABr%20nj%C3%AB%20projekt%20web" target="_blank" rel="noopener noreferrer" className="group mt-8 flex items-center justify-center gap-3 bg-[#25D366]/90 px-8 py-4 text-[13px] font-medium tracking-[0.05em] text-white transition-all duration-300 hover:bg-[#25D366]">
        <WhatsAppIcon size={18} />
        {t(tr.contact.whatsappCta, lang)}
      </a>
      <div className="mt-8 flex items-center gap-4">
        <a href="https://instagram.com/albanmucaj_" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/60"><InstagramIcon /></a>
        <a href="https://www.linkedin.com/in/alban-mucaj-52ba1636b" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section ref={sectionRef} id="kontakti" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold-400/[0.012] blur-[150px]" />
      </div>
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className="max-w-xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2.5 text-[13px] font-light tracking-[0.2em] text-white/30 uppercase">
            <span className="inline-block h-[1px] w-5 bg-gold-400/50" />
            {t(tr.contact.label, lang)}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-white">
            {t(tr.contact.heading1, lang)}<br />
            <span className="font-normal text-gold-400">{t(tr.contact.heading2, lang)}</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-6"><div className="h-[1px] w-16 bg-gradient-to-r from-gold-400/80 to-gold-400/0" /></motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] font-light leading-[1.8] text-white/40">{t(tr.contact.subheading, lang)}</motion.p>
        </motion.div>
        <motion.div ref={contentRef} initial="hidden" animate={contentInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }} className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <motion.div variants={fadeUp}><ContactInfo /></motion.div>
          <motion.div variants={fadeUp}><ContactForm /></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
