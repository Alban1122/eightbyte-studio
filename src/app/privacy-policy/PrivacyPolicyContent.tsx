"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";

const content = {
  title: { en: "Privacy Policy", al: "Politika e Privatësisë" },
  lastUpdated: { en: "Last updated: March 2026", al: "Përditësuar së fundmi: Mars 2026" },
  intro: {
    en: "Eight Byte Studio (\"we\", \"us\", \"our\") operates the website eightbyte.al. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.",
    al: "Eight Byte Studio (\"ne\", \"tonë\") operon faqen e internetit eightbyte.al. Kjo Politikë Privatësie shpjegon si mbledhim, përdorim dhe mbrojmë të dhënat tuaja personale kur vizitoni faqen tonë të internetit ose përdorni shërbimet tona.",
  },
  sections: [
    {
      title: { en: "1. Information We Collect", al: "1. Informacioni që Mbledhim" },
      content: {
        en: "When you use our contact form, we collect the following information:\n\n• Full name\n• Email address\n• Phone number (optional)\n• Project type selection\n• Message content\n\nThis information is provided voluntarily by you when you submit an inquiry through our website.",
        al: "Kur përdorni formularin tonë të kontaktit, ne mbledhim informacionin e mëposhtëm:\n\n• Emrin e plotë\n• Adresën e email-it\n• Numrin e telefonit (opsional)\n• Zgjedhjen e llojit të projektit\n• Përmbajtjen e mesazhit\n\nKy informacion jepet vullnetarisht nga ju kur dërgoni një pyetje nëpërmjet faqes sonë të internetit.",
      },
    },
    {
      title: { en: "2. Google Analytics", al: "2. Google Analytics" },
      content: {
        en: "We use Google Analytics 4 (Measurement ID: G-Q630WHGV0P) to understand how visitors interact with our website. Google Analytics collects:\n\n• Pages visited and time spent on each page\n• Device type, browser, and operating system\n• Approximate geographic location (country/city level)\n• Referral source (how you found our website)\n• Anonymous usage patterns\n\nThis data is collected through cookies and is processed by Google. No personally identifiable information is shared with Google Analytics.",
        al: "Ne përdorim Google Analytics 4 (ID Matjeje: G-Q630WHGV0P) për të kuptuar si ndërveprojnë vizitorët me faqen tonë të internetit. Google Analytics mbledh:\n\n• Faqet e vizituara dhe kohën e kaluar në secilën faqe\n• Llojin e pajisjes, shfletuesin dhe sistemin operativ\n• Vendndodhjen e përafërt gjeografike (nivel shteti/qyteti)\n• Burimin e referimit (si e gjetët faqen tonë)\n• Modele anonime përdorimi\n\nKëto të dhëna mblidhen nëpërmjet cookies dhe përpunohen nga Google. Asnjë informacion personalisht i identifikueshëm nuk ndahet me Google Analytics.",
      },
    },
    {
      title: { en: "3. How We Use Your Data", al: "3. Si i Përdorim të Dhënat Tuaja" },
      content: {
        en: "We use the information we collect for the following purposes:\n\n• To respond to your inquiries and contact form submissions\n• To provide you with information about our web development services\n• To improve our website's performance and user experience\n• To analyze website traffic and usage patterns\n• To ensure the security and functionality of our website",
        al: "Ne përdorim informacionin që mbledhim për qëllimet e mëposhtme:\n\n• Për t'iu përgjigjur pyetjeve tuaja dhe dërgimeve të formularit të kontaktit\n• Për t'ju ofruar informacion rreth shërbimeve tona të zhvillimit web\n• Për të përmirësuar performancën dhe përvojën e përdoruesit të faqes sonë\n• Për të analizuar trafikun dhe modelet e përdorimit të faqes\n• Për të siguruar sigurinë dhe funksionalitetin e faqes sonë të internetit",
      },
    },
    {
      title: { en: "4. Data Sharing", al: "4. Ndarja e të Dhënave" },
      content: {
        en: "We do not sell, trade, or rent your personal information to third parties. Your data may be shared only with:\n\n• Google Analytics — for anonymous website usage analytics\n• Email service providers — to deliver responses to your inquiries\n\nWe will never share your personal data for marketing purposes without your explicit consent.",
        al: "Ne nuk shesim, tregtojmë ose japim me qira informacionin tuaj personal palëve të treta. Të dhënat tuaja mund të ndahen vetëm me:\n\n• Google Analytics — për analitikë anonime të përdorimit të faqes\n• Ofruesit e shërbimit të email-it — për të dorëzuar përgjigjet ndaj pyetjeve tuaja\n\nNe nuk do të ndajmë kurrë të dhënat tuaja personale për qëllime marketingu pa pëlqimin tuaj të qartë.",
      },
    },
    {
      title: { en: "5. Your Rights (GDPR)", al: "5. Të Drejtat Tuaja (GDPR)" },
      content: {
        en: "Under the General Data Protection Regulation (GDPR), you have the following rights:\n\n• Right of Access — request a copy of the personal data we hold about you\n• Right to Rectification — request correction of inaccurate personal data\n• Right to Erasure — request deletion of your personal data\n• Right to Data Portability — request your data in a structured, machine-readable format\n• Right to Object — object to the processing of your personal data\n• Right to Restrict Processing — request limitation of how we process your data\n\nTo exercise any of these rights, please contact us at alban@eightbyte.al. We will respond to your request within 30 days.",
        al: "Sipas Rregullores së Përgjithshme për Mbrojtjen e të Dhënave (GDPR), ju keni të drejtat e mëposhtme:\n\n• E Drejta e Aksesit — kërkoni një kopje të të dhënave personale që mbajmë për ju\n• E Drejta e Korrigjimit — kërkoni korrigjimin e të dhënave personale të pasakta\n• E Drejta e Fshirjes — kërkoni fshirjen e të dhënave tuaja personale\n• E Drejta e Transportueshmërisë së të Dhënave — kërkoni të dhënat tuaja në format të strukturuar dhe të lexueshëm nga makina\n• E Drejta e Kundërshtimit — kundërshtoni përpunimin e të dhënave tuaja personale\n• E Drejta e Kufizimit të Përpunimit — kërkoni kufizimin e mënyrës si përpunojmë të dhënat tuaja\n\nPër të ushtruar cilëndo nga këto të drejta, ju lutemi na kontaktoni në alban@eightbyte.al. Ne do t'i përgjigjemi kërkesës suaj brenda 30 ditëve.",
      },
    },
    {
      title: { en: "6. Data Retention", al: "6. Ruajtja e të Dhënave" },
      content: {
        en: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:\n\n• Contact form submissions — retained for up to 12 months after your last interaction\n• Google Analytics data — retained according to Google's standard data retention settings (14 months)\n\nAfter these periods, your data is automatically deleted or anonymized.",
        al: "Ne ruajmë të dhënat tuaja personale vetëm për aq kohë sa është e nevojshme për të përmbushur qëllimet e përshkruara në këtë politikë:\n\n• Dërgimet e formularit të kontaktit — ruhen deri në 12 muaj pas ndërveprimit tuaj të fundit\n• Të dhënat e Google Analytics — ruhen sipas cilësimeve standarde të ruajtjes së të dhënave të Google (14 muaj)\n\nPas këtyre periudhave, të dhënat tuaja fshihen automatikisht ose anonimizohen.",
      },
    },
    {
      title: { en: "7. Cookies", al: "7. Cookies" },
      content: {
        en: "Our website uses cookies through Google Analytics 4 to collect anonymous usage data. These cookies help us understand how visitors use our website so we can improve it. The cookies used include:\n\n• _ga — used to distinguish unique users (expires after 2 years)\n• _ga_<container-id> — used to persist session state (expires after 2 years)\n\nYou can control cookies through your browser settings. Disabling cookies may affect some website functionality.",
        al: "Faqja jonë e internetit përdor cookies nëpërmjet Google Analytics 4 për të mbledhur të dhëna anonime përdorimi. Këto cookies na ndihmojnë të kuptojmë si i përdorin vizitorët faqen tonë që ta përmirësojmë atë. Cookies që përdoren përfshijnë:\n\n• _ga — përdoret për të dalluar përdoruesit unikë (skadon pas 2 vitesh)\n• _ga_<container-id> — përdoret për të ruajtur gjendjen e sesionit (skadon pas 2 vitesh)\n\nJu mund të kontrolloni cookies nëpërmjet cilësimeve të shfletuesit tuaj. Çaktivizimi i cookies mund të ndikojë në disa funksionalitete të faqes.",
      },
    },
    {
      title: { en: "8. Contact Us", al: "8. Na Kontaktoni" },
      content: {
        en: "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:\n\n• Email: alban@eightbyte.al\n• Website: eightbyte.al\n• Location: Tirana, Albania",
        al: "Nëse keni pyetje rreth kësaj Politike Privatësie ose dëshironi të ushtroni të drejtat tuaja për mbrojtjen e të dhënave, ju lutemi na kontaktoni:\n\n• Email: alban@eightbyte.al\n• Website: eightbyte.al\n• Vendndodhja: Tiranë, Shqipëri",
      },
    },
  ],
} as const;

function tx(obj: { en: string; al: string }, lang: Lang) {
  return obj[lang];
}

export default function PrivacyPolicyContent() {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl px-8 py-32 lg:px-12"
        >
          <h1 className="mb-2 text-3xl font-light tracking-tight text-white sm:text-4xl">
            {tx(content.title, lang)}
          </h1>
          <p className="mb-12 text-[13px] font-light text-white/40">
            {tx(content.lastUpdated, lang)}
          </p>
          <p className="mb-12 text-[15px] font-light leading-[1.8] text-white/40">
            {tx(content.intro, lang)}
          </p>

          {content.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="mb-4 text-lg font-light tracking-tight text-gold-400">
                {tx(section.title, lang)}
              </h2>
              <p className="whitespace-pre-line text-[15px] font-light leading-[1.8] text-white/40">
                {tx(section.content, lang)}
              </p>
            </section>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
