import { Star } from "@/components/doodles";

export function About() {
  return (
    <section id="about" className="relative border-t border-ink/10 px-6 py-16 sm:px-12">
      <Star className="absolute right-[8%] top-10 h-4 w-4 rotate-[12deg]" color="var(--marigold)" />
      <Star className="absolute left-[3%] top-32 h-3 w-3 rotate-[-18deg]" color="var(--periwinkle)" />
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">About</p>
          <h2 className="font-display text-3xl">Five years in, still building from scratch 🌿</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            I&rsquo;m a full-stack engineer with five years of commercial
            experience, specialising in React, TypeScript, and Next.js, with
            full-stack range across Node.js, GraphQL, and AWS. I started as a
            junior frontend developer and grew into a senior, full-stack
            contributor who leads releases, mentors new joiners, and owns
            products end to end.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            I like building things from scratch. I built an entire digital
            estate for a major UK hospitality client across three products,
            and I currently own a greenfield, event-driven automation
            pipeline at Zoopla. I care about getting the details right and
            making sure non-technical stakeholders understand the trade-offs
            behind every decision.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            Recognised as a BIMA 100 Rising Star in 2024. I studied
            Mathematics at the University of Birmingham, graduating with a
            First.
          </p>
        </div>
        <div className="flex flex-col sm:self-center">
          {[
            ["Years of commercial experience", "5", "bg-terracotta"],
            ["Products built from scratch", "3", "bg-marigold"],
            ["Users migrated, zero disruption", "370K+", "bg-periwinkle"],
          ].map(([label, value, dot]) => (
            <div key={label} className="relative flex items-center justify-between border-b border-ink/10 py-4">
              <span className={`absolute -left-4.5 h-2.5 w-2.5 ${dot}`} />
              <span className="text-sm text-ink/60">{label}</span>
              <span className="font-display text-2xl">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
