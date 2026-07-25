import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../../CategoryTag";
import { HighlightText } from "../../HighlightText";
import { CaseStudyNav } from "./CaseStudyNav";
import { getProject, projects } from "../../projects";
import {
  caseSections,
  getCaseStudyContent,
  type CaseVisualImage,
  type ProcessStage,
} from "./caseStudies";

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

function VisualPlaceholder({
  label,
  variant = "screen",
  image,
}: {
  label: string;
  variant?: "screen" | "research" | "map" | "phone";
  image?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className={`case-visual case-visual--${variant}`}>
      <div className={`visual-frame${image ? " visual-frame--image" : ""}`}>
        {image ? (
          <img src={image.src} alt={image.alt} />
        ) : (
          <>
            <span />
            <span />
            <span />
          </>
        )}
      </div>
      <p>{label}</p>
    </div>
  );
}

function EditorialImage({
  caption,
  image,
  variant = "screen",
}: {
  caption: string;
  image?: CaseVisualImage;
  variant?: "screen" | "research" | "map" | "phone";
}) {
  return (
    <figure className="editorial-image">
      <VisualPlaceholder label={caption} variant={variant} image={image} />
    </figure>
  );
}

function ChipList({
  items = [],
  label,
}: {
  items?: string[];
  label: string;
}) {
  return (
    <div className="case-chip-group" aria-label={label}>
      {items.map((item) => (
        <span className="case-chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function InsightPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="case-insight-panel">
      <h3>
        <HighlightText>{title}</HighlightText>
      </h3>
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="case-key-takeaway">
      <span>Key takeaway</span>
      <p>{children}</p>
    </div>
  );
}

function ProjectRoadmap({
  stages,
}: {
  stages: ProcessStage[];
}) {
  return (
    <ol className="project-roadmap" aria-label="Project roadmap">
      {stages.map((stage, index) => (
        <li className="project-roadmap-step" key={stage.title}>
          <span className="project-roadmap-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>
            <HighlightText>{stage.title}</HighlightText>
          </h3>
          <p>{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}

function SectionLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="case-section-label">
      <CategoryTag>{label}</CategoryTag>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="site-shell">
        <header className="site-nav" aria-label="Primary navigation">
          <Link href="/" className="brand-link">
            <HighlightText>Kristi Kim</HighlightText>
          </Link>
          <nav className="nav-links">
            <Link href="/#work">
              <HighlightText>Work</HighlightText>
            </Link>
            <Link href="/about">
              <HighlightText>About</HighlightText>
            </Link>
            <Link
              href="https://drive.google.com/file/d/136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link resume-link"
              aria-label="Open Kristi's resume in a new tab"
            >
              <HighlightText>Resume ↗</HighlightText>
            </Link>
            <Link href="mailto:krisooti08@gmail.com">
              <HighlightText>Contact</HighlightText>
            </Link>
          </nav>
        </header>
        <section className="case-hero">
          <p className="eyebrow">Case study</p>
          <h1>
            <HighlightText>Project not found.</HighlightText>
          </h1>
          <Link href="/#work" className="text-link">
            <HighlightText>Back to work</HighlightText>
          </Link>
        </section>
      </main>
    );
  }

  const content = getCaseStudyContent(project);

  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <HighlightText>Kristi Kim</HighlightText>
        </Link>
        <nav className="nav-links">
          <Link href="/#work">
            <HighlightText>Work</HighlightText>
          </Link>
          <Link href="/about">
            <HighlightText>About</HighlightText>
          </Link>
          <Link
            href="https://drive.google.com/file/d/136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link resume-link"
            aria-label="Open Kristi's resume in a new tab"
          >
            <HighlightText>Resume ↗</HighlightText>
          </Link>
          <Link href="mailto:krisooti08@gmail.com">
            <HighlightText>Contact</HighlightText>
          </Link>
        </nav>
      </header>

      <article className="case-study-shell">
        <CaseStudyNav sections={caseSections} />

        <div className="case-study-main">
          <section className="case-hero case-section is-visible" id="overview">
            <Link href="/#work" className="back-link">
              <HighlightText>Back to work</HighlightText>
            </Link>
            <SectionLabel label={project.category} />

            <h1>
              <HighlightText>{project.title}</HighlightText>
            </h1>
            <p className="case-summary">{project.summary}</p>
            <dl className="case-meta-row">
              <div>
                <dt>Duration</dt>
                <dd>{content.meta.duration}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{content.meta.role}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{content.meta.team}</dd>
              </div>
              <div>
                <dt>Sponsor</dt>
                <dd>{content.meta.sponsor}</dd>
              </div>
            </dl>
            <p>{project.intro} {content.overviewContribution}</p>
            <ProjectRoadmap stages={content.processStages} />
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="UX Research" />
            <h2>
              <HighlightText>{project.problem ?? project.challenge}</HighlightText>
            </h2>
            <p>{project.question}</p>
            <InsightPanel title="Pain points" items={content.painPoints} />
          </section>

          <section className="case-section" id="research">
            <SectionLabel label="User Testing" />
            <h2>
              <HighlightText>
                {content.researchHeading}
              </HighlightText>
            </h2>
            <p>{content.researchCopy}</p>
            <ChipList items={project.researchMethods} label="Research methods" />
            <EditorialImage
              caption={content.researchCaption}
              image={content.researchImage}
              variant="map"
            />
            <InsightPanel
              title="Key insights"
              items={[
                project.keyInsights?.[0] ?? "Users wanted control over AI decisions.",
                project.keyInsights?.[1] ??
                  "Users needed clear explanations behind recommendations.",
                project.keyInsights?.[2] ??
                  "Users preferred to browse, compare, and save supervisors before committing.",
              ]}
            />
          </section>

          <section className="case-section" id="design-process">
            <SectionLabel label="Design Process" />
            <h2>
              <HighlightText>
                {content.designHeading}
              </HighlightText>
            </h2>

            <ChipList items={project.designDecisions} label="Key design decisions" />

            <KeyTakeaway>
              {content.designTakeaway}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                {content.solutionHeading}
              </HighlightText>
            </h2>
            <p>{content.solutionCopy}</p>
            <EditorialImage
              caption={content.primaryVisualCaption}
              image={content.primaryVisual}
            />
            <div className="supporting-visual-grid supporting-visual-grid--three">
              {content.supportingVisuals.map((visual) => (
                <EditorialImage
                  key={visual.caption}
                  caption={visual.caption}
                  image={visual.image}
                />
              ))}
            </div>
            <div className="solution-stack" aria-label="Final solution details">
              {content.solutionScreens.map((screen, index) => (
                <article
                  className="solution-row"
                  key={screen.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="solution-row-copy">
                    <h3>
                      <HighlightText>{screen.title}</HighlightText>
                    </h3>
                    <p>{screen.body}</p>
                    <p>{screen.rationale}</p>
                  </div>
                </article>
              ))}
            </div>
            <KeyTakeaway>
              {content.solutionTakeaway}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Key Learnings" />
            <h2>
              <HighlightText>What changed through the work.</HighlightText>
            </h2>
            <p>
              {content.resultsCopy}
            </p>
            <InsightPanel
              title="Results"
              items={[
                ...(project.impact ?? []),
                content.extraResult,
              ]}
            />
            <EditorialImage
              caption={content.resultsVisualCaption}
              image={content.resultsVisual}
            />
            <div className="learning-stack">
              {content.reflectionCards.map((reflection) => (
                <article className="learning-note" key={reflection.title}>
                  <h3>
                    <HighlightText>{reflection.title}</HighlightText>
                  </h3>
                  <p>{reflection.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="next-section">
            <p className="eyebrow">Next</p>
            <Link href="/#work">
              <HighlightText>Return to selected work</HighlightText>
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
