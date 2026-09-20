import Link from "next/link";
import { resumePage, resumeUrl, resumeUpdated } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8 pb-32 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mohannad Alhajy</p>
          <p className="flex flex-wrap items-center gap-2">
            <Link
              href={resumePage}
              className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Resume
            </Link>
            <span className="text-xs text-zinc-500 dark:text-zinc-500">
              Updated {resumeUpdated}
            </span>
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">Developed by Mohannad Alhajy</p>
        </div>
      </div>
    </footer>
  );
}
