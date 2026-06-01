import { ExperienceContent } from "@/components/Experience";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Experience · Calum Scotland",
};

export default function ExperiencePage() {
  return (
    <PageShell
      title="Experience"
      description="Hands-on work across construction, mission logistics, and leadership roles."
    >
      <ExperienceContent />
    </PageShell>
  );
}
