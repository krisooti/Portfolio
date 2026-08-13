import type { CaseStudyContent } from "./types";

const visuals = {
  researchBoard: {
    src: "/images/mindbridge-research-board.png",
    alt: "MindBridge research synthesis board with supervisor and supervisee interview notes",
  },
  matching: {
    src: "/images/tmind-ai-device-mockup.png",
    alt: "Tmind AI supervisor matching and profile screens",
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

export const tmindAiCaseStudy: CaseStudyContent = {
  meta: {
    duration: "5 months",
    role: "UX Researcher, Product Design, AI System",
    team: "3 Designers",
    sponsor: "Tmind AI",
  },
  painPoints: [
    "Referrals were inconsistent and hard to compare.",
    "Directories lacked context about supervisor fit.",
    "Users felt unsure why one supervisor was better than another.",
  ],
  processStages: [
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
  ],
  solutionScreens: [
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
  ],
  reflectionCards: [
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
  ],
  overview:
    "I worked as a lead UX designer and researcher on a three-person team. I contributed throughout the process, including user research, research synthesis, concept development, prototyping, usability testing, and final interface design. My primary focus was translating our research findings into the recommendation experience, particularly how we could make AI-generated matches more transparent and actionable.",
  overviewContribution: "",
  researchHeading: "Research clarified what users needed before trusting AI.",
  researchCopy:
    "To better understand what therapists-in-training need before trusting AI-generated recommendations, we conducted six 30-minute semi-structured interviews with three supervisors and trainees. We synthesized the findings using affinity mapping and thematic analysis, which directly informed our design decisions and usability testing.",
  researchCaption: "Affinity map and interview synthesis",
  researchImage: visuals.researchBoard,
  designHeading: "From research signals to a more trustworthy matching flow.",
  designTakeaway:
    "The most important shift was moving from “AI score” language to plain explanations that users could evaluate on their own terms.",
  solutionHeading: "A visual system for confident supervisor discovery.",
  solutionCopy:
    "The final solution supports a calm path from onboarding to match review, profile evaluation, saving, and messaging.",
  primaryVisual: visuals.matching,
  primaryVisualCaption: "Tmind AI supervisor matching experience",
  prototypeVideos: [
    {
      src: "/videos/tmind-filter.mp4",
      poster: "/images/tmind-filter-poster.jpg",
      caption: "Advanced supervisor filter demo",
    },
    {
      src: "/videos/tmind-request.mp4",
      poster: "/images/tmind-request-poster.jpg",
      caption: "Supervisor request flow demo",
    },
  ],
  supportingVisuals: [
    { caption: "Supervisor profile", image: visuals.profile },
    { caption: "Advanced filters", image: visuals.filters },
    { caption: "Messaging request", image: visuals.message },
  ],
  solutionTakeaway:
    "The interface helps users compare and act without rushing the decision, keeping the matching process transparent and human.",
  resultsCopy:
    "The final direction made the AI logic easier to understand and reduced uncertainty by supporting comparison before commitment.",
  extraResult: "Better exploration through saved supervisors and comparison.",
  resultsVisualCaption: "Detailed supervisor profile",
  resultsVisual: visuals.profile,
};
