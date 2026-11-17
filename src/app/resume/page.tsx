import type { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Mohannad Alhajy — ASP.NET Core developer with React frontend skills: C#, ASP.NET Core, React, and the payment, real-time, and infrastructure work behind them.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return <ResumeContent />;
}
