export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  year: string;
  imageClass: string;
  cardImage?: {
    src: string;
    alt: string;
  };
  intro: string;
  challenge: string;
  approach: string;
  outcome: string;
  details: string[];
  tags: string[];
  duration?: string;
  role?: string;
  team?: string;
  sponsor?: string;
  problem?: string;
  question?: string;
  researchMethods?: string[];
  keyInsights?: string[];
  designDecisions?: string[];
  finalSolution?: string[];
  impact?: string[];
  learning?: string;
};

export const projects: Project[] = [
  {
    slug: "tmind-ai",
    title: "AI-Powered Supervisor Matching for Therapists-in-Training",
    category: "Tmind AI",
    summary:
      "An AI-powered platform that helps therapists-in-training find supervisors aligned with their learning goals.",
    year: "2026",
    imageClass: "visual-tmind",
    intro:
      "MindBridge helps therapists-in-training discover supervisors aligned with their learning goals while maintaining transparency and user control throughout the matching process.",
    challenge:
      "Therapists-in-training often rely on referrals and fragmented directories to find supervisors, making the process time-consuming and difficult to evaluate.",
    approach:
      "Research insights guided personalized onboarding, transparent AI recommendations, comparison tools, and a messaging flow for requesting supervision.",
    outcome:
      "The final experience helps users browse, compare, save, and contact supervisors with clearer rationale behind each recommendation.",
    details: ["10 weeks", "3 designers", "Sponsor: Tmind AI"],
    tags: ["UX Research", "Product Design", "AI", "Usability Testing"],
    problem:
      "Therapists-in-training often rely on referrals and fragmented directories to find supervisors, making the process time-consuming and difficult to evaluate.",
    question:
      "How might we help users confidently find the right supervisor while building trust in AI recommendations?",
    researchMethods: [
      "User interviews",
      "Affinity mapping",
      "Thematic analysis",
      "Usability testing",
    ],
    keyInsights: [
      "Users wanted control over AI decisions.",
      "Users needed clear explanations behind recommendations.",
      "Users preferred to browse, compare, and save supervisors before committing.",
    ],
    designDecisions: [
      "Personalized onboarding to capture user preferences.",
      "Transparent AI recommendations with matching rationale.",
      "Comparison and filtering tools for informed decision-making.",
      "Messaging flow to request supervision seamlessly.",
    ],
    finalSolution: [
      "Personalized onboarding",
      "AI-powered supervisor recommendations",
      "Supervisor comparison and filtering",
      "Saved supervisors",
      "Detailed profiles",
      "Messaging and supervision requests",
    ],
    impact: [
      "Improved clarity and trust in AI recommendations.",
      "Simplified supervisor discovery through personalized matching.",
      "Reduced uncertainty by supporting comparison before commitment.",
    ],
    learning:
      "This project reinforced that successful AI experiences prioritize transparency over automation. Rather than making decisions for users, AI should provide meaningful guidance while keeping people in control. Continuous user feedback was essential in shaping a more trustworthy and intuitive experience.",
  },
  {
    slug: "Haven",
    title: "Haven",
    category: "Protothon 2026",
    summary: "Helping homeowners confidently find the right interior designer.",
    year: "2026",
    imageClass: "visual-northline",
    cardImage: {
      src: "/images/northline-card.png",
      alt: "Desktop mockup of the Haven designer discovery interface",
    },
    intro:
      "During Protothon 2026, our team designed Haven, an AI-assisted platform that helps homeowners discover designers based on style preference, budget, and project compatibility instead of relying on scattered portfolios and referrals.",
    challenge:
      "While inspiration platforms make discovering beautiful interiors easy, they fail to support the decision-making process.",
    approach:
      "We translated visual taste into design language, introduced early budget estimation, and created transparent designer profiles that support comparison before first contact.",
    outcome:
      "Within 24 hours, we designed an end-to-end AI-assisted designer matching experience, built an interactive prototype, and presented a focused product strategy grounded in user needs.",
    details: ["24 hours", "3 UX designers", "Protothon 2026"],
    tags: ["UX Research", "Product Strategy", "Wireframing", "High-Fidelity UI"],
    duration: "24 Hours",
    role:
      "UX Research, Product Strategy, User Flow, Wireframing, High-fidelity UI Design, Presentation",
    team: "3 UX Designers",
    sponsor: "Protothon 2026",
    problem:
      "Users know what they like visually, but struggle to understand which designer fits their style, what the work may cost, and whether they can trust a designer with their home.",
    question:
      "How might we help homeowners confidently evaluate and connect with the right interior designer before reaching out?",
    researchMethods: [
      "Secondary research",
      "Competitive analysis",
      "Persona development",
      "Journey mapping",
    ],
    keyInsights: [
      "Homeowners arrive prepared with inspiration, but lack tools to evaluate fit.",
      "Budget uncertainty prevents many users from contacting designers.",
      "Users need compatibility signals beyond beautiful portfolios.",
    ],
    designDecisions: [
      "Image-based onboarding to translate visual taste into design language.",
      "Early budget estimation using ZIP code, home type, and renovation scope.",
      "AI designer matching based on style, budget, project experience, and compatibility.",
      "Transparent designer profiles with reviews, specialties, budgets, and communication style.",
    ],
    finalSolution: [
      "Preference discovery",
      "Budget estimation",
      "AI designer matching",
      "Transparent designer profiles",
    ],
    impact: [
      "Defined a focused product strategy within a 24-hour sprint.",
      "Designed a complete user journey from inspiration to designer contact.",
      "Produced a high-fidelity interactive prototype for presentation.",
    ],
    learning:
      "This sprint reinforced that users rarely struggle to find inspiration. The real challenge begins when they need enough confidence to take action. AI should reduce uncertainty by explaining recommendations while still letting people compare and make the final decision.",
  },
  {
    slug: "Leafy",
    title: "Leafy",
    category: "Mobile App Design",
    summary: "A client portal with fewer interruptions and clearer handoffs.",
    year: "2025",
    imageClass: "visual-fieldnotes",
    intro:
      "Fieldnotes is a service portal concept for creative teams managing approvals, updates, and shared project materials.",
    challenge:
      "Clients needed clarity on what was ready, what needed attention, and what had already been approved without reading long status updates.",
    approach:
      "I shaped the portal around a strong activity timeline, focused approval cards, and lightweight documentation moments.",
    outcome:
      "The result creates a calmer operating rhythm for both the client and the delivery team.",
    details: ["Service blueprint", "Portal UX", "Design system"],
    tags: ["Healthcare", "Service Design", "UX Research"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
