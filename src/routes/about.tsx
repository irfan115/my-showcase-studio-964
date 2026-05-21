import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Irfan, Senior WordPress Developer" },
      {
        name: "description",
        content:
          "About Irfan — senior WordPress developer specialising in custom themes, WooCommerce, and bespoke plugins.",
      },
      { property: "og:title", content: "About — Irfan" },
      {
        property: "og:description",
        content: "Senior WordPress developer. Custom themes, WooCommerce, plugins.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="px-6 lg:px-10 pt-24 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            About
          </p>
          <h1 className="text-5xl md:text-7xl font-serif">
            A senior WordPress developer who treats code like craft.
          </h1>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-muted-foreground">
            <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                I'm Irfan — a senior WordPress developer with over a decade of
                experience building custom themes, WooCommerce stores,
                membership platforms, and the bespoke plugins that hold them
                together.
              </p>
              <p>
                I work directly with founders, designers, and agencies to turn
                ambitious briefs into fast, accessible, maintainable WordPress
                sites. No page builders pretending to be code. No templates
                hiding fragile foundations.
              </p>
              <p>
                Recent work includes <em className="text-foreground">Together
                Journal</em> (editorial WooCommerce),{" "}
                <em className="text-foreground">Assortment Foods</em>{" "}
                (membership meal-planning), and{" "}
                <em className="text-foreground">Kooga NZ</em> (custom team-kit
                configurator).
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Stack
                </p>
                <ul className="space-y-1 text-foreground">
                  <li>WordPress · WooCommerce</li>
                  <li>PHP · MySQL</li>
                  <li>ACF Pro · Custom blocks</li>
                  <li>JS · TypeScript</li>
                  <li>Tailwind · Sass</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Services
                </p>
                <ul className="space-y-1 text-foreground">
                  <li>Custom themes</li>
                  <li>WooCommerce builds</li>
                  <li>Bespoke plugins</li>
                  <li>Performance audits</li>
                  <li>Long-term maintenance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
