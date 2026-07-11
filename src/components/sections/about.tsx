import { FadeIn } from "@/components/fade-in";

const STATS = [
  { value: "5+", label: "years experience" },
  { value: "20+", label: "projects shipped" },
  { value: "10+", label: "happy clients" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="grid gap-10 rounded-4xl border border-border/60 bg-card p-8 shadow-sm sm:grid-cols-[auto_1fr] sm:p-10">
            <div className="flex justify-center sm:justify-start">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--blush)] via-[var(--lavender)] to-[var(--mint)] text-4xl shadow-inner">
                🐣
              </div>
            </div>

            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                About me
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Placeholder bio heading goes here
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                This is placeholder about-me copy. Swap in your real story here
                — where you started, what kind of problems you like solving,
                and the type of teams or clients you enjoy working with. Keep
                it short, warm, and specific to you.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-muted px-3 py-4 text-center"
                  >
                    <p className="font-heading text-xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
