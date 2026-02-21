import type { Metadata } from "next";
import localFont from "next/font/local";
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

const siteUrl = "https://eightbyte-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eight Byte Studio - Web Development & SEO Services in Tirana, Albania",
  description:
    "Eight Byte Studio offers modern web development with SEO optimization for Albanian businesses. We build websites that rank on Google and bring customers. Based in Tirana. Eight Byte Studio ofron zhvillim web modern me optimizim SEO për biznese shqiptare.",
  keywords: [
    "web development Tirana",
    "web developer Albania",
    "SEO Albania",
    "website design Tirana",
    "zhvillim web Shqipëri",
    "Eight Byte Studio",
    "web development services Albania",
    "restaurant websites Albania",
    "web developer Tirana",
    "web design Albania",
    "faqe interneti Shqipëri",
    "dizajn web Tiranë",
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
    title: "Eight Byte Studio - Web Development & SEO Services in Tirana, Albania",
    description:
      "Eight Byte Studio offers modern web development with SEO optimization for Albanian businesses. We build websites that rank on Google and bring customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eight Byte Studio - Web Development & SEO Services in Tirana, Albania",
    description:
      "Modern web development with SEO optimization for Albanian businesses. Based in Tirana.",
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
        "Professional web development and SEO services for Albanian businesses. Based in Tirana, Albania.",
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
      name: "Eight Byte Studio - Web Development & SEO Services in Tirana, Albania",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Eight Byte Studio offers modern web development with SEO optimization for Albanian businesses.",
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
              description: "Professional single-page or multi-page website for businesses",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restaurant & Business Website",
              description: "Custom website with menu systems, reservations, and SEO optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Premium + Maintenance",
              description: "Full-service web development with ongoing maintenance and SEO",
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
