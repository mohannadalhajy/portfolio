import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SiteDots from "@/components/SiteDots";
import Footer from "@/components/Footer";
import SEOJsonLd from "./seo";
import { siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  // only weight 400 is used anywhere on the site — 500/600 were dead
  // font-file downloads
  weight: ["400"],
  style: ["normal", "italic"],
});

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
    "Full Stack Developer",
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
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-zinc-100">
        <MotionConfig reducedMotion="user">
          {/* cinematic ambient lighting — amber + a quiet teal counter-glow, breathing slowly */}
          <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-zinc-950">
            <div className="animate-glow-pulse absolute left-1/2 top-[-20%] h-[55rem] w-[55rem] -translate-x-1/2 rounded-full bg-amber-500/[0.07] blur-[160px]" />
            <div
              className="animate-glow-pulse absolute -right-40 top-[15%] h-[45rem] w-[45rem] rounded-full bg-teal-500/[0.05] blur-[160px]"
              style={{ animationDelay: "-6s" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,transparent_40%,rgba(0,0,0,0.5))]" />
          </div>
          <SEOJsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-zinc-800 focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-100"
          >
            Skip to content
          </a>
          <SiteDots />
          <main
            id="main-content"
            tabIndex={-1}
            className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 pl-14 relative z-10 sm:pl-16 focus:outline-none"
          >
            {children}
          </main>
          <Footer />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
