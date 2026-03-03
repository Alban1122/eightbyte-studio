import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Eight Byte Studio",
  description:
    "Privacy Policy for Eight Byte Studio — learn how we collect, use, and protect your personal data. GDPR compliant.",
  alternates: {
    canonical: "https://eightbyte.al/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
