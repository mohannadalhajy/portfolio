import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="space-y-4 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">404</p>
      <h1 className="font-serif text-3xl text-zinc-100">Page not found</h1>
      <p className="text-zinc-400">This page doesn’t exist.</p>
      <Link
        href="/"
        className="inline-block text-sm font-medium text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-amber-400"
      >
        Go home
      </Link>
    </div>
  );
}
