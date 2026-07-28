import type { CaseStudyContent } from "./types";

const visuals = {
  hero: {
    src: "/images/leafy.png",
    alt: "Leafy AI-powered smart plant care mobile app",
  },
};

export const leafyCaseStudy: CaseStudyContent = {
  meta: {
    duration: "Mobile UX Case Study",
    role: "UX Research, UX/UI Design, Information Architecture, Prototyping",
    team: "Individual Project",
    sponsor: "Smart Plant Care",
  },
  painPoints: [
    "Users have to remember when they last cared for a plant.",
    "Users have to interpret moisture, light, and environmental conditions.",
    "Users often notice problems only after they become visible.",
  ],
  processStages: [
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
  ],
  solutionScreens: [
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
  ],
  reflectionCards: [
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
  ],
  overviewContribution:
    "My role covered UX research, UX/UI design, information architecture, and prototyping, with a focus on plant management, IoT sensor data, AI recommendations, and mobile widgets.",
  researchHeading:
    "Research showed that care breaks down when users have to decide what to do next.",
  researchCopy:
    "Research shifted the project from providing more plant-care information to providing more actionable, personalized guidance. Users needed a fast answer to what their plant needs now, not another dashboard of numbers to interpret.",
  researchCaption: "Monitor, Understand, Recommend, Act strategy",
  designHeading: "Designing a flow that turns plant data into action.",
  designTakeaway:
    "The guiding principle became: don't just show plant data. Tell users what to do with it.",
  solutionHeading:
    "A connected care system from real-time status to timely action.",
  solutionCopy:
    "Leafy connects environmental data, soil signals, plant status, personalized recommendations, Today's Task, widget reminders, AI diagnosis, and community support into one continuous care experience.",
  primaryVisual: visuals.hero,
  primaryVisualCaption: "Leafy smart plant-care experience",
  supportingVisuals: [
    { caption: "Plant profile" },
    { caption: "Today's Task" },
    { caption: "AI diagnosis" },
  ],
  solutionTakeaway:
    "The final experience reduces interpretation by connecting Sensor Data → Plant Status → Recommendation → Today's Task → Reminder.",
  resultsCopy:
    "The project evolved from a collection of plant-care features into a focused decision-support experience.",
  extraResult:
    "Designed a connected Sensor Data → Plant Status → Recommendation → Today's Task → Reminder flow.",
  resultsVisualCaption: "Final Leafy care flow",
  resultsVisual: visuals.hero,
};
