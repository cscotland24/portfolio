import { PageShell } from "@/components/PageShell";
import { ProjectsContent } from "@/components/Projects";

export const metadata = {
  title: "Projects · Calum Scotland",
};

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      description="Selected engineering builds and software prototypes."
    >
      <ProjectsContent />
    </PageShell>
  );
}
