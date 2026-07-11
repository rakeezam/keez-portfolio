import { Fraunces } from "next/font/google";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const serif = { fontFamily: "var(--font-fraunces)" };

const STACK = ["React", "Next.js", "TypeScript", "Node.js"];

const SKILLS = [
  { n: "01", name: "React", desc: "Component-driven UIs, hooks, state management" },
  { n: "02", name: "Next.js", desc: "App router, SSG/SSR, performance-first builds" },
  { n: "03", name: "TypeScript", desc: "Type-safe apps that scale with the team" },
  { n: "04", name: "Node.js", desc: "APIs, tooling, and backend services" },
  { n: "05", name: "UI / Design systems", desc: "Design-forward, accessible interfaces" },
  { n: "06", name: "Animation", desc: "Considered, purposeful motion and polish" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Placeholder Project One",
    desc: "A short description of this project — what it does, the problem it solves, and your role in it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    tone: "bg-[#5c6b4f]",
  },
  {
    n: "02",
    title: "Placeholder Project Two",
    desc: "Another project summary goes here. Swap in a real screenshot, link, and case study later.",
    tags: ["React", "Node.js"],
    tone: "bg-[#c6673b]",
  },
  {
    n: "03",
    title: "Placeholder Project Three",
    desc: "Describe the impact — metrics, users, or outcomes — to make this project stand out to clients.",
    tags: ["Next.js", "PostgreSQL"],
    tone: "bg-[#1f2b22]",
  },
];

const ROLES = [
  { role: "Senior Full-Stack Developer", company: "Placeholder Company", period: "2023 — Present", desc: "Leading development of client-facing web apps using React, Next.js, and Node.js." },
  { role: "Full-Stack Developer", company: "Placeholder Studio", period: "2021 — 2023", desc: "Built and shipped features across the stack for a fast-moving product team." },
  { role: "Junior Developer", company: "Placeholder Agency", period: "2019 — 2021", desc: "Started my journey building websites and small apps for local clients." },
];

export default function DesignA() {
  return (
    <div className={`${fraunces.variable} min-h-screen bg-[#F3EEE3] text-[#262220]`}>
      {/* Nav */}
      <header className="border-b border-[#262220]/10 px-6 py-5 sm:px-12">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a href="#top" style={serif} className="text-lg tracking-wide">
            Keez
          </a>
          <ul className="hidden items-center gap-8 text-sm text-[#262220]/70 sm:flex">
            <li><a href="#about" className="hover:text-[#262220]">About</a></li>
            <li><a href="#skills" className="hover:text-[#262220]">Skills</a></li>
            <li><a href="#work" className="hover:text-[#262220]">Work</a></li>
            <li><a href="#experience" className="hover:text-[#262220]">Experience</a></li>
          </ul>
          <a
            href="#contact"
            className="border border-[#262220] px-4 py-1.5 text-sm transition-colors hover:bg-[#262220] hover:text-[#F3EEE3]"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative px-6 pb-20 pt-16 sm:px-12 sm:pt-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1.3fr_1fr] sm:gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c6673b]">
              Portfolio — 2026
            </p>
            <h1 style={serif} className="text-6xl leading-[0.95] sm:text-7xl">
              Hi, I&apos;m
              <br />
              Keez.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#262220]/70">
              A full-stack developer with 5 years of experience turning ideas
              into fast, considered products — placeholder bio, swap this in
              for your own story.
            </p>
            <p className="mt-6 text-sm tracking-wide text-[#262220]/60">
              {STACK.join(" · ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="flex items-center gap-1.5 bg-[#1f2b22] px-5 py-2.5 text-sm text-[#F3EEE3] transition-colors hover:bg-[#262220]"
              >
                View my work <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="border border-[#262220] px-5 py-2.5 text-sm transition-colors hover:bg-[#262220] hover:text-[#F3EEE3]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative flex items-start justify-center sm:justify-end">
            <div className="aspect-[4/5] w-full max-w-[280px] bg-[#c6673b]/25">
              <div className="flex h-full w-full items-center justify-center border border-[#262220]/15 text-sm text-[#262220]/40">
                photo placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#262220]/10 px-6 py-16 sm:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c6673b]">About</p>
            <h2 style={serif} className="text-3xl">
              Placeholder bio heading goes here
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#262220]/70">
              This is placeholder about-me copy. Swap in your real story here
              — where you started, what kind of problems you like solving,
              and the type of teams or clients you enjoy working with.
            </p>
          </div>
          <div className="divide-y divide-[#262220]/10 border-y border-[#262220]/10 sm:self-center">
            {[
              ["Years of experience", "5+"],
              ["Projects shipped", "20+"],
              ["Happy clients", "10+"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between py-3 text-sm">
                <span className="text-[#262220]/60">{label}</span>
                <span style={serif} className="text-xl">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[#262220]/10 px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c6673b]">Skills</p>
          <h2 style={serif} className="mb-8 text-3xl">Things I&apos;m good at</h2>
          <div className="divide-y divide-[#262220]/10 border-y border-[#262220]/10">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="flex items-baseline gap-6 py-4">
                <span className="w-8 shrink-0 text-xs text-[#262220]/40">{skill.n}</span>
                <span style={serif} className="w-full max-w-[220px] shrink-0 text-lg">
                  {skill.name}
                </span>
                <span className="text-sm text-[#262220]/60">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="border-t border-[#262220]/10 px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c6673b]">Work</p>
          <h2 style={serif} className="mb-10 text-3xl">Some things I&apos;ve built</h2>
          <div className="space-y-12">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href="#"
                className="group grid gap-6 border-t border-[#262220]/10 pt-8 sm:grid-cols-[120px_1fr_auto] sm:items-start"
              >
                <span className="text-xs text-[#262220]/40">{project.n}</span>
                <div>
                  <h3 style={serif} className="flex items-center gap-2 text-2xl">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-[#262220]/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#262220]/70">
                    {project.desc}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wide text-[#262220]/50">
                    {project.tags.join(" · ")}
                  </p>
                </div>
                <div className={`h-24 w-full sm:w-32 ${project.tone}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-[#262220]/10 px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c6673b]">Experience</p>
          <h2 style={serif} className="mb-8 text-3xl">Where I&apos;ve worked</h2>
          <div className="divide-y divide-[#262220]/10 border-y border-[#262220]/10">
            {ROLES.map((item) => (
              <div key={item.role} className="grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h3 style={serif} className="text-xl">{item.role}</h3>
                  <p className="text-sm text-[#c6673b]">{item.company}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#262220]/70">
                    {item.desc}
                  </p>
                </div>
                <span className="text-sm text-[#262220]/50">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#262220]/10 px-6 py-20 text-center sm:px-12">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c6673b]">Contact</p>
        <h2 style={serif} className="text-4xl sm:text-5xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#262220]/70">
          Have a project in mind or just want to say hi? My inbox is always
          open — placeholder text, swap in your real pitch here.
        </p>
        <a
          href="mailto:hello@example.com"
          style={serif}
          className="mt-6 inline-block border-b border-[#262220] text-2xl hover:text-[#c6673b] hover:border-[#c6673b]"
        >
          hello@example.com
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm text-[#262220]/60">
          <a href="#" className="flex items-center gap-1.5 hover:text-[#262220]">
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-[#262220]">
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-xs text-[#262220]/40">
        made by Keez · 2026
      </footer>
    </div>
  );
}
