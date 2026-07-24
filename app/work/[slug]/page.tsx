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

const leafyProcessStages = [
  {
    title: "Research",
    body: "Learned that users missed care routines because they struggled to know when their specific plant needed attention.",
    caption: "Plant-care behavior and pain-point synthesis",
  },
  {
    title: "Strategy",
    body: "Shifted the product from providing more plant-care information to delivering actionable, personalized guidance.",
    caption: "Don't just show plant data. Tell users what to do with it.",
  },
  {
    title: "User Flow",
    body: "Mapped a flow from Widget and Home to Today's Task, Plant Profile, current status, recommendation, and completed care.",
    caption: "Monitor, understand, recommend, act",
  },
  {
    title: "Data Model",
    body: "Connected low soil moisture, environmental readings, and plant status to clear recommendations and follow-up tasks.",
    caption: "Sensor data to actionable care",
  },
  {
    title: "Widget",
    body: "Designed a lightweight widget so time-sensitive care tasks could fit naturally into the user's daily routine.",
    caption: "Care without opening the app",
  },
  {
    title: "Final Flow",
    body: "Created a connected decision-support experience that tells users what their plant needs today, and why.",
    caption: "Here is what your plant needs today",
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

const leafySolutionScreens = [
  {
    title: "Plant Profile",
    body: "The Plant Profile brings together environmental information, soil data, current plant status, and recommended care in one place.",
    rationale:
      "Instead of presenting light, temperature, humidity, moisture, pH, and nutrient levels as isolated metrics, the interface translates them into an understandable health status.",
  },
  {
    title: "Today's Task",
    body: "Today's Task prioritizes what needs attention, such as Water Monstera Today when soil moisture is below the recommended range.",
    rationale:
      "Showing both the action and reason helps users understand why the recommendation matters.",
  },
  {
    title: "Smart Widget",
    body: "The widget brings today's care task, upcoming reminders, quick plant status, and priority alerts directly to the home screen.",
    rationale:
      "Plant care becomes part of the user's existing routine instead of requiring them to remember to open another app.",
  },
  {
    title: "AI Diagnosis",
    body: "When users notice an unusual change, they can select a plant, scan symptoms, view a diagnosis, receive treatment guidance, and create a follow-up task.",
    rationale:
      "AI Diagnosis adds support when regular monitoring is no longer enough.",
  },
  {
    title: "Community",
    body: "For problems without a straightforward answer, users can search posts, share plant conditions, ask questions, and receive advice from other plant owners.",
    rationale:
      "Community creates a secondary support path when users need help beyond AI recommendations.",
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

const leafyVisuals = {
  hero: undefined,
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

const leafyReflectionCards = [
  {
    title: "Data should reduce decisions.",
    body: "The strongest experience came from translating complex real-time data into clear, timely, and actionable guidance.",
  },
  {
    title: "Action matters more than information.",
    body: "The project became clearer when it moved from “Here is your plant data” to “Here is what your plant needs today, and why.”",
  },
  {
    title: "Care should fit existing routines.",
    body: "Widgets and proactive reminders reduced the effort required to keep monitoring plants over time.",
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
  const isLeafy = project.slug === "Leafy";
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
    : isLeafy
      ? [
          "Users have to remember when they last cared for a plant.",
          "Users have to interpret moisture, light, and environmental conditions.",
          "Users often notice problems only after they become visible.",
        ]
    : painPoints;
  const activeProcessStages = isHaven
    ? havenProcessStages
    : isLeafy
      ? leafyProcessStages
      : processStages;
  const activeSolutionScreens = isHaven
    ? havenSolutionScreens
    : isLeafy
      ? leafySolutionScreens
      : solutionScreens;
  const activeReflectionCards = isHaven
    ? havenReflectionCards
    : isLeafy
      ? leafyReflectionCards
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
    : isLeafy
      ? "My role covered UX research, UX/UI design, information architecture, and prototyping, with a focus on plant management, IoT sensor data, AI recommendations, and mobile widgets."
    : "I contributed across research, product design, usability testing, interaction flows, and storytelling for the final case study.";
  const researchCopy = isHaven
    ? "We analyzed Pinterest, Houzz, and Instagram to understand how homeowners move from inspiration to designer selection. The competitive analysis showed that existing platforms support discovery well, but offer weak comparison, pricing, and compatibility signals."
    : isLeafy
      ? "Research shifted the project from providing more plant-care information to providing more actionable, personalized guidance. Users needed a fast answer to what their plant needs now, not another dashboard of numbers to interpret."
    : "To better understand what therapists-in-training need before trusting AI-generated recommendations, we conducted six 30-minute semi-structured interviews with three supervisors and trainees. We synthesized the findings using affinity mapping and thematic analysis, which directly informed our design decisions and usability testing.";
  const primaryVisual = isHaven
    ? havenVisuals.hero
    : isLeafy
      ? leafyVisuals.hero
      : mindbridgeVisuals.matching;

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
                  : isLeafy
                    ? "Research showed that care breaks down when users have to decide what to do next."
                  : "Research clarified what users needed before trusting AI."}
              </HighlightText>
            </h2>
            <p>{researchCopy}</p>
            <ChipList items={project.researchMethods} label="Research methods" />
            <EditorialImage
              caption={
                isHaven
                  ? "Competitive analysis and designer-discovery opportunity areas"
                  : isLeafy
                    ? "Monitor, Understand, Recommend, Act strategy"
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
                  : isLeafy
                    ? "Designing a flow that turns plant data into action."
                  : "From research signals to a more trustworthy matching flow."}
              </HighlightText>
            </h2>

            <ChipList items={project.designDecisions} label="Key design decisions" />

            <KeyTakeaway>
              {isHaven
                ? "The strongest direction was helping users translate visual taste, budget expectations, and trust signals into a confident designer shortlist."
                : isLeafy
                  ? "The guiding principle became: don't just show plant data. Tell users what to do with it."
                : "The most important shift was moving from “AI score” language to plain explanations that users could evaluate on their own terms."}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                {isHaven
                  ? "An AI-assisted path from inspiration to confident designer selection."
                  : isLeafy
                    ? "A connected care system from real-time status to timely action."
                  : "A visual system for confident supervisor discovery."}
              </HighlightText>
            </h2>
            <p>
              {isHaven
                ? "Haven combines visual preference discovery, budget estimation, AI matching, and transparent designer profiles so homeowners can compare options before reaching out."
                : isLeafy
                  ? "Leafy connects environmental data, soil signals, plant status, personalized recommendations, Today's Task, widget reminders, AI diagnosis, and community support into one continuous care experience."
                : "The final solution supports a calm path from onboarding to match review, profile evaluation, saving, and messaging."}
            </p>
            <EditorialImage
              caption={
                isHaven
                  ? "Haven designer discovery interface"
                  : isLeafy
                    ? "Leafy smart plant-care experience"
                  : "AI-powered supervisor recommendations"
              }
              image={primaryVisual}
            />
            <div className="supporting-visual-grid supporting-visual-grid--three">
              <EditorialImage
                caption={
                  isHaven
                    ? "Preference discovery"
                    : isLeafy
                      ? "Plant profile"
                      : "Supervisor profile"
                }
                image={isMindbridge ? mindbridgeVisuals.profile : undefined}
              />
              <EditorialImage
                caption={
                  isHaven
                    ? "Budget estimation"
                    : isLeafy
                      ? "Today's Task"
                      : "Advanced filters"
                }
                image={isMindbridge ? mindbridgeVisuals.filters : undefined}
              />
              <EditorialImage
                caption={
                  isHaven
                    ? "Designer profile"
                    : isLeafy
                      ? "AI diagnosis"
                      : "Messaging request"
                }
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
                : isLeafy
                  ? "The final experience reduces interpretation by connecting Sensor Data → Plant Status → Recommendation → Today's Task → Reminder."
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
                : isLeafy
                  ? "The project evolved from a collection of plant-care features into a focused decision-support experience."
                : "The final direction made the AI logic easier to understand and reduced uncertainty by supporting comparison before commitment."}
            </p>
            <InsightPanel
              title="Results"
              items={[
                ...(project.impact ?? []),
                isHaven
                  ? "Created an AI-assisted matching concept grounded in user decision-making needs."
                  : isLeafy
                    ? "Designed a connected Sensor Data → Plant Status → Recommendation → Today's Task → Reminder flow."
                  : "Better exploration through saved supervisors and comparison.",
              ]}
            />
            <EditorialImage
              caption={
                isHaven
                  ? "Final Haven prototype direction"
                  : isLeafy
                    ? "Final Leafy care flow"
                    : "Detailed supervisor profile"
              }
              image={
                isHaven
                  ? havenVisuals.hero
                  : isLeafy
                    ? leafyVisuals.hero
                    : mindbridgeVisuals.profile
              }
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
