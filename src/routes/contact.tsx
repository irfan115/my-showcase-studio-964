import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Irfan, WordPress Developer" },
      {
        name: "description",
        content:
          "Get in touch with Irfan for WordPress, WooCommerce, and custom plugin work. Email m.irfanchamp@gmail.com.",
      },
      { property: "og:title", content: "Contact — Irfan" },
      {
        property: "og:description",
        content: "Available for new WordPress, WooCommerce and plugin projects.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="px-6 lg:px-10 pt-24 pb-20 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-serif">
            Have a WordPress project in mind?
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            I take on a small number of projects each quarter. Tell me what you
            need and I'll get back within two working days.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <a
              href="mailto:m.irfanchamp@gmail.com"
              className="group rounded-2xl border border-border/60 bg-surface p-6 hover:border-primary/60 transition flex items-start gap-4"
            >
              <Mail className="h-6 w-6 mt-1 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Email
                </p>
                <p className="font-serif text-2xl group-hover:text-gradient">
                  m.irfanchamp@gmail.com
                </p>
              </div>
            </a>

            <div className="rounded-2xl border border-border/60 bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                What to include
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>· Brief project summary</li>
                <li>· Timeline and budget range</li>
                <li>· Links to references or existing site</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex gap-6 text-muted-foreground text-sm">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
