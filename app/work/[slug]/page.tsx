import type { Metadata } from "next";
import Link from "next/link";
import { getProject, projects } from "../../projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.title} - Kristi` : "Case Study - Kristi",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="site-shell">
        <header className="site-nav" aria-label="Primary navigation">
          <Link href="/" className="brand-link">
            Kristi
          </Link>
          <nav className="nav-links">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/#resume">Resume</Link>
          </nav>
        </header>
        <section className="case-hero">
          <p className="eyebrow">Case study</p>
          <h1>Project not found.</h1>
          <Link href="/#work" className="text-link">
            Back to work
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          Kristi
        </Link>
        <nav className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#resume">Resume</Link>
        </nav>
      </header>

      <article>
        <section className="case-hero">
          <Link href="/#work" className="back-link">
            Back to work
          </Link>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-details">
            <span>{project.year}</span>
            {project.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </section>

        <section className={`case-image project-image ${project.imageClass}`}>
          <div className="image-system image-system--large" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="case-content">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>{project.intro}</h2>
          </div>
          <div className="case-copy">
            <section>
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </section>
            <section>
              <h3>Approach</h3>
              <p>{project.approach}</p>
            </section>
            <section>
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </section>
          </div>
        </section>

        <section className="next-section">
          <p className="eyebrow">Next</p>
          <Link href="/#work">Return to selected work</Link>
        </section>
      </article>
    </main>
  );
}
