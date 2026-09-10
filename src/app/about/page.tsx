import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Developer with 5+ years of experience building scalable backend systems with Node.js, NestJS, TypeScript, React, and Next.js.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
