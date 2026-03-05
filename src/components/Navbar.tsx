import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Mohannad AlHajy
        </Link>

        <nav className="flex gap-2">
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="rounded-xl border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
          >
            CV
          </a>
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
