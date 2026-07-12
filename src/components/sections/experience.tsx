function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-4 marker:text-terracotta">
      {items.map((item) => (
        <li key={item} className="text-sm leading-relaxed text-ink/60">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-ink/10 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Experience</p>
        <h2 className="mb-10 font-display text-3xl">Where I&rsquo;ve worked</h2>

        <div className="space-y-14">
          {/* Zoopla */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
              <h3 className="font-display text-xl">Zoopla &middot; Full-Stack Engineer</h3>
              <span className="text-sm text-ink/50">May 2025 – Apr 2026</span>
            </div>
            <p className="mt-3 text-sm text-ink/50">London · UK&rsquo;s leading online property portal</p>
            <Bullets
              items={[
                "Built and shipped React features across high-traffic property listing pages viewed by millions daily",
                "Tripled new-homes lead generation within one month via new React conversion pathways",
                "Built and owned a greenfield, event-driven ad automation pipeline (Node.js, Python, AWS) syncing Salesforce via AppFlow with Google Ad Manager and Passendo, cutting a two-week manual workflow to under 24 hours",
                "Automated ad creative generation across formats, with assets in S3 served dynamically by the CRM package",
                "Designed system architecture and wrote technical documentation",
                "Ran A/B tests in Optimizely to validate feature performance",
              ]}
            />
          </div>

          {/* AND Digital */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
              <h3 className="font-display text-xl">AND Digital &middot; Full-Stack Engineer (Consultant)</h3>
              <span className="text-sm text-ink/50">Apr 2021 – May 2025</span>
            </div>
            <p className="mt-3 text-sm text-ink/50">London</p>

            <div className="mt-6 border-l-2 border-marigold pl-5">
              <h4 className="font-display text-lg">Client: Azzurri Group (Zizzi, ASK Italian)</h4>
              <p className="mt-1 text-sm text-ink/50">
                Built their digital estate from scratch across three products: Order &amp; Pay at Table, a React Native waiter app, and a loyalty platform
              </p>
              <Bullets
                items={[
                  "Led a major architectural overhaul of the React Native waiter app, replacing Apollo GraphQL with local SQLite/WatermelonDB offline-first storage, reducing key journey times by 80%",
                  "Migrated ~370,000 users to a new authentication system under a tight deadline, with zero disruption",
                  "Drove the TypeScript migration of the frontend and Node.js microservices mid-project",
                  "Designed and delivered split-payment functionality, by item and evenly, reducing bill payment time by 20%",
                  "Built real-time collaborative table ordering via WebSockets, including race-condition handling",
                  "Built a centralised component library, theming system, and GraphQL query layer used across all three products",
                  "Integrated Pennies micro-donations, raising over £70,000 for charity (Outstanding Achievement Award)",
                  "Grew from junior to senior-level contributor: led releases, mentored new joiners, and served as the primary point of technical clarity across engineering, product, and business stakeholders",
                ]}
              />
            </div>

            <div className="mt-8 border-l-2 border-periwinkle pl-5">
              <h4 className="font-display text-lg">Client: The Telegraph</h4>
              <p className="mt-1 text-sm text-ink/50">Six-month placement, mobile app team</p>
              <Bullets
                items={[
                  "Launched the new ‘Latest’ tab in The Telegraph mobile app, translating Figma designs into production-ready components and delivering real-time breaking news to millions of subscribers",
                  "Optimised performance, responsiveness, and animations, achieving record engagement metrics",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
