import type { CaseStudyContent } from "./types";

const visuals = {
  hero: {
    src: "/images/haven-device-mockup.png",
    alt: "Haven desktop and tablet designer matching mockups",
  },
};

export const havenCaseStudy: CaseStudyContent = {
  meta: {
    duration: "24 Hours",
    role:
      "UX Research, Product Strategy, User Flow, Wireframing, High-fidelity UI Design, Presentation",
    team: "3 UX Designers",
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
  ],
  solutionScreens: [
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
  ],
  reflectionCards: [
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
  ],
  overviewContribution:
    "My contributions included UX research, product strategy, user flows, wireframing, high-fidelity UI design, and the final presentation.",
  researchHeading: "Research revealed a gap between inspiration and confident action.",
  researchCopy:
    "We analyzed Pinterest, Houzz, and Instagram to understand how homeowners move from inspiration to designer selection. The competitive analysis showed that existing platforms support discovery well, but offer weak comparison, pricing, and compatibility signals.",
  researchCaption: "Competitive analysis and designer-discovery opportunity areas",
  designHeading: "Turning scattered inspiration into a structured matching flow.",
  designTakeaway:
    "The strongest direction was helping users translate visual taste, budget expectations, and trust signals into a confident designer shortlist.",
  solutionHeading: "An AI-assisted path from inspiration to confident designer selection.",
  solutionCopy:
    "Haven combines visual preference discovery, budget estimation, AI matching, and transparent designer profiles so homeowners can compare options before reaching out.",
  primaryVisual: visuals.hero,
  primaryVisualCaption: "Haven designer discovery interface",
  supportingVisuals: [
    { caption: "Preference discovery" },
    { caption: "Budget estimation" },
    { caption: "Designer profile" },
  ],
  solutionTakeaway:
    "The experience makes AI feel like a thoughtful guide by pairing recommendations with context users can understand and compare.",
  resultsCopy:
    "The final direction helped transform an open-ended renovation search into a clearer path from taste to confident outreach.",
  extraResult:
    "Created an AI-assisted matching concept grounded in user decision-making needs.",
  resultsVisualCaption: "Final Haven prototype direction",
  resultsVisual: visuals.hero,
};
