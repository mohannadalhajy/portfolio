const si = require('simple-icons');
const fs = require('fs');
const { technologies } = { technologies: null };
const map = {
"TypeScript":"typescript","JavaScript":"javascript","Node.js":"nodedotjs","Sass / SCSS":"sass",
"NestJS":"nestjs","Express.js":"express","Swagger / OpenAPI":"swagger","WebSockets":"socketdotio","Socket.IO":"socketdotio","LiveKit":"livekit","JWT":"jsonwebtokens","Passport.js":"passport",
"MongoDB":"mongodb","Mongoose":"mongoose","MySQL":"mysql","PostgreSQL":"postgresql","Sequelize":"sequelize","Redis":"redis","ioredis":"redis",
"React":"react","Next.js":"nextdotjs","Tailwind CSS":"tailwindcss","Material UI":"mui","Radix UI / shadcn":"radixui","HeroUI":"heroui","Redux":"redux","TanStack Query":"reactquery","SWR":"swr","React Hook Form":"reacthookform","Zod":"zod","Framer Motion":"framer","GSAP":"greensock","Three.js":"threedotjs","React Three Fiber":"threedotjs","Embla / Swiper":"swiper","i18next":"i18next",
"Docker":"docker","Docker Compose":"docker","Nginx":"nginx","PM2":"pm2","CI/CD Pipelines":"githubactions","Firebase":"firebase","Firebase Cloud Messaging":"firebase","Google Cloud Pub/Sub":"googlecloud","Google Cloud Speech":"googlecloud",
"Stripe":"stripe","QuickBooks":"quickbooks","Google OAuth":"google","Apple Sign-In":"apple","Google Play Billing":"googleplay","Mapbox":"mapbox","Mixpanel":"mixpanel","Sentry":"sentry","New Relic":"newrelic",
"node-cron":"nodedotjs","NestJS Schedule":"nestjs","Elasticsearch Logging":"elasticsearch",
"Jest":"jest","Cypress":"cypress","Testing Library":"testinglibrary","ESLint":"eslint","Prettier":"prettier","Storybook":"storybook","Webpack":"webpack","Git":"git"
};
const toKey = s => 'si' + s.replace(/[^a-z0-9]/g, '').replace(/^./, c => c.toUpperCase());
const out = {};
const missing = [];
for (const [name, slug] of Object.entries(map)) {
  const icon = si[toKey(slug)];
  if (!icon) { missing.push(name); continue; }
  out[name] = { hex: icon.hex, path: icon.path };
}
if (missing.length) { console.error('missing:', missing); process.exit(1); }
const body = Object.entries(out)
  .map(([k, v]) => `  ${JSON.stringify(k)}: { hex: "#${v.hex}", path: ${JSON.stringify(v.path)} },`)
  .join('\n');
fs.writeFileSync('src/data/tech-icons.ts', `// AUTO-GENERATED from the \`simple-icons\` package — do not edit by hand.
// Regenerate with: node scripts-gen-icons.js
// Brands simple-icons no longer ships (AWS, Microsoft, OpenAI, reCAPTCHA, …)
// fall back to a lucide glyph picked in \`tech-icon.tsx\`.
export type BrandIcon = { hex: string; path: string };

export const brandIcons: Record<string, BrandIcon> = {
${body}
};
`);
console.log('wrote', Object.keys(out).length, 'icons');
