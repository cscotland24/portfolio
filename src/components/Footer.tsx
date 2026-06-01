import { FlowLine } from "@/components/FlowLine";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="mx-auto max-w-4xl px-6">
        <FlowLine className="mb-8 max-w-xs" />
        <div className="flex flex-col items-start justify-between gap-3 text-sm text-subtle sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.title}</p>
        </div>
      </div>
    </footer>
  );
}
