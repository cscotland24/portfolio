import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsContent() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
