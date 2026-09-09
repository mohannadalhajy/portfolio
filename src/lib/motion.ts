import type { Variants } from "framer-motion";

export const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
