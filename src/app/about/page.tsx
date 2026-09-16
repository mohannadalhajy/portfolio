import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Developer with 5+ years of experience, weighted toward the backend \u2014 scalable systems in Node.js, NestJS, and TypeScript, plus React and Next.js frontends.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
