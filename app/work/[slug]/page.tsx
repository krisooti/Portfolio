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

const havenProcessStages = [
  {
    title: "Research",
    body: "Analyzed inspiration and designer-discovery platforms to understand where homeowners lose confidence.",
    caption: "Competitive research across Pinterest, Houzz, and Instagram",
  },
  {
    title: "Opportunity",
    body: "Identified the gap between collecting inspiration and choosing a designer who fits style, budget, and project needs.",
    caption: "Problem framing and product opportunity",
  },
  {
    title: "User Flow",
    body: "Mapped a journey from visual preference discovery to budget context, designer matches, and outreach.",
    caption: "End-to-end matching flow",
  },
  {
    title: "Wireframes",
    body: "Sketched the core onboarding, matching, and designer profile screens under a 24-hour timeline.",
    caption: "Low-fidelity concept structure",
  },
  {
    title: "High-Fidelity",
    body: "Built a polished prototype that made designer fit, budget, and compatibility easier to compare.",
    caption: "Final visual design and prototype",
  },
  {
    title: "Presentation",
    body: "Presented an AI-assisted matching concept grounded in user needs and clear decision support.",
    caption: "Protothon 2026 final pitch",
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

const havenSolutionScreens = [
  {
    title: "Preference Discovery",
    body: "Homeowners select interior images they love, allowing the product to translate taste into a clearer aesthetic profile.",
    rationale:
      "This removes the pressure to know design vocabulary and gives the matching system more meaningful signals.",
  },
  {
    title: "Budget Estimation",
    body: "A simple estimator uses ZIP code, home type, and renovation scope to help users understand realistic cost ranges earlier.",
    rationale:
      "Budget clarity reduces uncertainty before users invest time contacting designers.",
  },
  {
    title: "AI Designer Matching",
    body: "The matching experience recommends designers based on style similarity, budget alignment, project experience, and compatibility.",
    rationale:
      "AI supports the shortlist, while users can still browse, compare, and choose for themselves.",
  },
  {
    title: "Transparent Designer Profiles",
    body: "Designer profiles highlight previous projects, typical budgets, specialties, verified reviews, and communication style.",
    rationale:
      "Trust signals help homeowners evaluate fit beyond beautiful portfolio images.",
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

const havenVisuals = {
  hero: {
    src: "/images/northline-card.png",
    alt: "Desktop mockup of the Haven designer discovery interface",
  },
};

const reflectionCards = [
  "Transparency over automation.",
  "Designing AI requires trust.",
  "Iteration is more valuable than first ideas.",
  "Research should guide every product decision.",
];

const havenReflectionCards = [
  {
    title: "Design for decision-making, not discovery.",
    body: "Homeowners were not short on inspiration. The bigger need was help turning taste, budget, and trust signals into a confident next step.",
  },
  {
    title: "AI should reduce uncertainty.",
    body: "The matching concept worked best when AI explained why a designer might fit, rather than asking users to trust a hidden score.",
  },
  {
    title: "Speed demands prioritization.",
    body: "A 24-hour sprint pushed us to focus on the moments that mattered most: onboarding, matching, comparison, and contact.",
  },
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

function ProjectRoadmap({
  stages,
}: {
  stages: typeof processStages;
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
  const isHaven = project.slug === "Haven";
  const caseMeta = {
    duration: project.duration ?? "10 Weeks",
    role: project.role ?? "UX Research, Product Design, AI System",
    team: project.team ?? "3 Designers",
    sponsor: project.sponsor ?? project.category,
  };
  const activePainPoints = isHaven
    ? [
        "Inspiration platforms help homeowners collect ideas, but not evaluate designer fit.",
        "Pricing and project scope often feel unclear before outreach.",
        "Homeowners rely on referrals without enough compatibility or trust signals.",
      ]
    : painPoints;
  const activeProcessStages = isHaven ? havenProcessStages : processStages;
  const activeSolutionScreens = isHaven ? havenSolutionScreens : solutionScreens;
  const activeReflectionCards = isHaven
    ? havenReflectionCards
    : reflectionCards.map((reflection) => ({
        title: reflection,
        body:
          reflection === "Transparency over automation."
            ? "AI should provide meaningful guidance while keeping people in control of the final decision."
            : reflection === "Designing AI requires trust."
              ? "AI should explain and guide instead of quietly making decisions for people."
              : reflection === "Iteration is more valuable than first ideas."
                ? "Testing helped sharpen the matching rationale, comparison model, and overall flow."
                : "The strongest design decisions came directly from user needs and stakeholder feedback.",
      }));
  const overviewContribution = isHaven
    ? "My contributions included UX research, product strategy, user flows, wireframing, high-fidelity UI design, and the final presentation."
    : "I contributed across research, product design, usability testing, interaction flows, and storytelling for the final case study.";
  const researchCopy = isHaven
    ? "We analyzed Pinterest, Houzz, and Instagram to understand how homeowners move from inspiration to designer selection. The competitive analysis showed that existing platforms support discovery well, but offer weak comparison, pricing, and compatibility signals."
    : "To better understand what therapists-in-training need before trusting AI-generated recommendations, we conducted six 30-minute semi-structured interviews with three supervisors and trainees. We synthesized the findings using affinity mapping and thematic analysis, which directly informed our design decisions and usability testing.";
  const primaryVisual = isHaven ? havenVisuals.hero : mindbridgeVisuals.matching;

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
            <SectionLabel label={project.category} />

            <h1>
              <HighlightText>{project.title}</HighlightText>
            </h1>
            <p className="case-summary">{project.summary}</p>
            <dl className="case-meta-row">
              <div>
                <dt>Duration</dt>
                <dd>{caseMeta.duration}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{caseMeta.role}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{caseMeta.team}</dd>
              </div>
              <div>
                <dt>Sponsor</dt>
                <dd>{caseMeta.sponsor}</dd>
              </div>
            </dl>
            <p>{project.intro} {overviewContribution}</p>
            <ProjectRoadmap stages={activeProcessStages} />
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="UX Research" />
            <h2>
              <HighlightText>{project.problem ?? project.challenge}</HighlightText>
            </h2>
            <p>{project.question}</p>
            <InsightPanel title="Pain points" items={activePainPoints} />
          </section>

          <section className="case-section" id="research">
            <SectionLabel label="User Testing" />
            <h2>
              <HighlightText>
                {isHaven
                  ? "Research revealed a gap between inspiration and confident action."
                  : "Research clarified what users needed before trusting AI."}
              </HighlightText>
            </h2>
            <p>{researchCopy}</p>
            <ChipList items={project.researchMethods} label="Research methods" />
            <EditorialImage
              caption={
                isHaven
                  ? "Competitive analysis and designer-discovery opportunity areas"
                  : "Affinity map and interview synthesis"
              }
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
                {isHaven
                  ? "Turning scattered inspiration into a structured matching flow."
                  : "From research signals to a more trustworthy matching flow."}
              </HighlightText>
            </h2>

            <ChipList items={project.designDecisions} label="Key design decisions" />

            <KeyTakeaway>
              {isHaven
                ? "The strongest direction was helping users translate visual taste, budget expectations, and trust signals into a confident designer shortlist."
                : "The most important shift was moving from “AI score” language to plain explanations that users could evaluate on their own terms."}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                {isHaven
                  ? "An AI-assisted path from inspiration to confident designer selection."
                  : "A visual system for confident supervisor discovery."}
              </HighlightText>
            </h2>
            <p>
              {isHaven
                ? "Haven combines visual preference discovery, budget estimation, AI matching, and transparent designer profiles so homeowners can compare options before reaching out."
                : "The final solution supports a calm path from onboarding to match review, profile evaluation, saving, and messaging."}
            </p>
            <EditorialImage
              caption={
                isHaven
                  ? "Haven designer discovery interface"
                  : "AI-powered supervisor recommendations"
              }
              image={primaryVisual}
            />
            <div className="supporting-visual-grid supporting-visual-grid--three">
              <EditorialImage
                caption={isHaven ? "Preference discovery" : "Supervisor profile"}
                image={isMindbridge ? mindbridgeVisuals.profile : undefined}
              />
              <EditorialImage
                caption={isHaven ? "Budget estimation" : "Advanced filters"}
                image={isMindbridge ? mindbridgeVisuals.filters : undefined}
              />
              <EditorialImage
                caption={isHaven ? "Designer profile" : "Messaging request"}
                image={isMindbridge ? mindbridgeVisuals.message : undefined}
              />
            </div>
            <div className="solution-stack" aria-label="Final solution details">
              {activeSolutionScreens.map((screen, index) => (
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
              {isHaven
                ? "The experience makes AI feel like a thoughtful guide by pairing recommendations with context users can understand and compare."
                : "The interface helps users compare and act without rushing the decision, keeping the matching process transparent and human."}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Key Learnings" />
            <h2>
              <HighlightText>What changed through the work.</HighlightText>
            </h2>
            <p>
              {isHaven
                ? "The final direction helped transform an open-ended renovation search into a clearer path from taste to confident outreach."
                : "The final direction made the AI logic easier to understand and reduced uncertainty by supporting comparison before commitment."}
            </p>
            <InsightPanel
              title="Results"
              items={[
                ...(project.impact ?? []),
                isHaven
                  ? "Created an AI-assisted matching concept grounded in user decision-making needs."
                  : "Better exploration through saved supervisors and comparison.",
              ]}
            />
            <EditorialImage
              caption={isHaven ? "Final Haven prototype direction" : "Detailed supervisor profile"}
              image={isHaven ? havenVisuals.hero : mindbridgeVisuals.profile}
            />
            <div className="learning-stack">
              {activeReflectionCards.map((reflection) => (
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
