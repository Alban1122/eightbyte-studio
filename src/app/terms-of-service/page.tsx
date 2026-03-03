import type { Metadata } from "next";
import TermsOfServiceContent from "./TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service | Eight Byte Studio",
  description:
    "Terms of Service for Eight Byte Studio — web development services, payment terms, and project deliverables. Governed by Albanian law.",
  alternates: {
    canonical: "https://eightbyte.al/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
