import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOJsonLd from "./seo";
const siteUrl = "https://portfolio-xi-one-38.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mohanad AlHajy | Full Stack Engineer",
    template: "%s | Mohanad AlHajy",
  },

  description:
    "Full Stack Engineer building scalable APIs, real-time systems, and subscription/payment flows using Node.js & NestJS.",

  keywords: [
    "Mohanad AlHajy",
    "Full Stack Engineer",
    "NestJS Developer",
    "Node.js Backend",
    "Payments",
    "Real-time Systems",
    "Dubai Developer",
  ],

  authors: [{ name: "Mohanad AlHajy" }],

  creator: "Mohanad AlHajy",
  openGraph: {
    title: "Mohanad AlHajy | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable APIs, real-time systems, and subscription/payment flows.",
    url: siteUrl,
    siteName: "Mohanad AlHajy Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohanad AlHajy Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohanad AlHajy | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable APIs, real-time systems, and subscription/payment flows.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <SEOJsonLd />
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
