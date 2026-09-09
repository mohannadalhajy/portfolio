import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOJsonLd from "./seo";
import { siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteConfig.title,
    template: "%s | Mohannad Alhajy",
  },

  description: siteConfig.description,

  keywords: [
    "Mohannad Alhajy",
    "Full Stack Engineer",
    "NestJS Developer",
    "Node.js Backend",
    "Payments",
    "Real-time Systems",
    "Dubai Developer",
  ],

  authors: [{ name: siteConfig.name }],

  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} style={{ colorScheme: "dark" }}>
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        <SEOJsonLd />
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-4 py-10 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
