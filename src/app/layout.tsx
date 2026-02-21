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

export const metadata: Metadata = {
  title: "Eight Byte Studio | We Build, You Grow",
  description:
    "Eight Byte Studio is a premium web development studio based in Tirana, Albania. We craft elegant, high-performance digital experiences.",
  keywords: [
    "web development",
    "Albania",
    "web studio",
    "Eight Byte Studio",
    "premium websites",
    "Tirana",
  ],
  verification: {
    google: "ggB1_qbIoG_86xNI49TY2p3vEa_3G30HKfS9VJGC00E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
