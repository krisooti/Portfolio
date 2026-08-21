export type Project = {
  slug: string;
  title: string;
  category: string;
  overview: string;
  imageClass: string;
  cardImage?: {
    src: string;
    alt: string;
  };
  intro: string;
  challenge: string;
  problem?: string;
  tags: string[];
  duration?: string;
  role?: string;
  team?: string;
  sponsor?: string;
  question?: string;
};

export const projects: Project[] = [
  {
    slug: "tmind-ai",
    title: "AI-Powered Supervisor Matching for Therapists-in-Training",
    category: "Tmind AI",
    overview:
      "An AI-powered platform that helps therapists-in-training find supervisors aligned with their learning goals.",
    imageClass: "visual-tmind",
    cardImage: {
      src: "/images/tmind.png",
      alt: "Tmind AI supervisor matching and profile screens",
    },
    intro:
      "MindBridge helps therapists-in-training discover supervisors aligned with their learning goals while maintaining transparency and user control throughout the matching process.",
    challenge:
      "Therapists-in-training often rely on referrals and fragmented directories to find supervisors, making the process time-consuming and difficult to evaluate.",
    tags: ["UX Research", "Product Design", "AI"],
    problem:
      "Tmind AI is an AI-powered psychotherapy training platform that supports therapists-in-training through simulated role-play, personalized feedback, and professional development tools.",
    question:
      "How might we help users confidently find the right supervisor while building trust in AI recommendations?",
  },
  {
    slug: "Haven",
    title: "Haven",
    category: "Protothon 2026",
    overview: "Helping homeowners confidently find the right interior designer.",
    imageClass: "visual-northline",
    cardImage: {
      src: "/images/haven-group-4.png",
      alt: "Haven desktop and tablet designer matching mockups",
    },
    intro:
      "During Protothon 2026, our team designed Haven, an AI-assisted platform that helps homeowners discover designers based on style preference, budget, and project compatibility instead of relying on scattered portfolios and referrals.",
    challenge:
      "While inspiration platforms make discovering beautiful interiors easy, they fail to support the decision-making process.",
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
  },
  {
    slug: "Leafy",
    title: "Leafy",
    category: "Smart Plant Care",
    overview: "Turning real-time plant data into timely, personalized care.",
    imageClass: "visual-fieldnotes",
    cardImage: {
      src: "/images/leafy.png",
      alt: "Leafy AI-powered smart plant care mobile app",
    },
    intro:
      "Leafy is a mobile plant management experience that helps plant owners understand their plants' health and take the right action at the right time. The experience transforms plant care into clear, actionable guidance through personalized recommendations, environmental insights, and timely reminders. I led the UX research, information architecture, UX/UI design, and interactive prototyping from concept to final prototype.",
    challenge:
      "Plant owners know they need to care for their plants. The challenge is knowing when.",
    tags: ["Mobile UX", "AI", "UX Research", "Product Design"],
    duration: "6 Months",
    role: "UX Researcher, UX Designer",
    team: "Individual Project",
    sponsor: "Smart Plant Care",
    problem:
      "Plant owners know they need to care for their plants. The challenge is knowing when.",
    question:
      "How might we help plant owners understand what their plant needs and take the right action at the right time?",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
