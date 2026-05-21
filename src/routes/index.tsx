import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irfan — Senior WordPress Developer & Portfolio" },
      {
        name: "description",
        content:
          "Senior WordPress developer crafting bespoke themes, WooCommerce stores, and custom plugins. Selected work: Together Journal, Assortment Foods, Kooga NZ.",
      },
      { property: "og:title", content: "Irfan — Senior WordPress Developer" },
      {
        property: "og:description",
        content:
          "Bespoke WordPress, WooCommerce, and custom plugin work for editorial, food and sports brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative px-6 lg:px-10 pt-24 pb-20 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Senior WordPress Developer · Available for projects
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95]">
            I build <em className="text-gradient">considered</em>
            <br />
            WordPress experiences
            <br />
            for ambitious brands.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Eight years shipping custom themes, WooCommerce stores, membership
            platforms, and bespoke plugins. I care about clean code, fast pages,
            and editorial design that actually converts.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View selected work
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface transition"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-serif">Selected work</h2>
            <span className="text-sm text-muted-foreground">{projects.length} projects · 2023 — 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className={`group relative overflow-hidden rounded-2xl bg-surface border border-border/60 hover:border-primary/60 transition-colors ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                  <img
                    src={p.image}
                    alt={`Screenshot of ${p.title} website`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      {p.year} · {p.stack[0]}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-md">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-10 mt-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10">
          {[
            {
              h: "Custom themes",
              p: "Hand-built themes from Figma — no page builders, no bloat. Block editor or classic, your call.",
            },
            {
              h: "WooCommerce",
              p: "Subscriptions, memberships, configurators, complex checkouts. I've shipped them all.",
            },
            {
              h: "Bespoke plugins",
              p: "Clean PHP, proper hooks, tested code. Plugins that survive WordPress updates.",
            },
          ].map((c) => (
            <div key={c.h}>
              <h3 className="text-2xl font-serif mb-3">{c.h}</h3>
              <p className="text-muted-foreground">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
