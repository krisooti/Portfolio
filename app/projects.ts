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
};

export const projects: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    category: "Product Strategy",
    summary: "A research workspace redesigned for faster sensemaking.",
    year: "2026",
    imageClass: "visual-atlas",
    intro:
      "Atlas is a concept case study for a research product that helps teams gather notes, identify patterns, and move from raw insight to confident product decisions.",
    challenge:
      "The original experience asked users to jump between documents, tags, and dashboards before they could understand the story inside their research.",
    approach:
      "I reorganized the workflow around reading, clustering, and synthesis, then reduced the interface to a few durable surfaces that support deep focus.",
    outcome:
      "The final direction feels quieter, faster, and more legible, with a clearer path from observation to recommendation.",
    details: ["Research systems", "Information architecture", "UX writing"],
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
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
