export function Star({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={{ color }}>
      <path
        d="M12 1 L14 9 L22 9 L15.5 13.8 L18 22 L12 17 L6 22 L8.5 13.8 L2 9 L10 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 20" preserveAspectRatio="none" className={className}>
      <path
        d="M2 12 C 30 2, 60 20, 90 10 S 150 2, 180 12 S 240 20, 270 8 S 295 6, 298 10"
        stroke="var(--periwinkle)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PointArrow({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M2 6 C 20 2, 35 30, 56 32" stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M48 26 L57 33 L46 36" stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
