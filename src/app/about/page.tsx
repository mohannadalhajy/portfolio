import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer, backend-focused full stack, with 5+ years of experience \u2014 scalable systems in Node.js, NestJS, and TypeScript, plus React and Next.js frontends.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
