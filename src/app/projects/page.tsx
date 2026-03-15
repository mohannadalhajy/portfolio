import Link from "next/link";
import { projects } from "@/data/projects";
import QuickLinks from "@/components/QuickLinks";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-zinc-300">
          Selected work focusing on scalable backends, payments, and real-time
          systems.
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm text-zinc-300">{p.subtitle}</p>
              </div>

              {/* <Link
                href={`/projects/${p.slug}`}
                className="shrink-0 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm hover:bg-zinc-900"
              >
                Details
              </Link> */}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <QuickLinks />
    </div>
  );
}
