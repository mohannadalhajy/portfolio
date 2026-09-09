import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects covering scalable backends, real-time systems, payments, and cloud integrations across HR, legal, auto, and social platforms.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
