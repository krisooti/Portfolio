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
    category: "Smart Plant Care",
    summary:
      "A personalized plant management app that turns sensor data into clear care actions.",
    year: "2026",
    imageClass: "visual-fieldnotes",
    intro:
      "Leafy is an AI and sensor-based plant care service that helps users understand what their plants need and take the right action at the right time.",
    challenge:
      "Plant owners often know basic care rules, but still struggle to remember when care is needed and interpret whether their plant's current environment is healthy.",
    approach:
      "I structured the experience around a simple Monitor, Understand, Recommend, Act flow so plant data could become timely care guidance.",
    outcome:
      "The final concept simplifies the path from plant status checking to personalized tasks, reminders, AI diagnosis, and community support.",
    details: ["Smart plant care", "AI diagnosis", "Mobile UX"],
    tags: ["Mobile UX", "AI", "IoT", "Product Design"],
    duration: "UX Case Study",
    role:
      "UX Research, Information Architecture, User Flow, Wireframing, UI/UX Design, Prototyping",
    team: "Solo Project",
    sponsor: "Smart Plant Care",
    problem:
      "Knowing how to care for a plant is not enough. Users need to know when to act.",
    question:
      "How might we help plant owners understand what their plant needs and take the right action at the right time?",
    researchMethods: [
      "User research",
      "Information architecture",
      "User flow mapping",
      "Wireframing",
    ],
    keyInsights: [
      "Users forget when plant care is needed if it is not part of their daily routine.",
      "Environmental and soil data needs to connect directly to recommended actions.",
      "Plant care should be personalized by plant type, environment, and current status.",
    ],
    designDecisions: [
      "Prioritized Today's Task as the clearest daily action surface.",
      "Designed a widget reminder so users can see the next care task without opening the app.",
      "Connected sensor data to current plant status and personalized recommendations.",
      "Created an AI diagnosis flow for symptoms such as discoloration, wilting, or pests.",
    ],
    finalSolution: [
      "Plant Profile",
      "Today's Task",
      "Smart Widget",
      "AI Diagnosis",
      "Community Support",
    ],
    impact: [
      "Simplified the flow from sensor data to recommended care actions.",
      "Reduced the burden of remembering watering, fertilizer, and follow-up tasks.",
      "Created a connected care system from plant status to reminders and diagnosis.",
    ],
    learning:
      "This project taught me that plant care UX should not simply show more data. Data should reduce decisions, not create more of them. The strongest value came from turning soil and environment signals into clear, timely actions users could trust.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
