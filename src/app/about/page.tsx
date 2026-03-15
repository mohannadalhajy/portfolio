import QuickLinks from "@/components/QuickLinks";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-zinc-300">
          Full Stack Developer with 5+ years of experience developing scalable
          backend systems using Node.js, NestJS And Typescript. Skilled in
          designing REST APIs, database structures, and writing clean,
          maintainable code. Experienced in building modern web interfaces using
          React, and Next.js. Contributed to the development of multiple
          production platforms including marriage, legal services, car rental,
          HR management, and project management systems. Familiar with deploying
          and managing applications using AWS, Docker, and Nginx in production
          environments.
        </p>
        <p className="text-zinc-300">
          My work focuses on building reliable systems that integrate real-world
          services such as payments, messaging, real-time communication, and
          cloud infrastructure. I enjoy solving complex engineering problems and
          designing systems that are clean, maintainable, and built to scale.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">What I Focus On</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
            <li>Building scalable full-stack web applications</li>
            <li>Designing clean and maintainable backend architectures</li>
            <li>Developing responsive and modern frontend interfaces</li>
            <li>Implementing real-time features and messaging systems</li>
            <li>Integrating cloud services, APIs, and third-party platforms</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Experience Areas</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
            <li>Scalable web platforms and SaaS products</li>
            <li>Payment and subscription systems</li>
            <li>Real-time communication and messaging</li>
            <li>Cloud integrations and distributed services</li>
            <li>API design and system architecture</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Technologies</h2>
          <p className="mt-2 text-sm text-zinc-300">
            TypeScript, JavaScript, Node.js, NestJS, React, Next.js, MongoDB,
            MySQL, Redis, RabbitMQ, AWS, Docker, Nginx.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">How I work</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
            <li>
              I believe in building software that is simple, reliable, and
              maintainable.
            </li>
            <li>
              My approach focuses on clean architecture, clear domain
              boundaries, and systems that can evolve as products grow.
            </li>
          </ul>
        </div>
      </div>

      <QuickLinks />
    </div>
  );
}
