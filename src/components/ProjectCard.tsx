import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface/85 transition-all hover:border-ochre/40 hover:bg-surface-hover">
      {project.coverImage && (
        <div className="relative aspect-[16/10] border-b border-border/80">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className={
              project.coverImageFit === "contain"
                ? "object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                : "object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            }
            style={
              project.coverImagePosition
                ? { objectPosition: project.coverImagePosition }
                : undefined
            }
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h2 className="font-display text-xl text-foreground transition-colors group-hover:text-ochre">
          {project.title}
        </h2>
        <span className="shrink-0 text-xs text-subtle">{project.year}</span>
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-subtle"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="text-sm font-medium text-acacia-muted transition-colors hover:text-ochre hover:underline hover:underline-offset-4"
      >
        Read case study →
      </Link>
      </div>
    </article>
  );
}
