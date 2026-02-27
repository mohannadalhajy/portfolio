import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-zinc-300">This page doesn’t exist.</p>
      <Link
        href="/"
        className="inline-block rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm hover:bg-zinc-900"
      >
        Go home
      </Link>
    </div>
  );
}
