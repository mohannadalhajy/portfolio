import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohannad Alhajy for new opportunities and collaborations via email, LinkedIn, or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
