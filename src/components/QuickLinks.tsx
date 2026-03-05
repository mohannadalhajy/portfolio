export default function QuickLinks() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
      <h2 className="text-lg font-semibold">Quick Links</h2>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <a
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 hover:bg-zinc-900"
          href="https://github.com/mohannadalhajy"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 hover:bg-zinc-900"
          href="https://linkedin.com/in/mohannad-alhajy"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 hover:bg-zinc-900"
          href="mailto:mohannad.alhajy@gmail.com"
        >
          Email
        </a>
        <a
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 hover:bg-zinc-900"
          href="https://wa.me/971509987098?text=Hello%20Mohanad%2C%20I%20saw%20your%20portfolio"
          target="_blank"
        >
          Phone
        </a>
      </div>
    </section>
  );
}
