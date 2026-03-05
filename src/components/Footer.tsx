export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mohanad AlHajy</p>
          <p className="text-zinc-500">Developed by Mohannad Alhajy</p>
        </div>
      </div>
    </footer>
  );
}
