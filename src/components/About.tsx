import { about } from "@/data/site";

export function AboutContent() {
  const allSkills = [...about.skills.engineering, ...about.skills.handsOn];

  return (
    <div className="grid gap-16 md:grid-cols-[1.35fr_1fr]">
      <div className="space-y-10">
        <div className="space-y-5">
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="text-[1.0625rem] leading-[1.75] text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <h2 className="mb-4 font-display text-xl text-foreground">Highlights</h2>
          <ul className="space-y-3">
            {about.highlights.map((item) => (
              <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted">
                <span
                  className="mt-[0.55rem] h-px w-6 shrink-0 bg-ochre/50"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <h2 className="mb-5 font-display text-xl text-foreground">Education</h2>
          <ul className="space-y-6">
            {about.education.map((entry) => (
              <li key={entry.institution}>
                <p className="text-sm font-medium text-foreground">{entry.degree}</p>
                <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                <p className="text-sm text-subtle">
                  {entry.location} · {entry.dates}
                </p>
                <p className="mt-1 text-xs text-subtle">
                  {entry.details.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-display text-xl text-foreground">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
