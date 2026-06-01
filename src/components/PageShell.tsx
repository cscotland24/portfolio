import { FlowLine } from "@/components/FlowLine";
import { SavannaBackdrop } from "@/components/SavannaBackdrop";
import { WeaveRule } from "@/components/WeaveRule";

type PageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="relative min-h-[70vh] pb-24 pt-28">
      <SavannaBackdrop variant="page" />
      <div className="relative mx-auto max-w-4xl px-6">
        <header className="mb-14">
          <WeaveRule className="mb-5" />
          <h1 className="text-4xl text-foreground md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          )}
          <FlowLine className="mt-8 max-w-sm" />
        </header>
        {children}
      </div>
    </div>
  );
}
