export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  year: string;
  imageClass: string;
  intro: string;
  challenge: string;
  approach: string;
  outcome: string;
  details: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "tmind-ai",
    title: "Tmind AI",
    category: "AI Product Design",
    summary: "A minimal AI chat experience designed for clearer thinking.",
    year: "2026",
    imageClass: "visual-tmind",
    intro:
      "Tmind AI is a concept case study for an AI chat product that helps people turn scattered questions, notes, and ideas into clearer next steps.",
    challenge:
      "AI conversations can quickly become long, hard to scan, and disconnected from the user's original goal.",
    approach:
      "I focused the experience around a calm chat surface, lightweight prompts, readable response structure, and simple ways to revisit important ideas.",
    outcome:
      "The final direction makes AI feel more approachable and organized, supporting thoughtful conversations without adding visual noise.",
    details: ["AI chat experience", "Conversation design", "UX writing"],
    tags: ["UX Research", "Product Design", "AI"],
  },
  {
    slug: "northline",
    title: "Northline",
    category: "Mobile UX",
    summary: "A premium travel planning flow built around calm decisions.",
    year: "2025",
    imageClass: "visual-northline",
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
    slug: "fieldnotes",
    title: "Fieldnotes",
    category: "Service Design",
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
