import { experience, leadership } from "@/data/site";

export function ExperienceContent() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
      <ul className="space-y-12">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.dates}`}>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-xl text-foreground">{entry.role}</h2>
              <span className="text-sm text-subtle">{entry.dates}</span>
            </div>
            <p className="text-sm text-muted">
              {entry.company} · {entry.location}
            </p>
            {entry.summary && (
              <p className="mt-1 text-xs text-subtle">{entry.summary}</p>
            )}
            <ul className="mt-4 space-y-2">
              {entry.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        <h2 className="mb-5 font-display text-xl text-foreground">Leadership</h2>
        <ul className="space-y-3">
          {leadership.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
