export type Lang = "en" | "al";

/** Add project names here as they are completed. The spots counter derives from this. */
export const COMPLETED_PROJECTS = ["Farm 88"] as const;
export const TOTAL_OFFER_SPOTS = 10;

export const translations = {
  /* ─── Navigation ─── */
  nav: {
    services: { en: "Services", al: "Sherbimet" },
    projects: { en: "Projects", al: "Projektet" },
    about: { en: "About Us", al: "Rreth Nesh" },
    contact: { en: "Contact", al: "Kontakti" },
    cta: { en: "Get in Touch", al: "Na Kontakto" },
  },

  /* ─── Hero ─── */
  hero: {
    badge: { en: "Web Developer in Tirana, Albania", al: "Web Developer në Tiranë, Shqipëri" },
    headline1: { en: "Eight Byte", al: "Eight Byte" },
    headline2: { en: "Studio", al: "Studio" },
    tagline: { en: "We Build, You Grow", al: "Ne Ndërtojmë, Ju Rriteni" },
    description: {
      en: "Modern website design and SEO optimization for Albanian businesses. From restaurant websites with digital menus to small business sites — we build affordable websites that rank on Google.",
      al: "Krijim faqesh interneti moderne dhe optimizim SEO për biznese shqiptare. Nga website për restorant me meny digjitale tek faqe biznesi — ndërtojmë website të aksesueshme që renditen në Google.",
    },
    ctaPrimary: { en: "View Projects", al: "Shiko Projektet" },
    ctaSecondary: { en: "Contact Us", al: "Kontakto" },
    scroll: { en: "Scroll", al: "Scroll" },
  },

  /* ─── Services ─── */
  services: {
    label: { en: "Services", al: "Shërbimet" },
    heading1: { en: "Web Development", al: "Shërbimet" },
    heading2: { en: "Services", al: "Tona" },
    subheading: {
      en: "Affordable website design packages for small businesses and restaurants in Tirana. Every site includes SEO and Google optimization.",
      al: "Paketa të aksesueshme dizajni web për biznese të vogla dhe restorante në Tiranë. Çdo faqe përfshin SEO dhe optimizim për Google.",
    },
    offerBanner: {
      en: "OFFER FOR THE FIRST 10 CLIENTS — Reduced prices to build our portfolio",
      al: "OFERT\u00CB P\u00CBR 10 KLIENT\u00CBT E PAR\u00CB — \u00c7mime t\u00eb reduktuara p\u00ebr t\u00eb nd\u00ebrtuar portfolio-n ton\u00eb",
    },
    card1: {
      badge: { en: "LIMITED OFFER", al: "OFERT\u00cb E KUFIZUAR" },
      title: { en: "Starter Website", al: "Website Starter" },
      description: {
        en: "Professional web design for small businesses in Albania. Get your business online with a modern, Google-optimized website — fast and affordable.",
        al: "Dizajn profesional web p\u00ebr biznese t\u00eb vogla n\u00eb Shqip\u00ebri. Shtini biznesin tuaj online me nj\u00eb website modern, t\u00eb optimizuar p\u00ebr Google — shpejt dhe me \u00e7mim t\u00eb aksesuesh\u00ebm.",
      },
      features: {
        en: [
          "Modern & responsive design",
          "5 sections (Hero, About, Services, Gallery, Contact)",
          "Google optimized",
          "1 week delivery",
        ],
        al: [
          "Dizajn modern dhe responsiv",
          "5 seksione (Hero, Rreth Nesh, Sh\u00ebrbime, Galeri, Kontakt)",
          "Optimizuar p\u00ebr Google",
          "1 jav\u00eb dor\u00ebzim",
        ],
      },
      oldPrice: { en: "800\u20ac", al: "800\u20ac" },
      price: { en: "500\u20ac", al: "500\u20ac" },
      button: { en: "Learn More", al: "M\u00ebso M\u00eb Shum\u00eb" },
    },
    card2: {
      badge: { en: "MOST POPULAR", al: "M\u00cb I POPULLARIZUAR" },
      badge2: { en: "OFFER 20% OFF", al: "OFERT\u00cb 20% ZBRITJE" },
      title: { en: "Professional Website + SEO", al: "Website Profesional + SEO" },
      description: {
        en: "Complete website solution for businesses in Tirana and across Albania. Rank higher on Google and attract more customers with advanced SEO and a fully custom website.",
        al: "Zgjidhje e plot\u00eb website p\u00ebr biznese n\u00eb Tiran\u00eb dhe n\u00eb t\u00eb gjith\u00eb Shqip\u00ebrin\u00eb. Rendituni m\u00eb lart n\u00eb Google dhe terhiqni m\u00eb shum\u00eb klient\u00eb me SEO t\u00eb avancuar dhe nj\u00eb website plot\u00ebsisht t\u00eb personalizuar.",
      },
      features: {
        en: [
          "Everything from Starter plan",
          "Up to 10 sections & custom pages",
          "Digital menu / product catalog",
          "WhatsApp & contact integrations",
          "Google Maps integration",
          "+ Advanced SEO setup",
          "2 weeks delivery",
        ],
        al: [
          "T\u00eb gjitha nga plani Starter",
          "Deri n\u00eb 10 seksione & faqe t\u00eb personalizuara",
          "Meny digjitale / katalog produktesh",
          "Integrime WhatsApp & kontakti",
          "Integrimi me Google Maps",
          "+ Konfigurim SEO i avancuar",
          "2 jav\u00eb dor\u00ebzim",
        ],
      },
      oldPrice: { en: "1,000\u20ac", al: "1,000\u20ac" },
      price: { en: "800\u20ac", al: "800\u20ac" },
      button: { en: "See Example", al: "Shiko Shembull" },
    },
    card3: {
      badge: { en: "PREMIUM OFFER", al: "OFERT\u00cb PREMIUM" },
      title: { en: "Premium + SEO & E-Commerce", al: "Premium + SEO & E-Commerce" },
      description: {
        en: "The complete digital package for Albanian businesses ready to scale. Professional website, monthly SEO, and a full online store — so your customers can find you and buy from you, 24/7.",
        al: "Paketa e plot\u00eb digjitale p\u00ebr biznese shqiptare gati p\u00ebr t\u2019u rritur. Website profesional, SEO mujor, dhe dyqan online i plot\u00eb — q\u00eb klient\u00ebt tuaj t\u2019ju gjejn\u00eb dhe t\u00eb blejn\u00eb nga ju, 24/7.",
      },
      features: {
        en: [
          "Everything from Professional plan",
          "Advanced animations & effects",
          "Online store — clients can browse & buy",
          "Payment & order management integration",
          "Monthly SEO & content updates",
          "Priority support",
          "Hosting included",
          "3 weeks delivery",
        ],
        al: [
          "T\u00eb gjitha nga plani Profesional",
          "Animacione dhe efekte t\u00eb avancuara",
          "Dyqan online — klient\u00ebt shfletojn\u00eb & blejn\u00eb",
          "Integrim pagesash & menaxhim porosish",
          "P\u00ebrdit\u00ebsime mujore SEO & p\u00ebrmbajtjeje",
          "Mb\u00ebshtetje prioritare",
          "Hosting i p\u00ebrfshir\u00eb",
          "3 jav\u00eb dor\u00ebzim",
        ],
      },
      oldPrice: { en: "1,300\u20ac", al: "1,300\u20ac" },
      price: { en: "1,000\u20ac", al: "1,000\u20ac" },
      priceNote: { en: "+ 50\u20ac/month", al: "+ 50\u20ac/muaj" },
      button: { en: "Contact Us", al: "Kontakto" },
    },
  },

  /* ─── Why Choose Us ─── */
  whyUs: {
    label: { en: "Why Us", al: "Pse Ne" },
    heading1: { en: "Why Choose", al: "Pse" },
    heading2: { en: "Us", al: "Eight Byte Studio?" },
    subheading: {
      en: "What sets us apart as your web developer in Tirana.",
      al: "Çfarë na dallon si web developer në Tiranë.",
    },
    card1: {
      title: { en: "Modern Design + SEO Strategy", al: "Dizajn Modern + Strategji SEO" },
      description: {
        en: "We don't just build beautiful websites — we make sure customers find you on Google. Every site includes SEO and Google optimization from day one in Tirana.",
        al: "Nuk ndërtojmë vetëm website të bukur — sigurojmë që klientët t'ju gjejnë në Google. Çdo faqe përfshin SEO dhe optimizim Google që nga dita e parë në Tiranë.",
      },
    },
    card2: {
      title: { en: "Proven Results", al: "Rezultate të Provuara" },
      description: {
        en: "Our clients see measurable growth in visibility and customer inquiries. We track Google rankings, traffic, and provide monthly SEO reports.",
        al: "Klientët tanë shikojnë rritje të matshme në vizibilitet dhe pyetje nga klientë. Ne gjurmojmë pozicionet në Google, trafikun dhe ofrojmë raporte mujore SEO.",
      },
    },
    card3: {
      title: { en: "Local Market Expert", al: "Ekspertë të Tregut Lokal" },
      description: {
        en: "We understand the Albanian market. Bilingual website optimization (Albanian + English) for maximum reach in local and international Google searches.",
        al: "Ne kuptojmë tregun shqiptar. Optimizim dygjuhësh i faqeve (shqip + anglisht) për hapje maksimale në kërkime lokale dhe ndërkombëtare në Google.",
      },
    },
    card4: {
      title: { en: "Affordable & Transparent Pricing", al: "Çmime të Aksesueshme & Transparente" },
      description: {
        en: "Clear website design packages with no hidden fees. Affordable one-time build + optional monthly SEO maintenance for continued growth.",
        al: "Paketa të qarta dizajni web pa tarifa të fshehura. Ndërtim i aksesueshëm një herë + mirëmbajtje mujore opsionale SEO për rritje të vazhdueshme.",
      },
    },
  },

  /* ─── Projects ─── */
  projects: {
    label: { en: "Projects", al: "Projektet" },
    heading1: { en: "Our", al: "Projektet" },
    heading2: { en: "Work", al: "Tona" },
    subheading: { en: "Real website design projects for businesses in Albania.", al: "Projekte reale dizajni web për biznese në Shqipëri." },
    farm88: {
      badge: { en: "RESTAURANT WEBSITE", al: "RESTORANT WEBSITE" },
      name: { en: "Farm 88", al: "Farm 88" },
      nameSuffix: { en: "Restaurant", al: "Restaurant" },
      description: {
        en: "Restaurant website with digital menu, gallery, and Google SEO optimization for a luxury restaurant in Tirana. Modern website design that brings customers from search.",
        al: "Website për restorant me meny digjitale, galeri, dhe optimizim SEO Google për restorant luksoz në Tiranë. Dizajn modern web që sjell klientë nga kërkimi.",
      },
      features: {
        en: [
          "SEO optimized for Google",
          "12 menu categories",
          "Gallery with filters",
          "Reservation system",
          "Mobile responsive",
        ],
        al: [
          "SEO optimizuar për Google",
          "12 kategori menuje",
          "Galeri me filtra",
          "Sistem rezervimesh",
          "Responsiv për mobile",
        ],
      },
      testimonial: {
        en: "Excellent work, exceeded our expectations.",
        al: "Punë e shkëlqyer, tejkaloi pritjet tona.",
      },
      testimonialAuthor: { en: "Owner, Farm 88 Restaurant", al: "Pronari, Farm 88 Restaurant" },
      ctaPrimary: { en: "VIEW LIVE WEBSITE", al: "SHIKO LIVE WEBSITE" },
      ctaSecondary: { en: "Details", al: "Detaje" },
      techStack: { en: "Tech Stack", al: "Teknologjitë" },
      stats: {
        en: [
          { value: "12", label: "Menu categories" },
          { value: "30+", label: "Photographs" },
          { value: "2", label: "Weeks delivery" },
          { value: "100%", label: "Responsive" },
        ],
        al: [
          { value: "12", label: "Kategori menuje" },
          { value: "30+", label: "Fotografi" },
          { value: "2", label: "Javë dorëzim" },
          { value: "100%", label: "Responsiv" },
        ],
      },
    },
    placeholder1: {
      badge: { en: "IN DEVELOPMENT", al: "NË ZHVILLIM" },
      title: { en: "Another project coming soon", al: "Projekt tjetër së shpejti" },
    },
    placeholder2: {
      badge: { en: "AVAILABLE", al: "DISPONIBËL" },
      title: { en: "Space for your project", al: "Hapësirë për projektin tuaj" },
    },
    ctaPortfolio: { en: "VIEW FULL PORTFOLIO", al: "SHIKO PORTFOLIO TË PLOTË" },
  },

  /* ─── Testimonials ─── */
  testimonials: {
    label: { en: "Testimonials", al: "Dëshmitë" },
    heading1: { en: "What Clients", al: "Çfarë Thonë" },
    heading2: { en: "Say", al: "Klientët" },
    subheading: {
      en: "First reviews coming soon. Working with our first clients to deliver excellent results.",
      al: "Vlerësimet e para po vijnë së shpejti. Duke punuar me klientët tanë të parë për të ofruar rezultate të shkëlqyera.",
    },
    placeholder: { en: "Coming soon", al: "Së shpejti" },
    reviews: {
      formHeading: { en: "Worked with us? Leave a review", al: "Keni punuar me ne? Lini një vlerësim" },
      nameField: { en: "Name *", al: "Emri *" },
      businessField: { en: "Business/Company *", al: "Biznesi/Kompania *" },
      ratingField: { en: "Rating", al: "Vlerësimi" },
      messageField: { en: "Write your experience with Eight Byte Studio...", al: "Shkruani përvojën tuaj me Eight Byte Studio..." },
      submit: { en: "Publish Review", al: "Publiko Vlerësimin" },
      success: { en: "Thank you! Your review has been published.", al: "Faleminderit! Vlerësimi juaj u publikua." },
      readMore: { en: "Read more", al: "Lexo më shumë" },
      readLess: { en: "Read less", al: "Lexo më pak" },
      noReviews: { en: "No reviews yet. Be the first!", al: "Nuk ka vlerësime akoma. Bëhu i pari!" },
    },
  },

  /* ─── Contact ─── */
  contact: {
    label: { en: "Contact", al: "Kontakti" },
    heading1: { en: "Get in", al: "Na" },
    heading2: { en: "Touch", al: "Kontaktoni" },
    subheading: {
      en: "Ready to start your project? Get a free consultation from a web developer in Tirana.",
      al: "Gati për të filluar projektin tuaj? Merrni konsultim falas nga një web developer në Tiranë.",
    },
    location: {
      label: { en: "Location", al: "Vendndodhja" },
      value: { en: "Tirana, Albania", al: "Tiranë, Shqipëri" },
    },
    whatsapp: { en: "WhatsApp", al: "WhatsApp" },
    email: { en: "Email", al: "Email" },
    instagram: { en: "Instagram", al: "Instagram" },
    linkedin: { en: "LinkedIn", al: "LinkedIn" },
    available: {
      en: "Available for projects",
      al: "Disponibël për projekte",
    },
    whatsappCta: {
      en: "Contact on WhatsApp",
      al: "Kontakto në WhatsApp",
    },
    form: {
      name: { en: "Name *", al: "Emri *" },
      emailField: { en: "Email *", al: "Email *" },
      phone: { en: "Phone number", al: "Numri i telefonit" },
      projectType: { en: "Project type", al: "Lloji i projektit" },
      projectOptions: {
        en: ["Basic Website", "Restaurant Website", "Premium Website", "Other"],
        al: ["Website Bazë", "Website për Restorant", "Website Premium", "Tjetër"],
      },
      message: { en: "Your message *", al: "Mesazhi juaj *" },
      submit: { en: "Send Message", al: "Dërgo Mesazhin" },
      success1: { en: "Thank you!", al: "Faleminderit!" },
      success2: {
        en: "We'll get back to you within 24 hours.",
        al: "Do t'ju kontaktojmë brenda 24 orëve.",
      },
    },
  },

  /* ─── Cookie Consent ─── */
  cookie: {
    message: {
      en: "We use cookies to analyze website traffic and improve your experience.",
      al: "Ne përdorim cookies për të analizuar trafikun e faqes dhe përmirësuar përvojën tuaj.",
    },
    learnMore: { en: "Learn more", al: "Mëso më shumë" },
    accept: { en: "Accept", al: "Prano" },
    decline: { en: "Decline", al: "Refuzo" },
  },

  /* ─── Footer ─── */
  footer: {
    copyright: {
      en: "© 2024 Eight Byte Studio. All rights reserved.",
      al: "© 2024 Eight Byte Studio. Të gjitha të drejtat e rezervuara.",
    },
    privacy: { en: "Privacy Policy", al: "Politika e Privatësisë" },
    terms: { en: "Terms of Service", al: "Kushtet e Shërbimit" },
  },
} as const;

export type Translations = typeof translations;

/** Helper to get a translated string */
export function t(
  obj: { en: string; al: string },
  lang: Lang
): string {
  return obj[lang];
}
