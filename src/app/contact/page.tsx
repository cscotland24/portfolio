import { ContactContent } from "@/components/Contact";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Contact · Calum Scotland",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Open to engineering roles, collaborations, and interesting project work."
    >
      <ContactContent />
    </PageShell>
  );
}
