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
      title: { en: "Basic Website", al: "Website Baz\u00eb" },
      description: {
        en: "Affordable website design for small businesses in Albania wanting a professional online presence with Google optimization.",
        al: "Dizajn web i aksesueshëm për biznese të vogla në Shqipëri që duan prezencë online profesionale me optimizim për Google.",
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
      oldPrice: { en: "100,000 Lek\u00eb", al: "100,000 Lek\u00eb" },
      price: { en: "80,000 Lek\u00eb", al: "80,000 Lek\u00eb" },
      button: { en: "Learn More", al: "M\u00ebso M\u00eb Shum\u00eb" },
    },
    card2: {
      badge: { en: "MOST POPULAR", al: "M\u00cb I POPULLARIZUAR" },
      badge2: { en: "OFFER 23% OFF", al: "OFERT\u00cb 23% ZBRITJE" },
      title: { en: "Restaurant & Business Website", al: "Website për Restorant & Biznes" },
      description: {
        en: "Complete restaurant website with digital menu, gallery and booking system. The best solution for restaurants in Tirana.",
        al: "Website komplet për restorant me meny digjitale, galeri dhe sistem rezervimesh. Zgjidhja më e mirë për restorante në Tiranë.",
      },
      features: {
        en: [
          "Everything from basic plan",
          "Digital menu with categories",
          "Filtered gallery",
          "WhatsApp booking system",
          "Google Maps integration",
          "2 weeks delivery",
        ],
        al: [
          "T\u00eb gjitha nga plani baz\u00eb",
          "Meny digjitale me kategori",
          "Galeri me filtra",
          "Sistem rezervimesh (WhatsApp)",
          "Integrimi me Google Maps",
          "2 jav\u00eb dor\u00ebzim",
        ],
      },
      oldPrice: { en: "130,000 Lek\u00eb", al: "130,000 Lek\u00eb" },
      price: { en: "100,000 Lek\u00eb", al: "100,000 Lek\u00eb" },
      button: { en: "See Example", al: "Shiko Shembull" },
    },
    card3: {
      badge: { en: "PREMIUM OFFER", al: "OFERT\u00cb PREMIUM" },
      title: { en: "Premium + Maintenance", al: "Premium + Mir\u00ebmbajtje" },
      description: {
        en: "Premium website with monthly SEO maintenance, content updates and ongoing Google optimization in Tirana.",
        al: "Website premium me mirëmbajtje mujore SEO, përditësime përmbajtjeje dhe optimizim të vazhdueshëm për Google në Tiranë.",
      },
      features: {
        en: [
          "Everything from full plan",
          "Advanced animations & effects",
          "Monthly content updates",
          "Priority support",
          "Hosting included",
        ],
        al: [
          "T\u00eb gjitha nga plani i plot\u00eb",
          "Animacione dhe efekte advanced",
          "P\u00ebrdit\u00ebsime mujore t\u00eb p\u00ebrmbajtjes",
          "Mb\u00ebshtetje prioritare",
          "Hosting i p\u00ebrfshir\u00eb",
        ],
      },
      oldPrice: { en: "200,000 Lek\u00eb", al: "200,000 Lek\u00eb" },
      price: { en: "150,000 Lek\u00eb", al: "150,000 Lek\u00eb" },
      priceNote: { en: "+ 15,000/month", al: "+ 15,000 Lek\u00eb/muaj" },
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

  /* ─── Footer ─── */
  footer: {
    copyright: {
      en: "© 2024 Eight Byte Studio. All rights reserved.",
      al: "© 2024 Eight Byte Studio. Të gjitha të drejtat e rezervuara.",
    },
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
