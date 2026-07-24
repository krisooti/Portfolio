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
    category: "Web Design",
    summary: "Protothon 2026 · 24-Hour UX Design Challenge",
    year: "2025",
    imageClass: "visual-northline",
    cardImage: {
      src: "/images/northline-card.png",
      alt: "Desktop mockup of the Haven designer discovery interface",
    },
    intro:
      "Northline explores how a travel app can feel refined and useful without overwhelming people with endless comparison states.",
    challenge:
      "Travel planning often collapses under too many open tabs, unclear tradeoffs, and mismatched recommendations.",
    approach:
      "I designed a linear planning model with editorial recommendations, simple constraints, and compact itinerary views.",
    outcome:
      "The concept turns a scattered planning process into a calm sequence of choices with visual rhythm and strong hierarchy.",
    details: ["Mobile flows", "Interaction design", "Prototype"],
    tags: ["Mobile App", "Product Design", "Accessibility"],
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
