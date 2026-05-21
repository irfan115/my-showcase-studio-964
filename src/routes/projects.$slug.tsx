import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found" }] };
    return {
      meta: [
        { title: `${p.title} — Case study by Irfan` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Irfan` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center">
          <h1 className="font-serif text-5xl">Project not found</h1>
          <Link to="/" className="mt-6 inline-block text-primary hover:underline">
            ← Back to work
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={reset} className="text-primary">
        Try again
      </button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="px-6 lg:px-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← All work
          </Link>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-5xl md:text-7xl font-serif">{project.title}</h1>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Visit live site <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            {project.tagline}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-y border-border/60 py-6">
            <Meta label="Year" value={project.year} />
            <Meta label="Role" value={project.role} />
            <Meta label="Live" value={new URL(project.url).hostname} />
            <Meta label="Stack" value={project.stack.join(" · ")} />
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border/60 bg-surface shadow-glow">
            <img
              src={project.image}
              alt={`${project.title} hero screenshot`}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-5xl">
            <h2 className="font-serif text-3xl md:col-span-1">Overview</h2>
            <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-16 mb-24">
            <h2 className="font-serif text-2xl mb-6">More work</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="group rounded-xl border border-border/60 bg-surface p-5 hover:border-primary/60 transition flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {p.year}
                      </p>
                      <p className="font-serif text-xl mt-1">{p.title}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}
