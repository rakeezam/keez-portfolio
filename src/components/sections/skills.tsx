const CATEGORIES = [
  {
    name: "Frontend",
    tone: "bg-forest",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "MUI", "Vanilla Extract", "Tamagui", "Figma"],
  },
  {
    name: "Backend & APIs",
    tone: "bg-terracotta",
    items: ["Node.js", "Python", "GraphQL", "RESTful APIs", "WebSockets", "Microservices", "Authentication Flows"],
  },
  {
    name: "State Management",
    tone: "bg-marigold text-forest",
    items: ["Context API", "Custom Hooks", "WatermelonDB (offline-first)"],
  },
  {
    name: "Databases & Cloud",
    tone: "bg-periwinkle",
    items: ["AWS (S3, SQS, ECS, CloudWatch, DynamoDB)", "SQLite", "MySQL", "Docker", "CI/CD"],
  },
  {
    name: "Testing & Quality",
    tone: "bg-forest",
    items: ["TDD", "Unit / Integration Testing", "A/B Testing (Optimizely, Google)", "Edge-case Analysis", "PR Review"],
  },
  {
    name: "AI Tools",
    tone: "bg-terracotta",
    items: ["GitHub Copilot", "Claude"],
  },
  {
    name: "Ways of Working",
    tone: "bg-marigold text-forest",
    items: ["Agile / Scrum", "End-to-end Feature Ownership", "Stakeholder Communication", "Technical Documentation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Skills</p>
        <h2 className="mb-10 font-display text-3xl">What I work with</h2>
        <div className="space-y-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-display text-lg">{cat.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-xs font-semibold text-paper ${cat.tone}`}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 94% 100%, 0 100%)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
