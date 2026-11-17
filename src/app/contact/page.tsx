import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Mohannad Alhajy is open to full-time ASP.NET Core and full stack (.NET + React) roles in the UAE, plus contract work on backends, payments, and real-time systems. Reach out via email, LinkedIn, or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
