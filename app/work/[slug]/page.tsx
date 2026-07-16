import type { Metadata } from "next";
import Link from "next/link";
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
}: {
  label: string;
  variant?: "screen" | "research" | "map" | "phone";
}) {
  return (
    <div className={`case-visual case-visual--${variant}`}>
      <div className="visual-frame" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>{label}</p>
    </div>
  );
}

function SectionLabel({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <p className="case-section-label">
      <span>{number}</span>
      {label}
    </p>
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

      <article className="case-study-shell">
        <CaseStudyNav sections={caseSections} />

        <div className="case-study-main">
          <section className="case-hero case-section is-visible" id="overview">
            <Link href="/#work" className="back-link">
              Back to work
            </Link>
            <SectionLabel label="Overview" number="01" />
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.category}</p>
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

            <div className="case-section-grid">
              <div>
                <h2>Building transparent AI matching for supervision.</h2>
                <p>
                  {project.intro} I contributed across research, product design,
                  usability testing, interaction flows, and storytelling for the
                  final case study.
                </p>
              </div>
              <VisualPlaceholder label="Product overview screen" variant="phone" />
            </div>
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="Problem" number="02" />
            <div className="case-section-grid">
              <div>
                <h2>{project.problem ?? project.challenge}</h2>
                <p>{project.question}</p>
              </div>
              <VisualPlaceholder label="Fragmented discovery journey" variant="map" />
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
            <SectionLabel label="Research" number="03" />
            <div className="case-section-grid">
              <div>
                <h2>Research clarified what users needed before trusting AI.</h2>
                <div className="method-card-grid">
                  {project.researchMethods?.map((method) => (
                    <article className="mini-card" key={method}>
                      <p>{method}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="research-visual-grid">
                <VisualPlaceholder label="Interview photos" variant="research" />
                <VisualPlaceholder label="Affinity map" variant="map" />
                <VisualPlaceholder label="Sticky notes" variant="research" />
                <VisualPlaceholder label="Research synthesis" variant="map" />
              </div>
            </div>

            <div className="insight-card-grid">
              {[
                ["User Control", project.keyInsights?.[0]],
                ["Transparency", project.keyInsights?.[1]],
                ["Low-pressure Exploration", project.keyInsights?.[2]],
              ].map(([title, body]) => (
                <article className="insight-card" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="design-process">
            <SectionLabel label="Design Process" number="04" />
            <h2>From research signals to a more trustworthy matching flow.</h2>
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
                  <div className="process-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.body}</p>
                    <VisualPlaceholder label={stage.caption} variant="map" />
                    <small>{stage.caption}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Final Solution" number="05" />
            <h2>A visual system for confident supervisor discovery.</h2>
            <div className="solution-stack">
              {solutionScreens.map((screen, index) => (
                <article
                  className={`solution-row ${
                    index % 2 === 1 ? "solution-row--reverse" : ""
                  }`}
                  key={screen.title}
                >
                  <VisualPlaceholder label={`${screen.title} screen`} variant="phone" />
                  <div>
                    <h3>{screen.title}</h3>
                    <p>{screen.body}</p>
                    <p>{screen.rationale}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Results & Learnings" number="06" />
            <div className="results-grid">
              <div>
                <h2>Results</h2>
                <div className="result-list">
                  {project.impact?.map((item) => (
                    <article className="mini-card" key={item}>
                      <p>{item}</p>
                    </article>
                  ))}
                  <article className="mini-card">
                    <p>Better exploration through saved supervisors and comparison.</p>
                  </article>
                </div>
              </div>
              <div>
                <h2>Learnings</h2>
                <div className="reflection-grid">
                  {reflectionCards.map((reflection) => (
                    <article className="reflection-card" key={reflection}>
                      <h3>{reflection}</h3>
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
              </div>
            </div>
          </section>

          <section className="next-section">
            <p className="eyebrow">Next</p>
            <Link href="/#work">Return to selected work</Link>
          </section>
        </div>
      </article>
    </main>
  );
}
