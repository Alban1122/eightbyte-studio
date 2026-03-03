import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://eightbyte.al";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Web Developer Tirana | Eight Byte Studio - Website Design & SEO Albania",
  description:
    "Eight Byte Studio — web developer in Tirana offering modern website design and SEO optimization for Albanian businesses. Affordable websites for restaurants and small businesses that rank on Google. Zhvillim web dhe krijim faqesh interneti Tiranë — SEO Shqipëri.",
  keywords: [
    "web developer Tirana",
    "web developer Tiranë",
    "zhvillim web Shqipëri",
    "website design Albania",
    "SEO Albania",
    "SEO Tiranë",
    "restaurant website Albania",
    "website për restorant",
    "modern website design Tirana",
    "small business website Albania",
    "krijim faqesh interneti Tiranë",
    "web development services Tirana",
    "freelance web developer Albania",
    "digital menu Albania",
    "Google optimization Tirana",
    "Eight Byte Studio",
    "affordable website design Albania",
    "website with SEO Albania",
    "best web developer for restaurants Tirana",
  ],
  authors: [{ name: "Eight Byte Studio" }],
  creator: "Eight Byte Studio",
  publisher: "Eight Byte Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "sq_AL",
    url: siteUrl,
    siteName: "Eight Byte Studio",
    title: "Web Developer Tirana | Eight Byte Studio - Website Design & SEO Albania",
    description:
      "Freelance web developer in Tirana. Modern website design with SEO for restaurants and small businesses in Albania. Affordable, Google-optimized websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Tirana | Eight Byte Studio - Website Design & SEO Albania",
    description:
      "Freelance web developer in Tirana. Modern website design with SEO for restaurants and small businesses in Albania.",
    creator: "@eightbytestudio",
  },
  verification: {
    google: "ggB1_qbIoG_86xNI49TY2p3vEa_3G30HKfS9VJGC00E",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "WebDesigner"],
      "@id": `${siteUrl}/#organization`,
      name: "Eight Byte Studio",
      url: siteUrl,
      description:
        "Freelance web developer in Tirana offering modern website design, SEO optimization, and digital menu solutions for restaurants and small businesses in Albania.",
      email: "albanmucaj22@gmail.com",
      telephone: "+355695232002",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tirana",
        addressCountry: "AL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.3275,
        longitude: 19.8187,
      },
      areaServed: [
        { "@type": "Country", name: "Albania" },
        { "@type": "City", name: "Tirana" },
      ],
      serviceType: [
        "Web Development",
        "Website Design",
        "SEO Optimization",
        "Restaurant Website Development",
        "Digital Menu Design",
        "Google Optimization",
        "Small Business Website",
      ],
      knowsLanguage: ["en", "sq"],
      priceRange: "$$",
      sameAs: ["https://instagram.com/albanmucaj_"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Eight Byte Studio",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["en", "sq"],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Web Developer Tirana | Eight Byte Studio - Website Design & SEO Albania",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Freelance web developer in Tirana. Affordable website design with SEO for restaurants and small businesses in Albania.",
      inLanguage: ["en", "sq"],
    },
    {
      "@type": "Service",
      serviceType: "Web Development",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Albania" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Basic Website",
              description: "Affordable website design for small businesses in Albania with Google optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restaurant & Business Website",
              description: "Restaurant website with digital menu, reservations, and SEO optimization in Tirana",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Premium + Maintenance",
              description: "Full-service web development with ongoing SEO maintenance and Google optimization in Tirana",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q630WHGV0P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q630WHGV0P');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
