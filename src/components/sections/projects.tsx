import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const PROJECTS = [
  {
    title: "Placeholder Project One",
    description:
      "A short description of this project — what it does, the problem it solves, and your role in it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-[var(--blush)] to-[var(--lavender)]",
  },
  {
    title: "Placeholder Project Two",
    description:
      "Another project summary goes here. Swap in a real screenshot, link, and case study later.",
    tags: ["React", "Node.js"],
    gradient: "from-[var(--mint)] to-[var(--butter)]",
  },
  {
    title: "Placeholder Project Three",
    description:
      "Describe the impact — metrics, users, or outcomes — to make this project stand out to clients.",
    tags: ["Next.js", "PostgreSQL"],
    gradient: "from-[var(--lavender)] to-[var(--mint)]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
            Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Some things I&apos;ve built
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <a
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-transform hover:-translate-y-1"
              >
                <div
                  className={`h-32 w-full bg-gradient-to-br ${project.gradient}`}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-heading font-semibold text-foreground">
                      {project.title}
                    </p>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
