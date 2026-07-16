import type { Metadata } from "next";
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
    body: "Mapped the core journey from preference setting to supervisor discovery, comparison, and outreach.",
    caption: "Low-fidelity discovery and profile flows",
  },
  {
    title: "Mid-fi",
    body: "Explored recommendation layouts that made AI rationale visible without turning the experience into a scorecard.",
    caption: "Mid-fidelity recommendation states",
  },
  {
    title: "Usability Testing",
    body: "Tested whether users understood why supervisors were recommended and whether they felt in control of next steps.",
    caption: "Task-based validation sessions",
  },
  {
    title: "Iteration",
    body: "Refined filters, saved supervisors, comparison details, and messaging based on user and stakeholder feedback.",
    caption: "Revised matching and comparison model",
  },
  {
    title: "Final Design",
    body: "Delivered a calm, transparent matching experience that supports exploration before commitment.",
    caption: "Final recommendation and outreach experience",
  },
];

const solutionScreens = [
  {
    title: "Onboarding",
    body: "Personalized onboarding captures learning goals, supervision needs, preferred style, and constraints before recommendations appear.",
    rationale:
      "The flow gives users control from the beginning and helps AI matching feel grounded in their own priorities.",
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
  },
  {
    title: "Comparison",
    body: "A side-by-side comparison helps users review supervisors across priorities before deciding who to contact.",
    rationale:
      "Comparison reduces uncertainty and supports informed decision-making before commitment.",
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
  },
];

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
            <SectionLabel label="Mobile UX" />
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
                <dd>UX Research, Product Design, Usability Testing</dd>
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
            <VisualPlaceholder label="Large hero mockup" />

            <div className="case-content-block">
              <h2>
                <HighlightText>
                  Building transparent AI matching for supervision.
                </HighlightText>
              </h2>
              <VisualPlaceholder label="Product overview screen" variant="phone" />
              <p>
                {project.intro} I contributed across research, product design,
                usability testing, interaction flows, and storytelling for the
                final case study.
              </p>
            </div>
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="UX Research" />
            <div className="case-content-block">
              <h2>
                <HighlightText>
                  {project.problem ?? project.challenge}
                </HighlightText>
              </h2>
              <VisualPlaceholder label="Fragmented discovery journey" variant="map" />
              <p>{project.question}</p>
            </div>
            <div className="pain-card-grid" aria-label="Pain points">
              {painPoints.map((painPoint, index) => (
                <article className="mini-card" key={painPoint}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{painPoint}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="research">
            <SectionLabel label="User Testing" />
            <div className="case-content-block">
              <h2>
                <HighlightText>
                  Research clarified what users needed before trusting AI.
                </HighlightText>
              </h2>
              <div className="research-visual-grid">
                <VisualPlaceholder label="Interview photos" variant="research" />
                <VisualPlaceholder label="Affinity map" variant="map" />
                <VisualPlaceholder label="Sticky notes" variant="research" />
                <VisualPlaceholder label="Research synthesis" variant="map" />
              </div>
              <div className="method-card-grid">
                {project.researchMethods?.map((method) => (
                  <article className="mini-card" key={method}>
                    <p>{method}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="insight-card-grid">
              {[
                ["User Control", project.keyInsights?.[0]],
                ["Transparency", project.keyInsights?.[1]],
                ["Low-pressure Exploration", project.keyInsights?.[2]],
              ].map(([title, body]) => (
                <article className="insight-card" key={title}>
                  <h3>
                    <HighlightText>{title}</HighlightText>
                  </h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="design-process">
            <SectionLabel label="Design Process" />
            <h2>
              <HighlightText>
                From research signals to a more trustworthy matching flow.
              </HighlightText>
            </h2>
            <div className="method-card-grid" aria-label="Key design decisions">
              {project.designDecisions?.map((decision) => (
                <article className="mini-card" key={decision}>
                  <p>{decision}</p>
                </article>
              ))}
            </div>
            <div className="process-timeline">
              {processStages.map((stage, index) => (
                <article className="process-step" key={stage.title}>
                  <VisualPlaceholder
                    label={`${String(index + 1).padStart(2, "0")} ${stage.caption}`}
                    variant="map"
                  />
                  <h3>
                    <HighlightText>{stage.title}</HighlightText>
                  </h3>
                  <p>{stage.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                A visual system for confident supervisor discovery.
              </HighlightText>
            </h2>
            <div className="solution-stack">
              {solutionScreens.map((screen, index) => (
                <article
                  className={`solution-row ${
                    index % 2 === 1 ? "solution-row--reverse" : ""
                  }${screen.image ? "" : " solution-row--text-only"}`}
                  key={screen.title}
                >
                  {screen.image ? (
                    <VisualPlaceholder
                      label={`${screen.title} screen`}
                      variant="screen"
                      image={screen.image}
                    />
                  ) : null}
                  <div>
                    <h3>
                      <HighlightText>{screen.title}</HighlightText>
                    </h3>
                    <p>{screen.body}</p>
                    <p>{screen.rationale}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Key Learnings" />
            <div className="results-grid">
              <div>
                <h2>
                  <HighlightText>Results</HighlightText>
                </h2>
                <ul className="result-list bullet-list">
                  {project.impact?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  <li>Better exploration through saved supervisors and comparison.</li>
                </ul>
              </div>
              <div>
                <h2>
                  <HighlightText>Learnings</HighlightText>
                </h2>
                <ul className="reflection-grid bullet-list">
                  {reflectionCards.map((reflection) => (
                    <li key={reflection}>
                      <strong>{reflection}</strong>
                      <span>
                        {reflection === "Transparency over automation."
                          ? "AI should provide meaningful guidance while keeping people in control of the final decision."
                          : reflection === "Designing AI requires trust."
                            ? "AI should explain and guide instead of quietly making decisions for people."
                            : reflection === "Iteration is more valuable than first ideas."
                              ? "Testing helped sharpen the matching rationale, comparison model, and overall flow."
                              : "The strongest design decisions came directly from user needs and stakeholder feedback."}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
