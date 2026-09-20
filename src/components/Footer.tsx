import Link from "next/link";
import { resumePage, resumeUpdated, siteConfig } from "@/lib/site";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:decoration-zinc-700 dark:hover:text-zinc-100";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8 pb-32 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Contact" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={`mailto:${siteConfig.email}`} className={linkClass}>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
            <span className="flex items-center gap-2">
              <Link href={resumePage} className={linkClass}>
                Résumé
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
