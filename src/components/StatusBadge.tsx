export default function StatusBadge({
  label = "Available for new opportunities in UAE",
}: {
  label?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_2px_rgba(245,158,11,0.6)] dark:bg-amber-400" />
      {label}
    </div>
  );
}
