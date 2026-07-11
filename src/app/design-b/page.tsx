import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const italic = { fontFamily: "var(--font-instrument)", fontStyle: "italic" as const };
const serif = { fontFamily: "var(--font-instrument)" };

const STACK = ["React", "Next.js", "TypeScript", "Node.js"];

const SKILLS = [
  { name: "React", desc: "Component-driven UIs, hooks, state management" },
  { name: "Next.js", desc: "App router, SSG/SSR, performance-first builds" },
  { name: "TypeScript", desc: "Type-safe apps that scale with the team" },
  { name: "Node.js", desc: "APIs, tooling, and backend services" },
  { name: "UI / Design systems", desc: "Design-forward, accessible interfaces" },
  { name: "Animation", desc: "Considered, purposeful motion and polish" },
];

const PROJECTS = [
  { title: "Placeholder Project One", desc: "A short description of this project — what it does, the problem it solves, and your role in it.", tags: ["Next.js", "TypeScript", "Tailwind"] },
  { title: "Placeholder Project Two", desc: "Another project summary goes here. Swap in a real screenshot, link, and case study later.", tags: ["React", "Node.js"] },
  { title: "Placeholder Project Three", desc: "Describe the impact — metrics, users, or outcomes — to make this project stand out to clients.", tags: ["Next.js", "PostgreSQL"] },
];

const ROLES = [
  { role: "Senior Full-Stack Developer", company: "Placeholder Company", period: "2023 — Present", desc: "Leading development of client-facing web apps using React, Next.js, and Node.js." },
  { role: "Full-Stack Developer", company: "Placeholder Studio", period: "2021 — 2023", desc: "Built and shipped features across the stack for a fast-moving product team." },
  { role: "Junior Developer", company: "Placeholder Agency", period: "2019 — 2021", desc: "Started my journey building websites and small apps for local clients." },
];

const NAVY = "#1E2A3F";

export default function DesignB() {
  return (
    <div className={`${instrument.variable} min-h-screen bg-[#FAF8F3] text-[#20242C]`}>
      {/* Nav */}
      <header className="px-6 py-6 sm:px-16">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a href="#top" className="text-sm font-medium uppercase tracking-[0.2em]">
            Keez
          </a>
          <ul className="hidden items-center gap-10 text-sm text-[#20242C]/60 sm:flex">
            <li><a href="#about" className="hover:text-[#20242C]">About</a></li>
            <li><a href="#work" className="hover:text-[#20242C]">Work</a></li>
            <li><a href="#experience" className="hover:text-[#20242C]">Experience</a></li>
          </ul>
          <a
            href="#contact"
            className="text-sm font-medium underline underline-offset-4 hover:text-[#20242C]/70"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="px-6 pb-24 pt-12 sm:px-16 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#20242C]/50">
            <span className="h-px w-8 bg-[#20242C]/30" />
            Full-stack developer · 2026
          </div>

          <h1 style={italic} className="mt-6 text-6xl leading-[1.05] sm:text-8xl">
            Welcome to
            <br />
            my portfolio.
          </h1>

          <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-base leading-relaxed text-[#20242C]/70">
              I&apos;m Keez — a full-stack developer with 5 years of
              experience turning ideas into fast, polished products.
              Placeholder bio, swap this in for your own story.
            </p>
            <div
              className="flex h-40 w-full items-center justify-center text-xs uppercase tracking-widest text-[#FAF8F3]/50 sm:w-56"
              style={{ backgroundColor: NAVY }}
            >
              photo placeholder
            </div>
          </div>

          <p className="mt-8 text-sm tracking-wide text-[#20242C]/50">
            {STACK.join("  ·  ")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex items-center gap-1.5 px-6 py-3 text-sm text-[#FAF8F3] transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              View my work <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className="border border-[#20242C]/20 px-6 py-3 text-sm transition-colors hover:border-[#20242C]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#20242C]/10 px-6 py-16 sm:px-16">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          <div>
            <h2 style={italic} className="text-4xl">About me</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#20242C]/70">
              This is placeholder about-me copy. Swap in your real story here
              — where you started, what kind of problems you like solving,
              and the type of teams or clients you enjoy working with.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:self-center">
            {[["5+", "years experience"], ["20+", "projects shipped"], ["10+", "happy clients"]].map(
              ([value, label]) => (
                <div key={label} className="border-l-2 pl-4" style={{ borderColor: NAVY }}>
                  <p style={serif} className="text-3xl">{value}</p>
                  <p className="mt-1 text-xs leading-tight text-[#20242C]/50">{label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[#20242C]/10 px-6 py-16 sm:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 style={italic} className="mb-10 text-4xl">Things I&apos;m good at</h2>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="border-b border-[#20242C]/10 pb-4">
                <p className="text-base font-medium">{skill.name}</p>
                <p className="mt-1 text-sm text-[#20242C]/60">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="border-t border-[#20242C]/10 px-6 py-16 sm:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 style={italic} className="mb-10 text-4xl">Some things I&apos;ve built</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <a key={project.title} href="#" className="group block">
                <div
                  className="flex h-40 w-full items-center justify-center text-xs uppercase tracking-widest text-[#FAF8F3]/40"
                  style={{ backgroundColor: i === 1 ? NAVY : "#20242C" }}
                >
                  project image
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <p className="font-medium">{project.title}</p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#20242C]/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#20242C]/60">{project.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-[#20242C]/40">
                  {project.tags.join(" · ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-[#20242C]/10 px-6 py-16 sm:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 style={italic} className="mb-10 text-4xl">Where I&apos;ve worked</h2>
          <div className="space-y-8">
            {ROLES.map((item) => (
              <div key={item.role} className="grid gap-1 border-t border-[#20242C]/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h3 className="text-lg font-medium">{item.role}</h3>
                  <p className="text-sm" style={{ color: NAVY }}>{item.company}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#20242C]/70">{item.desc}</p>
                </div>
                <span className="text-sm text-[#20242C]/50">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#20242C]/10 px-6 py-24 text-center sm:px-16">
        <h2 style={italic} className="text-5xl sm:text-6xl">Let&apos;s talk.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#20242C]/70">
          Have a project in mind or just want to say hi? My inbox is always
          open — placeholder text, swap in your real pitch here.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 text-sm text-[#FAF8F3] transition-opacity hover:opacity-90"
          style={{ backgroundColor: NAVY }}
        >
          hello@example.com
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm text-[#20242C]/60">
          <a href="#" className="flex items-center gap-1.5 hover:text-[#20242C]">
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-[#20242C]">
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-xs text-[#20242C]/40">
        made by Keez · 2026
      </footer>
    </div>
  );
}
