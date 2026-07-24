import type { Project } from "../../projects";

export type CaseVisualImage = {
  src: string;
  alt: string;
};

export type ProcessStage = {
  title: string;
  body: string;
  caption: string;
};

type SolutionScreen = {
  title: string;
  body: string;
  rationale: string;
  image?: CaseVisualImage;
};

type ReflectionCard = {
  title: string;
  body: string;
};

export const caseSections = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "Problem", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-process", label: "Design", number: "04" },
  { id: "final-solution", label: "Solution", number: "05" },
  { id: "results-learnings", label: "Learnings", number: "06" },
];

const mindbridgePainPoints = [
  "Referrals were inconsistent and hard to compare.",
  "Directories lacked context about supervisor fit.",
  "Users felt unsure why one supervisor was better than another.",
];

const mindbridgeProcessStages: ProcessStage[] = [
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

const havenProcessStages: ProcessStage[] = [
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

const leafyProcessStages: ProcessStage[] = [
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

const mindbridgeSolutionScreens: SolutionScreen[] = [
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

const havenSolutionScreens: SolutionScreen[] = [
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

const leafySolutionScreens: SolutionScreen[] = [
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

const mindbridgeReflectionCards: ReflectionCard[] = [
  {
    title: "Transparency over automation.",
    body: "AI should provide meaningful guidance while keeping people in control of the final decision.",
  },
  {
    title: "Designing AI requires trust.",
    body: "AI should explain and guide instead of quietly making decisions for people.",
  },
  {
    title: "Iteration is more valuable than first ideas.",
    body: "Testing helped sharpen the matching rationale, comparison model, and overall flow.",
  },
  {
    title: "Research should guide every product decision.",
    body: "The strongest design decisions came directly from user needs and stakeholder feedback.",
  },
];

const havenReflectionCards: ReflectionCard[] = [
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

const leafyReflectionCards: ReflectionCard[] = [
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

const havenPainPoints = [
  "Inspiration platforms help homeowners collect ideas, but not evaluate designer fit.",
  "Pricing and project scope often feel unclear before outreach.",
  "Homeowners rely on referrals without enough compatibility or trust signals.",
];

const leafyPainPoints = [
  "Users have to remember when they last cared for a plant.",
  "Users have to interpret moisture, light, and environmental conditions.",
  "Users often notice problems only after they become visible.",
];

export function getCaseStudyContent(project: Project) {
  const isHaven = project.slug === "Haven";
  const isLeafy = project.slug === "Leafy";

  return {
    meta: {
      duration: project.duration ?? "10 Weeks",
      role: project.role ?? "UX Research, Product Design, AI System",
      team: project.team ?? "3 Designers",
      sponsor: project.sponsor ?? project.category,
    },
    painPoints: isHaven
      ? havenPainPoints
      : isLeafy
        ? leafyPainPoints
        : mindbridgePainPoints,
    processStages: isHaven
      ? havenProcessStages
      : isLeafy
        ? leafyProcessStages
        : mindbridgeProcessStages,
    solutionScreens: isHaven
      ? havenSolutionScreens
      : isLeafy
        ? leafySolutionScreens
        : mindbridgeSolutionScreens,
    reflectionCards: isHaven
      ? havenReflectionCards
      : isLeafy
        ? leafyReflectionCards
        : mindbridgeReflectionCards,
    overviewContribution: isHaven
      ? "My contributions included UX research, product strategy, user flows, wireframing, high-fidelity UI design, and the final presentation."
      : isLeafy
        ? "My role covered UX research, UX/UI design, information architecture, and prototyping, with a focus on plant management, IoT sensor data, AI recommendations, and mobile widgets."
        : "I contributed across research, product design, usability testing, interaction flows, and storytelling for the final case study.",
    researchHeading: isHaven
      ? "Research revealed a gap between inspiration and confident action."
      : isLeafy
        ? "Research showed that care breaks down when users have to decide what to do next."
        : "Research clarified what users needed before trusting AI.",
    researchCopy: isHaven
      ? "We analyzed Pinterest, Houzz, and Instagram to understand how homeowners move from inspiration to designer selection. The competitive analysis showed that existing platforms support discovery well, but offer weak comparison, pricing, and compatibility signals."
      : isLeafy
        ? "Research shifted the project from providing more plant-care information to providing more actionable, personalized guidance. Users needed a fast answer to what their plant needs now, not another dashboard of numbers to interpret."
        : "To better understand what therapists-in-training need before trusting AI-generated recommendations, we conducted six 30-minute semi-structured interviews with three supervisors and trainees. We synthesized the findings using affinity mapping and thematic analysis, which directly informed our design decisions and usability testing.",
    researchCaption: isHaven
      ? "Competitive analysis and designer-discovery opportunity areas"
      : isLeafy
        ? "Monitor, Understand, Recommend, Act strategy"
        : "Affinity map and interview synthesis",
    researchImage: isHaven || isLeafy ? undefined : mindbridgeVisuals.researchBoard,
    designHeading: isHaven
      ? "Turning scattered inspiration into a structured matching flow."
      : isLeafy
        ? "Designing a flow that turns plant data into action."
        : "From research signals to a more trustworthy matching flow.",
    designTakeaway: isHaven
      ? "The strongest direction was helping users translate visual taste, budget expectations, and trust signals into a confident designer shortlist."
      : isLeafy
        ? "The guiding principle became: don't just show plant data. Tell users what to do with it."
        : "The most important shift was moving from “AI score” language to plain explanations that users could evaluate on their own terms.",
    solutionHeading: isHaven
      ? "An AI-assisted path from inspiration to confident designer selection."
      : isLeafy
        ? "A connected care system from real-time status to timely action."
        : "A visual system for confident supervisor discovery.",
    solutionCopy: isHaven
      ? "Haven combines visual preference discovery, budget estimation, AI matching, and transparent designer profiles so homeowners can compare options before reaching out."
      : isLeafy
        ? "Leafy connects environmental data, soil signals, plant status, personalized recommendations, Today's Task, widget reminders, AI diagnosis, and community support into one continuous care experience."
        : "The final solution supports a calm path from onboarding to match review, profile evaluation, saving, and messaging.",
    primaryVisual: isHaven
      ? havenVisuals.hero
      : isLeafy
        ? undefined
        : mindbridgeVisuals.matching,
    primaryVisualCaption: isHaven
      ? "Haven designer discovery interface"
      : isLeafy
        ? "Leafy smart plant-care experience"
        : "AI-powered supervisor recommendations",
    supportingVisuals: [
      {
        caption: isHaven
          ? "Preference discovery"
          : isLeafy
            ? "Plant profile"
            : "Supervisor profile",
        image: isHaven || isLeafy ? undefined : mindbridgeVisuals.profile,
      },
      {
        caption: isHaven
          ? "Budget estimation"
          : isLeafy
            ? "Today's Task"
            : "Advanced filters",
        image: isHaven || isLeafy ? undefined : mindbridgeVisuals.filters,
      },
      {
        caption: isHaven
          ? "Designer profile"
          : isLeafy
            ? "AI diagnosis"
            : "Messaging request",
        image: isHaven || isLeafy ? undefined : mindbridgeVisuals.message,
      },
    ],
    solutionTakeaway: isHaven
      ? "The experience makes AI feel like a thoughtful guide by pairing recommendations with context users can understand and compare."
      : isLeafy
        ? "The final experience reduces interpretation by connecting Sensor Data → Plant Status → Recommendation → Today's Task → Reminder."
        : "The interface helps users compare and act without rushing the decision, keeping the matching process transparent and human.",
    resultsCopy: isHaven
      ? "The final direction helped transform an open-ended renovation search into a clearer path from taste to confident outreach."
      : isLeafy
        ? "The project evolved from a collection of plant-care features into a focused decision-support experience."
        : "The final direction made the AI logic easier to understand and reduced uncertainty by supporting comparison before commitment.",
    extraResult: isHaven
      ? "Created an AI-assisted matching concept grounded in user decision-making needs."
      : isLeafy
        ? "Designed a connected Sensor Data → Plant Status → Recommendation → Today's Task → Reminder flow."
        : "Better exploration through saved supervisors and comparison.",
    resultsVisualCaption: isHaven
      ? "Final Haven prototype direction"
      : isLeafy
        ? "Final Leafy care flow"
        : "Detailed supervisor profile",
    resultsVisual: isHaven
      ? havenVisuals.hero
      : isLeafy
        ? undefined
        : mindbridgeVisuals.profile,
  };
}
