export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Contact</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/40"
          href="mailto:mohannad.alhajy@gmail.com"
        >
          <div className="text-sm text-zinc-400">Email</div>
          <div className="mt-1 font-medium">mohannad.alhajy@gmail.com</div>
        </a>

        <a
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/40"
          href="https://linkedin.com/in/mohannad-alhajy"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-sm text-zinc-400">LinkedIn</div>
          <div className="mt-1 font-medium">mohannad-alhajy</div>
        </a>

        <a
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/40"
          href="https://wa.me/971509987098?text=Hello%20Mohanad%2C%20I%20saw%20your%20portfolio"
          target="_blank"
        >
          <div className="text-sm text-zinc-400">Phone</div>
          <div className="mt-1 font-medium">+971 50 998 7098</div>
        </a>
      </div>
    </div>
  );
}