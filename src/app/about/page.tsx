import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "ASP.NET Core developer with 5+ years of experience \u2014 scalable systems in C# and ASP.NET Core, plus React and Next.js frontends.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
