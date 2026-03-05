import QuickLinks from "@/components/QuickLinks";
import Link from "next/link";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200">
    {children}
  </span>
);

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm text-zinc-400">Dubai, UAE</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Mohannad AlHajy
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
            Full Stack Developer with 5+ years of experience building scalable
            applications and modern web platforms, focused on clean
            architecture, reliable systems, and high-quality user experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag>NestJS</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>Real-time</Tag>
          <Tag>Microservices</Tag>
          <Tag>AWS</Tag>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
          >
            View Projects
          </Link>
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Scalable Web Applications",
            desc: "Design and development of full-stack web platforms with scalable backend services, modern frontend interfaces, and reliable system architecture.",
          },
          {
            title: "Real-Time & Messaging Systems",
            desc: "Implementation of real-time communication features and messaging systems using WebSockets, Pub/Sub architectures, and distributed services.",
          },
          {
            title: "Cloud & Third-Party Integrations",
            desc: "Integration with cloud platforms and external services including authentication, payments, messaging, and AI-powered APIs to build complete production systems.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5"
          >
            <h3 className="text-base font-semibold">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {x.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium">
              Full Stack Developer — Step By Tech
            </h3>
            <p className="text-sm text-zinc-400">2021 – Present · Dubai</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
              <li>Built scalable backend systems for Vidnik mobile platform</li>
              <li>Implemented Apple & Google subscription lifecycle flows</li>
              <li>Designed real-time messaging & video communication</li>
              <li>Improved system stability under growing user load</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Full Stack Developer — InfoTech
            </h3>
            <p className="text-sm text-zinc-400">2020 – 2021 · Dubai</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
              <li>Developed multi-tenant HR platform</li>
              <li>Implemented dynamic employee data models</li>
              <li>Ensured data consistency and scalability</li>
            </ul>
          </div>
        </div>
      </section>

      <QuickLinks/>
    </div>
  );
}
