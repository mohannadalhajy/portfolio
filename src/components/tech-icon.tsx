import {
  Blocks,
  Braces,
  Brain,
  Building2,
  Cloud,
  Code,
  Database,
  Gauge,
  KeyRound,
  Mail,
  MessageSquare,
  PenLine,
  Puzzle,
  ScrollText,
  ShieldCheck,
  Smartphone,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { brandIcons } from "@/data/tech-icons";

/* Entries with no brand mark in `simple-icons` (trademark-restricted or too
   small to have one) get a glyph that reads as the thing it does. */
const fallbackIcons: Record<string, LucideIcon> = {
  SQL: Database,
  "REST APIs": Braces,
  "Rate Limiting": Gauge,
  Redlock: KeyRound,
  Zustand: Blocks,
  Recharts: Gauge,
  ApexCharts: Gauge,
  Lexical: PenLine,
  TipTap: PenLine,
  Yjs: Users,
  "AWS S3": Cloud,
  "AWS SES": Cloud,
  "AWS Lambda": Cloud,
  "AWS SSM": Cloud,
  "AWS Secrets Manager": Cloud,
  "AWS Rekognition": Cloud,
  "AWS Polly": Cloud,
  "AWS Comprehend": Cloud,
  OpenAI: Brain,
  "Microsoft Graph": Building2,
  Nodemailer: Mail,
  SMSGlobal: MessageSquare,
  reCAPTCHA: ShieldCheck,
  Agenda: Timer,
  Winston: ScrollText,
  Pino: ScrollText,
  Supertest: Puzzle,
  "Google Play Billing": Smartphone,
};

/* relative luminance, used only to detect marks that vanish on dark */
function isDark(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.22;
}

export default function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const brand = brandIcons[name];

  if (brand) {
    /* Near-black marks (Next.js, Express, Apple…) disappear on the dark
       theme, so they swap to a light neutral there. */
    const darkHex = isDark(brand.hex) ? "#e4e4e7" : brand.hex;
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`${className} shrink-0 text-[var(--icon)] dark:text-[var(--icon-dark)]`}
        fill="currentColor"
        style={
          {
            "--icon": brand.hex,
            "--icon-dark": darkHex,
          } as React.CSSProperties
        }
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = fallbackIcons[name] ?? Code;
  return (
    <Fallback
      aria-hidden="true"
      className={`${className} shrink-0 text-zinc-400 dark:text-zinc-500`}
    />
  );
}
