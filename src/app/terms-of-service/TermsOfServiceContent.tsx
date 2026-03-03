"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";

const content = {
  title: { en: "Terms of Service", al: "Kushtet e Shërbimit" },
  lastUpdated: { en: "Last updated: March 2026", al: "Përditësuar së fundmi: Mars 2026" },
  intro: {
    en: "These Terms of Service govern your use of the eightbyte.al website and the web development services provided by Eight Byte Studio. By accessing our website or engaging our services, you agree to these terms.",
    al: "Këto Kushte Shërbimi rregullojnë përdorimin tuaj të faqes së internetit eightbyte.al dhe shërbimeve të zhvillimit web të ofruara nga Eight Byte Studio. Duke aksesuar faqen tonë ose duke angazhuar shërbimet tona, ju pranoni këto kushte.",
  },
  sections: [
    {
      title: { en: "1. Service Description", al: "1. Përshkrimi i Shërbimit" },
      content: {
        en: "Eight Byte Studio is a web development agency based in Tirana, Albania. We provide website design, development, SEO optimization, and related digital services for businesses. Our services include but are not limited to:\n\n• Custom website design and development\n• SEO optimization and Google ranking services\n• Digital menu and e-commerce solutions\n• Website maintenance and updates",
        al: "Eight Byte Studio është një agjenci zhvillimi web me bazë në Tiranë, Shqipëri. Ne ofrojmë dizajn faqesh interneti, zhvillim, optimizim SEO dhe shërbime të lidhura digjitale për biznese. Shërbimet tona përfshijnë por nuk kufizohen në:\n\n• Dizajn dhe zhvillim i personalizuar i faqeve të internetit\n• Optimizim SEO dhe shërbime renditjeje në Google\n• Zgjidhje menuje digjitale dhe e-commerce\n• Mirëmbajtje dhe përditësime të faqeve të internetit",
      },
    },
    {
      title: { en: "2. Use of Website", al: "2. Përdorimi i Faqes së Internetit" },
      content: {
        en: "You may use our website for lawful purposes only. You agree not to:\n\n• Use the website in any way that violates applicable laws or regulations\n• Attempt to gain unauthorized access to our systems or networks\n• Interfere with or disrupt the website's functionality\n• Copy, reproduce, or distribute our website content without permission\n• Use automated tools to scrape or extract data from our website",
        al: "Ju mund ta përdorni faqen tonë të internetit vetëm për qëllime të ligjshme. Ju pranoni të mos:\n\n• Përdorni faqen në çdo mënyrë që shkel ligjet ose rregulloret e zbatueshme\n• Përpiqeni të fitoni akses të paautorizuar në sistemet ose rrjetet tona\n• Ndërhyni ose prishni funksionalitetin e faqes së internetit\n• Kopjoni, riprodhoni ose shpërndani përmbajtjen e faqes sonë pa leje\n• Përdorni mjete të automatizuara për të nxjerrë të dhëna nga faqja jonë",
      },
    },
    {
      title: { en: "3. Intellectual Property", al: "3. Pronësia Intelektuale" },
      content: {
        en: "All content on this website, including but not limited to text, graphics, logos, images, and code, is the property of Eight Byte Studio and is protected by copyright and intellectual property laws.\n\nUpon full payment for a project, clients receive ownership of the custom website code and design created specifically for them. Eight Byte Studio retains the right to showcase completed projects in our portfolio unless otherwise agreed in writing.",
        al: "E gjithë përmbajtja në këtë faqe interneti, duke përfshirë por pa u kufizuar në tekst, grafika, logo, imazhe dhe kod, është pronë e Eight Byte Studio dhe mbrohet nga ligjet e të drejtës së autorit dhe pronësisë intelektuale.\n\nPas pagesës së plotë për një projekt, klientët marrin pronësinë e kodit dhe dizajnit të personalizuar të faqes së krijuar posaçërisht për ta. Eight Byte Studio ruan të drejtën për të shfaqur projektet e përfunduara në portfolio-n tonë përveçse nëse bihet dakord ndryshe me shkrim.",
      },
    },
    {
      title: { en: "4. Payment Terms", al: "4. Kushtet e Pagesës" },
      content: {
        en: "• A deposit of 50% of the total project cost is required before work begins\n• The remaining 50% is due upon project completion and before final delivery\n• All prices are listed in Euros (EUR) and are inclusive of applicable taxes\n• Payment methods and specific terms will be outlined in individual project agreements\n• Late payments may result in project delays or suspension of services",
        al: "• Një paradhënie prej 50% të kostos totale të projektit kërkohet përpara fillimit të punës\n• 50% e mbetur duhet të paguhet pas përfundimit të projektit dhe përpara dorëzimit final\n• Të gjitha çmimet janë të listuara në Euro (EUR) dhe përfshijnë taksat e zbatueshme\n• Metodat e pagesës dhe kushtet specifike do të përshkruhen në marrëveshjet individuale të projektit\n• Pagesat e vonuara mund të rezultojnë në vonesa të projektit ose pezullim të shërbimeve",
      },
    },
    {
      title: { en: "5. Project Deliverables", al: "5. Dorëzimet e Projektit" },
      content: {
        en: "• Project timelines and deliverables will be agreed upon before work begins\n• We will provide regular updates on project progress\n• Clients are responsible for providing necessary content (text, images, logos) in a timely manner\n• Delays in providing content may affect the project timeline\n• Up to 2 rounds of revisions are included in the standard project scope\n• Additional revisions beyond the agreed scope may incur extra charges",
        al: "• Afatet kohore dhe dorëzimet e projektit do të bihen dakord përpara fillimit të punës\n• Ne do të ofrojmë përditësime të rregullta mbi ecurinë e projektit\n• Klientët janë përgjegjës për ofrimin e përmbajtjes së nevojshme (tekst, imazhe, logo) në kohë\n• Vonesat në ofrimin e përmbajtjes mund të ndikojnë në afatin kohor të projektit\n• Deri në 2 raunde rishikimesh përfshihen në fushën standarde të projektit\n• Rishikimet shtesë përtej fushës së rënë dakord mund të kenë kosto shtesë",
      },
    },
    {
      title: { en: "6. Limitation of Liability", al: "6. Kufizimi i Përgjegjësisë" },
      content: {
        en: "Eight Byte Studio provides its services \"as is\" and makes no warranties, express or implied, regarding the results of our work. We shall not be liable for:\n\n• Any indirect, incidental, or consequential damages\n• Loss of profits, data, or business opportunities\n• Issues arising from third-party services, hosting providers, or domain registrars\n• Downtime or interruptions beyond our reasonable control\n\nOur total liability shall not exceed the amount paid by the client for the specific service in question.",
        al: "Eight Byte Studio ofron shërbimet e veta \"siç janë\" dhe nuk jep garanci, të shprehura ose të nënkuptuara, lidhur me rezultatet e punës sonë. Ne nuk do të jemi përgjegjës për:\n\n• Çdo dëm indirekt, aksidental ose pasojor\n• Humbje fitimesh, të dhënash ose mundësish biznesi\n• Çështje që lindin nga shërbimet e palëve të treta, ofruesit e hosting-ut ose regjistruesit e domain-eve\n• Ndërprerje ose ndërprerje përtej kontrollit tonë të arsyeshëm\n\nPërgjegjësia jonë totale nuk do të kalojë shumën e paguar nga klienti për shërbimin specifik në fjalë.",
      },
    },
    {
      title: { en: "7. Termination", al: "7. Përfundimi" },
      content: {
        en: "Either party may terminate a project agreement with written notice. In the event of termination:\n\n• The client is responsible for payment of all work completed up to the date of termination\n• Any deposits paid are non-refundable unless otherwise agreed in writing\n• Eight Byte Studio will provide all completed work and assets to the client\n• Ongoing services (such as monthly SEO maintenance) can be cancelled with 30 days written notice",
        al: "Secila palë mund të përfundojë një marrëveshje projekti me njoftim me shkrim. Në rast të përfundimit:\n\n• Klienti është përgjegjës për pagesën e të gjithë punës së përfunduar deri në datën e përfundimit\n• Çdo paradhënie e paguar nuk rikthehet përveçse nëse bihet dakord ndryshe me shkrim\n• Eight Byte Studio do t'i ofrojë klientit të gjithë punën dhe asetet e përfunduara\n• Shërbimet e vazhdueshme (si mirëmbajtja mujore SEO) mund të anulohen me njoftim me shkrim 30 ditë përpara",
      },
    },
    {
      title: { en: "8. Governing Law", al: "8. Ligji i Zbatueshëm" },
      content: {
        en: "These Terms of Service are governed by and construed in accordance with the laws of the Republic of Albania. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Tirana, Albania.",
        al: "Këto Kushte Shërbimi rregullohen dhe interpretohen në përputhje me ligjet e Republikës së Shqipërisë. Çdo mosmarrëveshje që lind nga këto kushte do t'i nënshtrohet juridiksionit ekskluziv të gjykatave të Tiranës, Shqipëri.",
      },
    },
    {
      title: { en: "9. Contact Us", al: "9. Na Kontaktoni" },
      content: {
        en: "If you have any questions about these Terms of Service, please contact us:\n\n• Email: alban@eightbyte.al\n• Website: eightbyte.al\n• Location: Tirana, Albania",
        al: "Nëse keni pyetje rreth këtyre Kushteve të Shërbimit, ju lutemi na kontaktoni:\n\n• Email: alban@eightbyte.al\n• Website: eightbyte.al\n• Vendndodhja: Tiranë, Shqipëri",
      },
    },
  ],
} as const;

function tx(obj: { en: string; al: string }, lang: Lang) {
  return obj[lang];
}

export default function TermsOfServiceContent() {
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
          <p className="mb-12 text-[13px] font-light text-white/30">
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
