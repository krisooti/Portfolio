import type { CaseStudyContent } from "./types";

const visuals = {
  hero: {
    src: "/images/haven-device-mockup.png",
    alt: "Haven desktop and tablet designer matching mockups",
  },
  competitiveAnalysis: {
    src: "/images/ca.png",
    alt: "Competitive analysis comparing Haven with Houzz, Instagram, and other platforms",
  },
  protothonGraphic: {
    src: "/images/haven-protothon.svg",
    alt: "Protothon 2026 graphic illustration",
  },
};

export const havenCaseStudy: CaseStudyContent = {
  meta: {
    duration: "24 Hours",
    role: "UX Research, UX Design Lead",
    team: "2 UX Designers",
    sponsor: "Protothon 2026",
  },

  painPoints: [
    "Inspiration platforms help homeowners collect ideas, but not evaluate designer fit.",
    "Pricing and project scope often feel unclear before outreach.",
    "Homeowners rely on referrals without enough compatibility or trust signals.",
  ],

  processStages: [
    {
      title: "Research",
      body:
        "Analyzed existing platforms to understand where homeowners lose confidence.",
      caption: "Competitive analysis",
    },
    {
      title: "Define",
      body:
        "Focused the problem around three confidence gaps: taste, budget, and designer fit.",
      caption: "Problem definition",
    },
    {
      title: "User Flow",
      body:
        "Mapped the journey from visual preference discovery to budget planning, designer matching, and outreach.",
      caption: "End-to-end user flow",
    },
    {
      title: "Prototyping",
      body:
        "Moved from early wireframes into high-fidelity screens, iterating on the core matching experience within the 24-hour sprint.",
      caption: "Wireframes to interactive prototype",
    },
  ],

  solutionScreens: [
    {
      title: "Preference Discovery",
      body:
        "Homeowners select interior images they love, allowing Haven to translate visual taste into a clearer aesthetic profile.",
      rationale:
        "Visual selection removes the pressure to understand interior design terminology.",
    },
    {
      title: "Budget Estimation",
      body:
        "Users provide location, home type, and project scope to establish realistic budget expectations early.",
      rationale:
        "Early cost context reduces uncertainty before users begin contacting designers.",
    },
    {
      title: "AI Designer Matching",
      body:
        "Haven recommends designers based on style, budget, project experience, and compatibility.",
      rationale:
        "AI narrows the search while keeping homeowners in control of the final decision.",
    },
    {
      title: "Transparent Designer Profiles",
      body:
        "Profiles surface relevant projects, typical budgets, specialties, reviews, and compatibility signals.",
      rationale:
        "Homeowners can evaluate fit beyond portfolio aesthetics.",
    },
  ],

  reflectionCards: [
    {
      title: "Design for decision-making, not discovery.",
      body:
        "Homeowners were not short on inspiration. The bigger opportunity was helping them confidently act on it.",
    },
    {
      title: "AI should reduce uncertainty.",
      body:
        "Matching became more useful when recommendations explained why a designer might fit rather than relying on an unexplained score.",
    },
    {
      title: "Speed demands prioritization.",
      body:
        "The 24-hour sprint pushed us to prioritize the moments that mattered most: preference discovery, budget, matching, and evaluation.",
    },
  ],

  overviewLogo: visuals.protothonGraphic,

  overviewContribution:
    "My contributions included UX research, product strategy, user flows, prototyping, high-fidelity UI design, and the final presentation.",

  researchHeading:
    "Existing platforms support inspiration, but not the full decision-making journey.",

  researchCopy:
    "We compared existing platforms to identify where homeowners still needed support when moving from inspiration to renovation planning.",

  researchCaption: "Competitive feature analysis",

  researchImage: visuals.competitiveAnalysis,

  designHeading:
    "Turning scattered inspiration into a structured path forward.",

  designTakeaway:
    "We focused the experience around helping homeowners understand their taste, establish budget expectations, and evaluate designer compatibility.",

  solutionHeading:
    "From inspiration to confident designer selection.",

  solutionCopy:
    "Haven combines visual preference discovery, budget estimation, AI matching, and transparent designer profiles into one connected experience.",

  primaryVisual: visuals.hero,

  primaryVisualCaption: "Haven designer discovery interface",

  supportingVisuals: [
    {
      caption: "Preference discovery",
    },
    {
      caption: "Budget estimation",
    },
    {
      caption: "Designer matching",
    },
  ],

  /* Prototype videos */
  prototypeVideos: [
    {
      src: "/videos/haven1.mp4",
      poster: "/images/haven-demo-01-poster.jpg",
      caption: "Haven prototype demo 01",
    },
    {
      src: "/videos/haven2.mp4",
      poster: "/images/haven-demo-02-poster.jpg",
      caption: "Haven prototype demo 02",
    },
  ],

  solutionTakeaway:
    "Haven turns fragmented renovation decisions into a guided experience while keeping homeowners in control.",

  resultsCopy:
    "Within 24 hours, our team transformed a fragmented renovation journey into an end-to-end product concept.",

  extraResult:
    "Delivered a high-fidelity interactive prototype and final Protothon presentation.",

  resultsVisualCaption: "Final Haven prototype direction",

  resultsVisual: visuals.hero,
};
