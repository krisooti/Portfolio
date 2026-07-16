import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../../CategoryTag";
import { HighlightText } from "../../HighlightText";
import { CaseStudyNav } from "./CaseStudyNav";
import { getProject, projects } from "../../projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type CaseVisualImage = {
  src: string;
  alt: string;
};

const caseSections = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "Problem", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-process", label: "Design", number: "04" },
  { id: "final-solution", label: "Solution", number: "05" },
  { id: "results-learnings", label: "Learnings", number: "06" },
];

const painPoints = [
  "Referrals were inconsistent and hard to compare.",
  "Directories lacked context about supervisor fit.",
  "Users felt unsure why one supervisor was better than another.",
];

const processStages = [
  {
    title: "Research",
    body: "Interviewed therapists-in-training to understand how they search, evaluate, and build confidence before reaching out.",
    caption: "Interview synthesis and early opportunity areas",
  },
  {
    title: "Wireframes",
    body: "Mapped the journey from onboarding to supervisor discovery.",
    caption: "Low-fidelity discovery and profile flows",
  },
  {
    title: "Mid-Fidelity",
    body: "Explored recommendation layouts that clearly explained AI reasoning.",
    caption: "Mid-fidelity recommendation states",
  },
  {
    title: "Usability Testing",
    body: "Validated whether users understood recommendations and felt in control.",
    caption: "Task-based validation sessions",
  },
  {
    title: "Iteration",
    body: "Improved filtering, comparison, saved supervisors, and messaging based on feedback.",
    caption: "Revised matching and comparison model",
  },
  {
    title: "Final Design",
    body: "Created a transparent supervisor matching experience that encourages exploration before commitment.",
    caption: "Final recommendation and outreach experience",
  },
];

const solutionScreens = [
  {
    title: "Onboarding",
    body: "Personalized onboarding captures learning goals, supervision needs, preferred style, and constraints before recommendations appear.",
    rationale:
      "The flow gives users control from the beginning and helps AI matching feel grounded in their own priorities.",
    image: {
      src: "/images/mindbridge-ai-trust-note.png",
      alt: "MindBridge AI trust note explaining how supervisor matching works",
    },
  },
  {
    title: "AI Matching",
    body: "Recommendations explain the reasons behind each supervisor match through clear rationale and preference alignment.",
    rationale:
      "Instead of leading with compatibility scores, the interface explains why each suggestion may be useful.",
    image: {
      src: "/images/mindbridge-matching-screen.png",
      alt: "MindBridge clinical supervisor matching recommendations screen",
    },
  },
  {
    title: "Supervisor Profile",
    body: "Profiles organize specialties, supervision style, availability, credentials, and match reasons in a scannable hierarchy.",
    rationale:
      "Users can evaluate fit without jumping between fragmented directories or relying only on referrals.",
    image: {
      src: "/images/mindbridge-supervisor-profile.png",
      alt: "MindBridge supervisor profile screen for Dr. Sarah Jenkins",
    },
  },
  {
    title: "Comparison",
    body: "A side-by-side comparison helps users review supervisors across priorities before deciding who to contact.",
    rationale:
      "Comparison reduces uncertainty and supports informed decision-making before commitment.",
    image: {
      src: "/images/mindbridge-filter.png",
      alt: "MindBridge advanced filters for narrowing supervisor matches",
    },
  },
  {
    title: "Saved Supervisors",
    body: "Users can save supervisors while exploring, creating a low-pressure shortlist they can revisit later.",
    rationale:
      "Saving supports gradual exploration and prevents the matching process from feeling rushed.",
  },
  {
    title: "Messaging",
    body: "A focused messaging flow helps users request supervision with enough context to start the relationship clearly.",
    rationale:
      "The final step connects discovery to action while keeping the tone supportive and professional.",
    image: {
      src: "/images/mindbridge-message-typed.png",
      alt: "MindBridge typed message modal for contacting a supervisor",
    },
  },
];

const mindbridgeVisuals = {
  researchBoard: {
    src: "/images/mindbridge-research-board.png",
    alt: "MindBridge research synthesis board with supervisor and supervisee interview notes",
  },
  trustNote: {
    src: "/images/mindbridge-ai-trust-note.png",
    alt: "MindBridge AI trust note before starting supervisor matching",
  },
  matching: {
    src: "/images/mindbridge-matching-screen.png",
    alt: "MindBridge clinical supervisor matching recommendations screen",
  },
  filters: {
    src: "/images/mindbridge-filter.png",
    alt: "MindBridge advanced filters modal",
  },
  message: {
    src: "/images/mindbridge-message-typed.png",
    alt: "MindBridge message modal with a typed supervision request",
  },
  profile: {
    src: "/images/mindbridge-supervisor-profile.png",
    alt: "MindBridge supervisor profile page",
  },
};

const reflectionCards = [
  "Transparency over automation.",
  "Designing AI requires trust.",
  "Iteration is more valuable than first ideas.",
  "Research should guide every product decision.",
];

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

function ProjectRoadmap() {
  return (
    <ol className="project-roadmap" aria-label="Project roadmap">
      {processStages.map((stage, index) => (
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

  const isMindbridge = project.slug === "tmind-ai";

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
            <SectionLabel label="User Research" />

            <h1>
              <HighlightText>{project.title}</HighlightText>
            </h1>
            <p className="case-summary">{project.summary}</p>
            <dl className="case-meta-row">
              <div>
                <dt>Duration</dt>
                <dd>10 Weeks</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>UX Research, Product Design, AI System</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>3 Designers</dd>
              </div>
              <div>
                <dt>Sponsor</dt>
                <dd>Tmind AI</dd>
              </div>
            </dl>
            <p>
              {project.intro} I contributed across research, product design,
              usability testing, interaction flows, and storytelling for the
              final case study.
            </p>
            <ProjectRoadmap />
            <KeyTakeaway>
              The roadmap moved from research to final design with one constant
              goal: make AI recommendations understandable, adjustable, and
              trustworthy.
            </KeyTakeaway>
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="UX Research" />
            <h2>
              <HighlightText>{project.problem ?? project.challenge}</HighlightText>
            </h2>
            <p>{project.question}</p>
            <InsightPanel title="Pain points" items={painPoints} />
          </section>

          <section className="case-section" id="research">
            <SectionLabel label="User Testing" />
            <h2>
              <HighlightText>
                Research clarified what users needed before trusting AI.
              </HighlightText>
            </h2>
            <p>
              To better understand what therapists-in-training need before trusting
              AI-generated recommendations, we conducted six 30-minute
              semi-structured interviews with three supervisors and trainees.
              We synthesized the findings using affinity mapping and thematic
              analysis, which directly informed our design decisions and
              usability testing.
            </p>
            <ChipList items={project.researchMethods} label="Research methods" />
            <EditorialImage
              caption="Affinity map and interview synthesis"
              image={isMindbridge ? mindbridgeVisuals.researchBoard : undefined}
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
                From research signals to a more trustworthy matching flow.
              </HighlightText>
            </h2>

            <ChipList items={project.designDecisions} label="Key design decisions" />

            <KeyTakeaway>
              The most important shift was moving from “AI score” language to
              plain explanations that users could evaluate on their own terms.
            </KeyTakeaway>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                A visual system for confident supervisor discovery.
              </HighlightText>
            </h2>
            <p>
              The final solution supports a calm path from onboarding to match
              review, profile evaluation, saving, and messaging.
            </p>
            <EditorialImage
              caption="AI-powered supervisor recommendations"
              image={isMindbridge ? mindbridgeVisuals.matching : undefined}
            />
            <div className="supporting-visual-grid supporting-visual-grid--three">
              <EditorialImage
                caption="Supervisor profile"
                image={isMindbridge ? mindbridgeVisuals.profile : undefined}
              />
              <EditorialImage
                caption="Advanced filters"
                image={isMindbridge ? mindbridgeVisuals.filters : undefined}
              />
              <EditorialImage
                caption="Messaging request"
                image={isMindbridge ? mindbridgeVisuals.message : undefined}
              />
            </div>
            <div className="solution-stack" aria-label="Final solution details">
              {solutionScreens.map((screen, index) => (
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
              The interface helps users compare and act without rushing the
              decision, keeping the matching process transparent and human.
            </KeyTakeaway>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Key Learnings" />
            <h2>
              <HighlightText>What changed through the work.</HighlightText>
            </h2>
            <p>
              The final direction made the AI logic easier to understand and
              reduced uncertainty by supporting comparison before commitment.
            </p>
            <InsightPanel
              title="Results"
              items={[
                ...(project.impact ?? []),
                "Better exploration through saved supervisors and comparison.",
              ]}
            />
            <EditorialImage
              caption="Detailed supervisor profile"
              image={isMindbridge ? mindbridgeVisuals.profile : undefined}
            />
            <div className="learning-stack">
              {reflectionCards.map((reflection) => (
                <article className="learning-note" key={reflection}>
                  <h3>
                    <HighlightText>{reflection}</HighlightText>
                  </h3>
                  <p>
                    {reflection === "Transparency over automation."
                      ? "AI should provide meaningful guidance while keeping people in control of the final decision."
                      : reflection === "Designing AI requires trust."
                        ? "AI should explain and guide instead of quietly making decisions for people."
                        : reflection === "Iteration is more valuable than first ideas."
                          ? "Testing helped sharpen the matching rationale, comparison model, and overall flow."
                          : "The strongest design decisions came directly from user needs and stakeholder feedback."}
                  </p>
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
