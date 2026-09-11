import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/project-gallery";
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
      type: "article",
      // Next.js doesn't deep-merge openGraph fields with the parent layout —
      // a child that defines its own openGraph loses the parent's `images`
      // entirely, so fall back to the site's generated OG image explicitly
      // rather than ending up with no share-preview image at all.
      images: [project.photos[0] || "/opengraph-image"],
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
    <div className="space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="space-y-4 border-b border-zinc-800/60 pb-10">
        <Link
          href="/projects"
          className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-amber-400"
        >
          ← All projects
        </Link>
        <h1 className="font-serif text-4xl text-zinc-100">{project.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{project.subtitle}</p>

        {project.stack.length > 0 && (
          <p className="pt-2 text-xs uppercase tracking-wide text-zinc-400">
            {project.stack.join(" · ")}
          </p>
        )}
      </div>

      {/* Case study: Problem / Approach / Result */}
      <div className="grid gap-8 border-b border-zinc-800/60 pb-10 sm:grid-cols-3 sm:divide-x sm:divide-zinc-800/60">
        <h2 className="sr-only">Case Study</h2>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-amber-400">Problem</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.caseStudy.problem}</p>
        </div>
        <div className="sm:pl-8">
          <h3 className="text-xs font-medium uppercase tracking-widest text-amber-400">Approach</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.caseStudy.approach}</p>
        </div>
        <div className="sm:pl-8">
          <h3 className="text-xs font-medium uppercase tracking-widest text-amber-400">Result</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.caseStudy.result}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="grid gap-10 md:grid-cols-2">
        <Section title="Highlights" items={project.highlights} />
        <Section title="Technical Highlights" items={project.technicalHighlights} />
        <Section title="My Contribution" items={project.myContribution} />
        <Section title="Challenges Solved" items={project.challengesSolved} />
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-6 border-t border-zinc-800/60 pt-8">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-amber-300 hover:decoration-amber-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {project.photos.length > 0 && (
        <ProjectGallery images={project.photos} alt={`${project.title} screenshot`} />
      )}
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="font-serif text-lg text-zinc-100">{title}</h2>
      <ul className="space-y-3 text-sm text-zinc-400">
        {items.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-1 text-amber-500/50">▹</span>
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
