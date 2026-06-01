import Image from "next/image";
import type { ProjectMedia } from "@/data/projects";

type ProjectMediaGalleryProps = {
  media: ProjectMedia[];
  title: string;
};

export function ProjectMediaGallery({ media, title }: ProjectMediaGalleryProps) {
  return (
    <div className="space-y-6">
      {media.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-md border border-border bg-surface/85"
        >
          {item.type === "image" ? (
            <div
              className={`relative w-full ${item.fit === "contain" ? "bg-background/60" : ""}`}
              style={{ aspectRatio: item.aspect ?? "16 / 9" }}
            >
              <Image
                src={item.src}
                alt={item.alt ?? title}
                fill
                className={item.fit === "contain" ? "object-contain" : "object-cover"}
                style={item.position ? { objectPosition: item.position } : undefined}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : (
            <video
              src={item.src}
              controls
              playsInline
              className="aspect-video w-full bg-black"
              aria-label={item.alt ?? `${title} video`}
            >
              Your browser does not support video playback.
            </video>
          )}
          {item.caption && (
            <figcaption className="px-4 py-3 text-sm text-subtle">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
