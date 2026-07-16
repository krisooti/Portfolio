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
    title: project ? `${project.title} - Kristi Kim` : "Case Study - Kristi Kim",
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
            Kristi Kim
          </Link>
          <nav className="nav-links">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="mailto:krisooti08@gmail.com">Contact</Link>
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
          Kristi Kim
        </Link>
        <nav className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="mailto:krisooti08@gmail.com">Contact</Link>
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

        {project.problem ? (
          <section className="case-study-detail">
            <div>
              <p className="eyebrow">Problem</p>
              <h2>{project.problem}</h2>
              {project.question ? <p>{project.question}</p> : null}
            </div>
          </section>
        ) : null}

        {project.researchMethods || project.keyInsights ? (
          <section className="case-study-detail case-study-detail--split">
            <div>
              <p className="eyebrow">Research & Analysis</p>
              <h2>Understanding what users need from AI recommendations.</h2>
            </div>
            <div className="case-copy">
              {project.researchMethods ? (
                <section>
                  <h3>Methods</h3>
                  <ul className="case-list">
                    {project.researchMethods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {project.keyInsights ? (
                <section>
                  <h3>Key Insights</h3>
                  <ul className="case-list">
                    {project.keyInsights.map((insight) => (
                      <li key={insight}>{insight}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </section>
        ) : null}

        {project.designDecisions ? (
          <section className="case-study-detail case-study-detail--split">
            <div>
              <p className="eyebrow">Design Process</p>
              <h2>Research insights guided four key design decisions.</h2>
              <p>
                Multiple iterations were validated through usability testing and
                stakeholder feedback.
              </p>
            </div>
            <ul className="case-list">
              {project.designDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.finalSolution ? (
          <section className="case-study-detail case-study-detail--split">
            <div>
              <p className="eyebrow">Final Solution</p>
              <h2>Transparent matching that supports user control.</h2>
              <p>
                Instead of emphasizing compatibility scores, the interface
                explains why supervisors are recommended, helping users build
                confidence in their decisions.
              </p>
            </div>
            <ul className="case-list">
              {project.finalSolution.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.impact || project.learning ? (
          <section className="case-study-detail case-study-detail--split">
            <div>
              <p className="eyebrow">Results & Learnings</p>
              <h2>Transparency over automation.</h2>
              {project.learning ? <p>{project.learning}</p> : null}
            </div>
            {project.impact ? (
              <section>
                <h3>Impact</h3>
                <ul className="case-list">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </section>
        ) : null}

        <section className="next-section">
          <p className="eyebrow">Next</p>
          <Link href="/#work">Return to selected work</Link>
        </section>
      </article>
    </main>
  );
}
