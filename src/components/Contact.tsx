import { site } from "@/data/site";

export function ContactContent() {
  return (
    <ul className="max-w-lg space-y-4 text-sm">
      <li>
        <span className="text-subtle">Phone · </span>
        <a
          href={`tel:${site.phone.replace(/-/g, "")}`}
          className="text-foreground transition-colors hover:text-ochre"
        >
          {site.phone}
        </a>
      </li>
      <li>
        <span className="text-subtle">Email · </span>
        <a
          href={`mailto:${site.email}`}
          className="text-foreground transition-colors hover:text-ochre"
        >
          {site.email}
        </a>
      </li>
      <li>
        <span className="text-subtle">LinkedIn · </span>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-ochre"
        >
          Profile
        </a>
      </li>
      <li>
        <span className="text-subtle">GitHub · </span>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-ochre"
        >
          cscotland24
        </a>
      </li>
      <li>
        <span className="text-subtle">Resume · </span>
        <a
          href={site.resume}
          download
          className="text-foreground transition-colors hover:text-ochre"
        >
          Download PDF
        </a>
      </li>
      <li>
        <span className="text-subtle">Location · </span>
        <span className="text-foreground">{site.location}</span>
      </li>
    </ul>
  );
}
