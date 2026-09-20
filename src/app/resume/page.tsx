import type { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Mohannad Alhajy — Senior Software Engineer, backend-focused full stack: Node.js, NestJS, TypeScript, and the payment, real-time, and infrastructure work behind them.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return <ResumeContent />;
}
