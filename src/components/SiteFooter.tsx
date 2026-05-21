export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <p className="font-serif text-2xl">Let's build something.</p>
          <a
            href="mailto:m.irfanchamp@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            m.irfanchamp@gmail.com
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Irfan — Senior WordPress Developer.
        </p>
      </div>
    </footer>
  );
}
