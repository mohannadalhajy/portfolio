import { ArrowUpRight, Mail, Phone } from "lucide-react";

const links = [
  {
    title: "GitHub",
    subtitle: "@mohannadalhajy",
    href: "https://github.com/mohannadalhajy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    subtitle: "mohannad-alhajy",
    href: "https://linkedin.com/in/mohannad-alhajy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Email",
    subtitle: "mohannad.alhajy@gmail.com",
    href: "mailto:mohannad.alhajy@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Phone",
    subtitle: "+971 50 998 7098",
    href: "https://wa.me/971509987098?text=Hello%20Mohannad%2C%20I%20saw%20your%20portfolio",
    icon: <Phone className="h-5 w-5" />,
  },
];

export default function QuickLinks() {
  return (
    <section className="space-y-6 pt-4">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Connect</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between gap-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/50"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800/50 bg-zinc-950 text-zinc-400 transition-colors group-hover:text-zinc-100">
                {link.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-100 truncate">{link.title}</div>
                <div className="text-xs text-zinc-400 truncate">{link.subtitle}</div>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-100" />
          </a>
        ))}
      </div>
    </section>
  );
}
