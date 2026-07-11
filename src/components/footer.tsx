export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 text-center text-xs text-muted-foreground">
      made with <span aria-hidden>🩷</span> by Keez · {new Date().getFullYear()}
    </footer>
  );
}
