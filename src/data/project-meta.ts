import {
  Heart,
  Building2,
  Car,
  KanbanSquare,
  Scale,
  Users,
  Rocket,
  Megaphone,
  Globe,
  Truck,
  Home,
  type LucideIcon,
} from "lucide-react";

export type ProjectAccent = {
  icon: LucideIcon;
  /** small badge in the top-left corner of the cover */
  badge: string;
  /** background glow blobs behind the icon */
  glowA: string;
  glowB: string;
  /** accent text color used sparingly outside the cover (e.g. tag border on hover) */
  text: string;
};

export const PROJECT_META: Record<string, ProjectAccent> = {
  vidnik: {
    icon: Heart,
    badge: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    glowA: "bg-rose-500/25",
    glowB: "bg-fuchsia-500/15",
    text: "text-rose-300",
  },
  axiom: {
    icon: Building2,
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    glowA: "bg-blue-500/25",
    glowB: "bg-cyan-500/15",
    text: "text-blue-300",
  },
  exyar: {
    icon: Car,
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    glowA: "bg-amber-500/25",
    glowB: "bg-orange-500/15",
    text: "text-amber-300",
  },
  pms: {
    icon: KanbanSquare,
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    glowA: "bg-violet-500/25",
    glowB: "bg-indigo-500/15",
    text: "text-violet-300",
  },
  zadlaw: {
    icon: Scale,
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    glowA: "bg-sky-500/25",
    glowB: "bg-blue-500/15",
    text: "text-sky-300",
  },
  "hr-software": {
    icon: Users,
    badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
    glowA: "bg-fuchsia-500/25",
    glowB: "bg-pink-500/15",
    text: "text-fuchsia-300",
  },
  stepbytech: {
    icon: Rocket,
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    glowA: "bg-teal-500/25",
    glowB: "bg-emerald-500/15",
    text: "text-teal-300",
  },
  "mark-media": {
    icon: Megaphone,
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-300",
    glowA: "bg-orange-500/25",
    glowB: "bg-amber-500/15",
    text: "text-orange-300",
  },
  xygma: {
    icon: Globe,
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    glowA: "bg-cyan-500/25",
    glowB: "bg-sky-500/15",
    text: "text-cyan-300",
  },
  "orders-delivery-system": {
    icon: Truck,
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    glowA: "bg-emerald-500/25",
    glowB: "bg-teal-500/15",
    text: "text-emerald-300",
  },
  "real-estate-management": {
    icon: Home,
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    glowA: "bg-indigo-500/25",
    glowB: "bg-violet-500/15",
    text: "text-indigo-300",
  },
};

export const DEFAULT_ACCENT: ProjectAccent = {
  icon: Rocket,
  badge: "border-zinc-500/30 bg-zinc-500/10 text-zinc-300",
  glowA: "bg-zinc-500/25",
  glowB: "bg-zinc-500/15",
  text: "text-zinc-300",
};

export function getProjectAccent(slug: string): ProjectAccent {
  return PROJECT_META[slug] ?? DEFAULT_ACCENT;
}
