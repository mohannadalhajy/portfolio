import Link from "next/link";
import { Mail } from "lucide-react";
import { WhatsAppIcon, LinkedInIcon, GitHubIcon } from "@/components/BrandIcons";
import { resumePage, resumeUpdated, siteConfig } from "@/lib/site";

const linkClass =
  "inline-flex items-center gap-1.5 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:decoration-zinc-700 dark:hover:text-zinc-100";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8 pb-32 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Contact" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={`mailto:${siteConfig.email}`} className={linkClass}>
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              WhatsApp
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <LinkedInIcon className="h-4 w-4 shrink-0" />
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <GitHubIcon className="h-4 w-4 shrink-0" />
              GitHub
            </a>
            <span className="flex items-center gap-2">
              <Link href={resumePage} className={linkClass}>
                Resume
              </Link>
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                Updated {resumeUpdated}
              </span>
            </span>
          </nav>
          <p className="shrink-0">© {new Date().getFullYear()} Mohannad Alhajy</p>
        </div>
      </div>
    </footer>
  );
}
