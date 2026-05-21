import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight">Irfan</span>
          <span className="text-muted-foreground text-sm hidden sm:inline">
            — WordPress Developer
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="mailto:m.irfanchamp@gmail.com"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
