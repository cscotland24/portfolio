import Link from "next/link";
import { notFound } from "next/navigation";
import { FlowLine } from "@/components/FlowLine";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { SavannaBackdrop } from "@/components/SavannaBackdrop";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} · Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pb-24 pt-28">
      <SavannaBackdrop variant="page" />
      <article className="relative mx-auto max-w-3xl px-6">
        <Link
          href="/projects"
          className="mb-12 inline-block text-sm font-medium text-acacia-muted transition-colors hover:text-ochre"
        >
          ← Back to projects
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-subtle">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
          <h1 className="text-3xl text-foreground md:text-4xl">{project.title}</h1>
          <FlowLine className="my-6 max-w-sm" />
          <p className="text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-surface/85 px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-md bg-ochre px-5 py-2.5 text-sm font-medium text-ochre-foreground transition-colors hover:bg-ochre-hover"
            >
              View live app →
            </a>
          )}
        </header>

        {project.media && project.media.length > 0 ? (
          <ProjectMediaGallery media={project.media} title={project.title} />
        ) : !project.liveUrl ? (
          <div className="flex aspect-video items-center justify-center rounded-md border border-border bg-surface/85">
            <p className="text-sm text-subtle">Project image placeholder</p>
          </div>
        ) : null}

        <div className="mt-12 space-y-5">
          {project.description.map((paragraph) => (
            <p key={paragraph} className="text-[1.0625rem] leading-[1.75] text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
