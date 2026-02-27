export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-zinc-300">
          I build backend-heavy products with a strong focus on scalability, reliability, and
          payments/subscriptions.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Core Focus</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300 space-y-1">
            <li>Node.js / NestJS backend architecture</li>
            <li>Payments, subscriptions, and lifecycle handling</li>
            <li>Real-time systems (Socket.IO patterns)</li>
            <li>Multi-tenant systems & clean domain boundaries</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Tools</h2>
          <p className="mt-2 text-sm text-zinc-300">
            TypeScript, MongoDB/MySQL, Redis, RabbitMQ, Docker, Nginx, AWS.
          </p>
        </div>
      </div>
    </div>
  );
}
