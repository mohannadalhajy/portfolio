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
        url: "/og.jpg",
        width: 1200,
        height: 800,
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
    images: ["/og.jpg"],
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
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-zinc-950">
          {/* faint dot-grid texture, echoes the project cover art */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* soft color blobs for depth */}
          <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/[0.12] blur-[120px]" />
          <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.10] blur-[120px]" />
          <div className="absolute top-[60vh] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
          {/* base wash + vignette back to pure black at the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
        </div>
        <SEOJsonLd />
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-4 py-10 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
