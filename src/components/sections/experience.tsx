import { FadeIn } from "@/components/fade-in";

const ROLES = [
  {
    role: "Senior Full-Stack Developer",
    company: "Placeholder Company",
    period: "2023 — Present",
    desc: "Leading development of client-facing web apps using React, Next.js, and Node.js.",
  },
  {
    role: "Full-Stack Developer",
    company: "Placeholder Studio",
    period: "2021 — 2023",
    desc: "Built and shipped features across the stack for a fast-moving product team.",
  },
  {
    role: "Junior Developer",
    company: "Placeholder Agency",
    period: "2019 — 2021",
    desc: "Started my journey building websites and small apps for local clients.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <FadeIn className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
            Experience
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="relative mt-12 space-y-8 pl-8">
          <div className="absolute top-1 bottom-1 left-[9px] w-px bg-border" />
          {ROLES.map((item, i) => (
            <FadeIn key={item.role} delay={i * 0.08}>
              <div className="relative">
                <div className="absolute top-1.5 -left-8 h-4 w-4 rounded-full border-2 border-card bg-primary shadow-sm" />
                <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-heading font-semibold text-foreground">
                      {item.role}
                    </p>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
