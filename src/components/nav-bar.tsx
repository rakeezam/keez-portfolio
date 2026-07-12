const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

export function NavBar() {
  return (
    <header className="px-6 pt-6 sm:px-12">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#top" className="relative flex flex-col gap-1.5 lg:flex-row lg:items-baseline lg:gap-2 font-display text-xl">
          <span className="flex items-baseline gap-2">
            rakeeza <span className="font-sans text-sm text-ink/60">ᐢ..ᐢ</span>
          </span>
          <span className="w-fit rotate-[-6deg] bg-marigold px-2.5 py-1 text-[10.5px] font-bold tracking-tight text-forest shadow-[2px_2px_0_rgba(38,34,32,0.14)] whitespace-nowrap lg:absolute lg:-top-3.5 lg:left-[108px]">
            available ✨
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-ink/60 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="border border-ink px-4 py-1.5 text-sm font-medium transition-colors hover:bg-forest hover:text-paper hover:border-forest"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
