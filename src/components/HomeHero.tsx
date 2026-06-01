import Link from "next/link";
import { SavannaBackdrop } from "@/components/SavannaBackdrop";
import { site } from "@/data/site";

const navCards = [
  {
    href: "/about",
    title: "About",
    description: "Background, education, and skills",
  },
  {
    href: "/experience",
    title: "Experience",
    description: "Work history and leadership",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Engineering and software work",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Get in touch",
  },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden pt-24">
      <SavannaBackdrop variant="home" />
      <div className="relative mx-auto w-full max-w-4xl px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
          {site.title}
        </p>
        <h1 className="max-w-2xl text-4xl leading-[1.08] text-foreground md:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-lg text-xl leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-md border border-border bg-surface/80 p-5 backdrop-blur-sm transition-all hover:border-ochre/50 hover:bg-surface-hover"
            >
              <h2 className="text-xl text-foreground transition-colors group-hover:text-ochre">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{card.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-acacia-muted transition-colors group-hover:text-acacia-light">
                Explore →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={site.resume}
            download
            className="inline-flex rounded-md bg-ochre px-5 py-2.5 text-sm font-medium text-ochre-foreground transition-colors hover:bg-ochre-hover"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
