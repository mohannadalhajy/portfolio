import QuickLinks from "@/components/QuickLinks";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-zinc-300">
          I’m a Full Stack Engineer with over 5 years of experience building
          production-grade web applications and scalable digital platforms. I
          work across the entire stack — from designing backend services and
          system architectures to developing modern, responsive user interfaces.
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
      
      <QuickLinks/>

    </div>
  );
}
