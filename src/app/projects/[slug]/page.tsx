import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/project-gallery";
import { getProjectAccent } from "@/data/project-meta";
import { siteConfig, siteUrl } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: project.photos[0] ? [project.photos[0]] : undefined,
      type: "article",
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const accent = getProjectAccent(project.slug);
  const Icon = accent.icon;
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.subtitle,
        url: projectUrl,
        image: project.photos[0] ? `${siteUrl}${project.photos[0]}` : undefined,
        keywords: project.stack.join(", "),
        author: { "@type": "Person", name: siteConfig.name, url: siteUrl },
      },
    ],
  };

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 🔥 HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-zinc-800 p-8">
        <div className="space-y-4">
          <div
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md ${accent.badge}`}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="max-w-2xl text-zinc-300 text-lg">{project.subtitle}</p>

          {project.stack?.length && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-zinc-800/70 px-3 py-1 text-xs text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* subtle glow */}
        <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl ${accent.glowA}`} />
        <div className={`absolute -bottom-16 -left-10 h-40 w-40 rounded-full blur-3xl ${accent.glowB}`} />
      </div>

      {/* 🔥 GRID SECTIONS */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Highlights */}
        <Section title="Highlights">
          {project.highlights.map((h) => (
            <CardItem key={h}>{h}</CardItem>
          ))}
        </Section>

        {/* Technical */}
        {project.technicalHighlights.length > 0 && (
          <Section title="Technical Highlights">
            {project.technicalHighlights.map((h) => (
              <CardItem key={h}>{h}</CardItem>
            ))}
          </Section>
        )}

        {/* Contribution */}
        {project.myContribution.length > 0 && (
          <Section title="My Contribution">
            {project.myContribution.map((h) => (
              <CardItem key={h}>{h}</CardItem>
            ))}
          </Section>
        )}

        {/* Challenges */}
        {project.challengesSolved.length > 0 && (
          <Section title="Challenges Solved">
            {project.challengesSolved.map((h) => (
              <CardItem key={h}>{h}</CardItem>
            ))}
          </Section>
        )}
      </div>

      {/* 🔥 FULL WIDTH STACK */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300 hover:bg-zinc-800 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* 🔥 LINKS */}
      {project.links?.length > 0 && (
        <section className="flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm hover:bg-zinc-800 transition"
            >
              {l.label}
            </a>
          ))}
        </section>
      )}
      {project.photos?.length > 0 && (
        <ProjectGallery images={project.photos} alt={`${project.title} screenshot`} />
      )}
    </div>
  );
}

/* 🔥 reusable section */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

/* 🔥 card item instead of boring bullets */
function CardItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-300 hover:bg-zinc-900 transition">
      {children}
    </div>
  );
}
