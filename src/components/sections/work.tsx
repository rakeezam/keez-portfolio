"use client";

import { useState } from "react";

const CASE_STUDIES = [
  {
    title: "Split payments",
    company: "Azzurri Group",
    summary: "Split-by-item and even payment options, cutting bill payment time by 20%.",
    problem: "Diners needed a fast, reliable way to split a bill by item or evenly, directly from the app.",
    role: "Designed and delivered the split-payment feature end to end.",
    decisions: "Extensive edge-case testing to handle partial payments, rounding, and concurrent updates correctly.",
    outcome: "20% reduction in bill payment time.",
    tone: "border-forest",
  },
  {
    title: "Offline-first React Native architecture",
    company: "Azzurri Group",
    summary: "Rebuilt the waiter app's data layer for reliability, cutting key journey times by 80%.",
    problem: "Apollo GraphQL was crashing on menu data in the React Native waiter app.",
    role: "Led a major architectural overhaul in the absence of a tech lead.",
    decisions: "Replaced Apollo GraphQL with local SQLite/WatermelonDB offline-first storage.",
    outcome: "80% reduction in key journey times.",
    tone: "border-terracotta",
  },
  {
    title: "Authentication migration",
    company: "Azzurri Group",
    summary: "Migrated ~370,000 users to a new authentication system with zero disruption.",
    problem: "The existing auth system needed replacing under a tight deadline, without disrupting active users.",
    role: "Owned the migration end to end.",
    decisions: "Careful sequencing and rollout to avoid downtime or forced re-logins at scale.",
    outcome: "~370,000 users migrated, zero disruption.",
    tone: "border-marigold",
  },
  {
    title: "Ad automation pipeline",
    company: "Zoopla",
    summary: "A greenfield, event-driven pipeline that cut a two-week manual workflow to under 24 hours.",
    problem: "Ad creative and campaign setup relied on a slow, two-week manual workflow.",
    role: "Designed and built the pipeline from scratch.",
    decisions: "Event-driven architecture syncing Salesforce via AppFlow with Google Ad Manager and Passendo, with creative assets automated across formats in S3.",
    outcome: "Two-week manual workflow cut to under 24 hours.",
    tone: "border-periwinkle",
  },
];

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="work" className="border-t border-ink/10 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Selected Work</p>
        <h2 className="mb-10 font-display text-3xl">Case studies</h2>

        <div className="space-y-4">
          {CASE_STUDIES.map((cs, i) => {
            const open = openIndex === i;
            return (
              <div key={cs.title} className={`border-l-2 ${cs.tone} bg-paper-soft/50`}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={open}
                >
                  <div>
                    <h3 className="font-display text-xl">{cs.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-ink/40">{cs.company}</p>
                    <p className="mt-2 text-sm text-ink/60">{cs.summary}</p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`h-5 w-5 shrink-0 text-ink/40 transition-transform ${open ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {open && (
                  <div className="grid gap-5 px-5 pb-6 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Problem</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Role &amp; decisions</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {cs.role} {cs.decisions}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Outcome</p>
                      <p className="mt-1.5 font-display text-lg">{cs.outcome}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
