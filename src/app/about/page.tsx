import { AboutContent } from "@/components/About";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "About · Calum Scotland",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      description="Mechanical engineering and business student passionate about hard work, service, and meaningful impact."
    >
      <AboutContent />
    </PageShell>
  );
}
