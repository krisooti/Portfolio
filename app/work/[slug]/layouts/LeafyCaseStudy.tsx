import { HighlightText } from "../../../HighlightText";
import {
  BackToWorkLink,
  CaseSection,
  CaseStudyShell,
  CaseVideo,
  ProjectCaseIntro,
  ReturnToWorkSection,
  type ProjectCaseStudyProps,
} from "./CaseStudyParts";
import { LeafyPersonaCard, type LeafyPersona } from "./LeafyPersonaCard";

const leafyCaseSections = [
  { id: "overview", label: "Project Overview", number: "01" },
  { id: "context", label: "Context", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "initial-assumption", label: "Initial Assumption", number: "04" },
  { id: "user-definition", label: "User Definition", number: "05" },
  { id: "design-process", label: "Design Process", number: "06" },
  { id: "design-solution", label: "Meet PlantPal", number: "07" },
  { id: "final-solution", label: "Final Solution", number: "08" },
  {
    id: "results-learnings",
    label: "Results + Reflection",
    number: "09",
  },
];

const leafyDemoVideos = [
  {
    title: "Today's Task",
    caption: "Today's Task widget demo",
    src: "/videos/leafy-widget.mp4",
    poster: "/images/leafy-widget-poster.jpg",
    challenge:
      "Plant care often gets forgotten when users have to open an app to check what needs attention.",
    decision:
      "Surface the most urgent care action through a compact widget that fits into the user's daily routine.",
    outcome:
      "Users can quickly see what to do next and understand the priority before entering the full app.",
    highlights: [
      "Prioritizes one clear daily task",
      "Keeps care reminders visible",
      "Reduces the need to interpret raw plant data",
    ],
  },
  {
    title: "Plant Profile",
    caption: "Plant Profile data demo",
    src: "/videos/leafy-data.mp4",
    poster: "/images/leafy-data-poster.jpg",
    challenge:
      "Sensor readings can feel technical and difficult to translate into a real care decision.",
    decision:
      "Organize plant data into a readable profile that connects conditions, health status, and recommendation context.",
    outcome:
      "The profile helps users understand what is happening with their plant without turning the page into a dashboard.",
    highlights: [
      "Groups plant health signals in one place",
      "Explains status through readable context",
      "Supports confident care decisions",
    ],
  },
  {
    title: "AI Diagnosis",
    caption: "AI Diagnosis scan demo",
    src: "/videos/leafy-scan.mp4",
    poster: "/images/leafy-scan-poster.jpg",
    challenge:
      "When a plant looks unhealthy, users need help identifying the issue before choosing a treatment.",
    decision:
      "Create a guided scan flow that helps users capture symptoms and receive an understandable diagnosis.",
    outcome:
      "The AI diagnosis flow gives users a clearer path from uncertainty to action.",
    highlights: [
      "Guides users through symptom capture",
      "Turns visual issues into next steps",
      "Keeps diagnosis focused and readable",
    ],
  },
  {
    title: "AI Diagnosis Follow-up",
    caption: "AI Diagnosis follow-up demo",
    src: "/videos/leafy-scan2.mp4",
    poster: "/images/leafy-scan2-poster.jpg",
    challenge:
      "Diagnosis is only useful if the user knows what to do after receiving the result.",
    decision:
      "Connect diagnosis guidance to a follow-up care task so the recommendation becomes actionable.",
    outcome:
      "The experience closes the loop between AI support and practical plant care.",
    highlights: [
      "Connects diagnosis to care planning",
      "Makes follow-up action easy to track",
      "Keeps AI support tied to user control",
    ],
  },
];

const leafyDesignProcessCards = [
  {
    title: "Research",
    items: ["Interviews", "Market Analysis", "Competitive Analysis"],
  },
  {
    title: "Define",
    items: ["Personas", "User Journey", "Design Opportunity"],
  },
  {
    title: "Ideate",
    items: ["Information Architecture", "User Flow", "Wireframes"],
  },
  {
    title: "Prototype",
    items: ["Visual Design", "Design System", "Interactions"],
  },
  {
    title: "Validate",
    items: ["Usability Testing", "Iteration", "Final Prototype"],
  },
];

const leafyPlantPalMedia = [
  {
    title: "AI generated peony",
    src: "/images/leafy-character-gif.gif",
    type: "image",
  },
  {
    title: "AI generated Montestra",
    src: "/videos/leafy-character-growing.mov",
    type: "video",
  },
] as const;

const leafyPlantPalWidgetImage = {
  title: "PlantPal widget system",
  src: "/images/leafy-widget-system.png",
};

const leafyUserProfiles: LeafyPersona[] = [
  {
    type: "Primary User",
    title: "Curious Beginners",
    detail: "20–35 · First-time Owners",
    tabs: [
      {
        title: "Goals",
        items: ["Learn plant care", "Build confidence", "Keep plants alive"],
      },
      {
        title: "Behaviors",
        items: ["Searches online", "Forgets watering", "Wants simple guidance"],
      },
      {
        title: "Pain Points",
        items: [
          "Unsure what plants need",
          "Misses warning signs",
          "Information overload",
        ],
      },
    ],
  },
  {
    type: "Secondary User",
    title: "Growing Plant Enthusiasts",
    detail: "Multiple Plants · Basic Experience",
    tabs: [
      {
        title: "Goals",
        items: ["Manage multiple plants", "Improve plant health", "Save time"],
      },
      {
        title: "Behaviors",
        items: [
          "Checks plants often",
          "Tracks plant progress",
          "Uses digital tools",
        ],
      },
      {
        title: "Pain Points",
        items: [
          "Complex schedules",
          "Hard to diagnose issues",
          "Manual tracking",
        ],
      },
    ],
  },
];

function PlantPalDesignSolution() {
  return (
    <CaseSection
      id="design-solution"
      label="*AI Integration"
      title="Meet your personalized PlantPal, a friendly companion for everyday plant care."
    >
      <p className="m-0 w-full text-[12px] font-light leading-[1.7] text-[#5d5856]">
        PlantPal uses expressive characters and glanceable widgets to help users
        understand plant conditions, celebrate healthy growth, and take the
        right action without interpreting technical data.
      </p>

      <div className="mt-10 px-[clamp(22px,4vw,52px)] py-[clamp(28px,5vw,56px)]">
        {/* PlantPal character introduction */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start">
          <div>
            <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#4f7f64]">
              AI Plant Companion
            </p>

            <h3 className="mb-0 mt-3 font-serif text-[clamp(26px,3vw,32px)] font-medium leading-[1.18] tracking-[-0.03em] text-[#171717]">
              Plant health, made more approachable.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {leafyPlantPalMedia.map((item) => (
              <figure
                className="group m-0 rounded-[24px] border border-[#e6dfdb] bg-[#fffdfb] p-5 transition-all duration-[250ms] ease-out hover:border-[#d7e5d9] hover:bg-[#f5faf4] motion-safe:hover:-translate-y-[3px] motion-reduce:transition-none"
                key={item.title}
              >
                <div className="overflow-hidden rounded-[18px] bg-white">
                  {item.type === "video" ? (
                    <video
                      aria-label={item.title}
                      autoPlay
                      className="block h-auto w-full object-contain transition-transform duration-[250ms] ease-out motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      src={item.src}
                    />
                  ) : (
                    <img
                      alt={item.title}
                      className="block h-auto w-full object-contain transition-transform duration-[250ms] ease-out motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                      src={item.src}
                    />
                  )}
                </div>

                <figcaption className="pt-4">
                  <span className="block font-serif text-[18px] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-[16px] font-light leading-[1.55] text-[#6a6461]">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Interactive widget introduction */}
        <div>
          <div className="w-full">
            <h3 className="mb-0 mt-3 font-serif text-[clamp(26px,3vw,32px)] font-medium leading-[1.18] tracking-[-0.03em] text-[#171717]">
              Plant care at a glance.
            </h3>

            <p className="mb-0 mt-4 text-[16px] font-light leading-[1.7] text-[#5d5856]">
              Each widget translates a plant condition into a clear status and
              recommended next step.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <figure className="m-0 w-full">
              <img
                alt="Leafy PlantPal widget system showing care, temperature, light, thirst, and watering states"
                className="mx-auto block h-auto w-full object-contain"
                src={leafyPlantPalWidgetImage.src}
              />
            </figure>
          </div>
        </div>
      </div>
    </CaseSection>
  );
}

export function LeafyCaseStudy({
  project,
  content,
}: ProjectCaseStudyProps) {
  return (
    <CaseStudyShell sections={leafyCaseSections}>
      <article className="mx-auto w-full max-w-[960px] px-6 pt-[120px] md:px-8">
        <div className="min-w-0 pb-36 max-[560px]:pb-44">
          <BackToWorkLink />

          <ProjectCaseIntro project={project} content={content} />

          <div>
            <CaseSection
              id="context"
              label="Context"
              title="Plant owners know they need to care for their plants. The challenge is knowing when."
              titleAs="body"
              titleClassName="m-0 w-full text-[16px] font-light leading-[1.7] text-[#5d5856]"
            >
              <div>
                <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                  Key Pain Points
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {content.painPoints.map((point, index) => (
                    <article
                      className="min-h-[170px] rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] p-6"
                      key={point}
                    >
                      <span className="font-serif text-[28px] font-medium leading-none tracking-[-0.04em] text-[#c9c3bf]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mb-0 mt-8 w-full text-[16px] font-light leading-[1.7] text-[#5d5856]">
                        {point}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-12 w-full border-t border-[#e6dfdb] pt-10">
                <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                  Design Question
                </p>

                <p className="mb-0 mt-4 w-full font-serif text-[clamp(26px,3vw,32px)] font-medium leading-[1.28] tracking-[-0.025em] text-[#171717]">
                  How might we help plant owners understand what their plant needs and take the right action at the right time?
                </p>
              </div>
            </CaseSection>

            <CaseSection
              id="research"
              label="Research"
              title={content.researchHeading}
            >
              <p className="m-0 w-full text-[16px] font-light leading-[1.7] text-[#5d5856]">
                {content.researchCopy}
              </p>

              <div className="mt-12">
                <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                  Research Insights
                </p>

                <h3 className="mb-0 mt-3 font-serif text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                  Market growth and user pain pointed to a care-confidence gap.
                </h3>

                <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
                  <article className="grid min-h-[560px] grid-rows-[auto_auto_1fr_auto] gap-5 bg-white p-7 shadow-[0_18px_42px_rgba(17,17,17,0.045)]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-light uppercase tracking-[0.12em] text-[#4f7f64]">
                        Market Growth
                      </span>
                    </div>

                    <div>
                      <h4 className="m-0 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                        Indoor Plant Market Growth
                      </h4>

                      <p className="mb-0 mt-3 text-[12px] font-light uppercase tracking-[0.1em] text-[#8a8380]">
                        Projected growth from 2024 to 2032
                      </p>
                    </div>

                    <div className="flex items-end">
                      <svg
                        aria-label="Vertical bar chart showing indoor plant market growth from 20.68 billion to 30.25 billion dollars."
                        className="h-[240px] w-full"
                        role="img"
                        viewBox="0 0 360 240"
                      >
                        <line
                          x1="48"
                          x2="312"
                          y1="204"
                          y2="204"
                          stroke="#ded8d4"
                        />

                        <rect
                          x="96"
                          y="86"
                          width="68"
                          height="118"
                          fill="#dce8df"
                        />

                        <rect
                          x="196"
                          y="40"
                          width="68"
                          height="164"
                          fill="#4f7f64"
                        />

                        <text
                          x="130"
                          y="72"
                          textAnchor="middle"
                          fill="#4f7f64"
                          fontSize="14"
                        >
                          $20.68B
                        </text>

                        <text
                          x="230"
                          y="26"
                          textAnchor="middle"
                          fill="#4f7f64"
                          fontSize="14"
                        >
                          $30.25B
                        </text>

                        <text
                          x="130"
                          y="226"
                          textAnchor="middle"
                          fill="#8a8380"
                          fontSize="12"
                        >
                          2024
                        </text>

                        <text
                          x="230"
                          y="226"
                          textAnchor="middle"
                          fill="#8a8380"
                          fontSize="12"
                        >
                          2032
                        </text>
                      </svg>
                    </div>

                    <div className="border-t border-[#e6dfdb] pt-4">
                      <p className="m-0 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#4f7f64]">
                        $20.68B to $30.25B
                      </p>

                      <p className="mb-0 mt-4 w-full text-[16px] font-light leading-[1.55] text-[#5d5856]">
                        <span className="text-[#b7c9bd]">→</span> More people
                        are bringing plants into their homes.
                      </p>
                    </div>
                  </article>

                  <article className="grid min-h-[560px] grid-rows-[auto_auto_1fr_auto] gap-5 bg-white p-7 shadow-[0_18px_42px_rgba(17,17,17,0.045)]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-light uppercase tracking-[0.12em] text-[#4f7f64]">
                        70% Plant Loss
                      </span>
                    </div>

                    <div>
                      <h4 className="m-0 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                        Plant Care Challenges
                      </h4>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg
                        aria-label="Donut chart showing 70 percent of Gen Z plant owners have accidentally killed a plant."
                        className="h-[240px] w-[240px]"
                        role="img"
                        viewBox="0 0 240 240"
                      >
                        <circle
                          cx="120"
                          cy="120"
                          fill="none"
                          r="82"
                          stroke="#e9e4e0"
                          strokeWidth="24"
                        />

                        <circle
                          cx="120"
                          cy="120"
                          fill="none"
                          r="82"
                          stroke="#4f7f64"
                          strokeDasharray="361 155"
                          strokeLinecap="round"
                          strokeWidth="24"
                          transform="rotate(-90 120 120)"
                        />

                        <text
                          x="120"
                          y="114"
                          textAnchor="middle"
                          fill="#171717"
                          fontSize="38"
                          fontWeight="600"
                        >
                          70%
                        </text>

                        <text
                          x="120"
                          y="142"
                          textAnchor="middle"
                          fill="#8a8380"
                          fontSize="12"
                        >
                          PLANT LOSS
                        </text>
                      </svg>
                    </div>

                    <div className="border-t border-[#e6dfdb] pt-4">
                      <p className="m-0 font-serif text-lg font-medium leading-[1.35] text-[#2c2826]">
                        70% of Gen Z plant owners have accidentally killed a
                        plant.
                      </p>

                      <p className="mb-0 mt-4 w-full text-[16px] font-light leading-[1.55] text-[#5d5856]">
                        <span className="text-[#b7c9bd]">→</span> Plant care
                        feels stressful when users do not know what to do next.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </CaseSection>

            <CaseSection
              id="initial-assumption"
              label="Initial Assumption"
              title="Competitive analysis helped frame the first product direction."
            >
              <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-start">
                <figure className="m-0">
                  <img
                    className="block h-auto w-full object-contain"
                    src="/images/pa.png"
                    alt="Competitive analysis app icons for plant care products"
                  />

                  <figcaption className="mt-3 text-[11px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
                    Competitive app landscape
                  </figcaption>
                </figure>

                <div className="grid gap-10">
                  <div>
                    <p className="m-0 text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                      Common Patterns
                    </p>

                    <ul className="mt-5 grid list-none gap-3 p-0">
                      {[
                        "Watering reminders",
                        "Care schedules",
                        "Growth tracking",
                      ].map((item, index) => (
                        <li
                          className="grid grid-cols-[28px_1fr] items-start gap-3 text-[12px] font-light leading-[1.7] text-[#5d5856]"
                          key={item}
                        >
                          <span className="font-serif text-[16px] text-[#8a8380]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="m-0 text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                      Key Observation
                    </p>

                    <p className="mb-0 mt-4 text-[12px] font-light leading-[1.8] text-[#5d5856]">
                      Existing apps tell users when to care, but not what to do
                      when a plant&apos;s condition changes.
                    </p>
                  </div>

                  <div>
                    <p className="m-0 text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                      Initial Hypothesis
                    </p>

                    <p className="mb-0 mt-4 font-serif text-[clamp(26px,3vw,32px)] font-medium leading-[1.3] tracking-[-0.02em] text-[#171717]">
                      “The core problem is that users struggle to keep up with
                      their plant care schedule.”
                    </p>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection
              id="user-definition"
              label="User Definition"
              title="Defining the plant-care user."
            >
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {leafyUserProfiles.map((profile) => (
                  <LeafyPersonaCard
                    key={profile.type}
                    persona={profile}
                  />
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="design-process"
              label="Design Process"
              title={content.designHeading}
            >
              <figure className="m-0 overflow-hidden rounded-[24px] bg-[#F8F6F3] px-[clamp(22px,4vw,48px)] py-[clamp(24px,4vw,44px)]">
                <figcaption className="m-0 text-[11px] font-medium uppercase tracking-[0.16em] text-[#171717]">
                  Design Process
                </figcaption>

                <div className="relative mt-9 grid gap-6 md:grid-cols-5 md:gap-5">
                  <span
                    aria-hidden="true"
                    className="absolute left-[10%] right-[10%] top-[18px] hidden h-px bg-[#7C3AED]/55 md:block"
                  />

                  {leafyDesignProcessCards.map((stage, index) => (
                    <article
                      className="relative z-10 rounded-[18px] bg-[#F2EFEF] px-5 py-6"
                      key={stage.title}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED] font-serif text-[13px] font-medium text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mb-0 mt-5 text-[18px] font-semibold leading-[1.25] text-[#111111]">
                        {stage.title}
                      </h3>

                      <ul className="mt-4 grid list-none gap-2 p-0">
                        {stage.items.map((item) => (
                          <li
                            className="text-[12px] font-light leading-[1.45] text-[#66605d]"
                            key={item}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </figure>
            </CaseSection>

            <PlantPalDesignSolution />

            <CaseSection
              id="final-solution"
              label="Final Solution"
              title={content.solutionHeading}
            >
              <p className="m-0 w-full text-[16px] font-light leading-[1.7] text-[#5d5856]">
                {content.solutionCopy}
              </p>

              <div className="mt-10 grid gap-14">
                {leafyDemoVideos.map((demo) => (
                  <article
                    className="grid gap-8 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-start"
                    key={demo.src}
                  >
                    <CaseVideo
                      caption={demo.caption}
                      className="my-0"
                      frame="plain"
                      poster={demo.poster}
                      src={demo.src}
                      videoBackground="#F6F6F6"
                    />

                    <div className="w-full">
                      <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                        <HighlightText>{demo.title}</HighlightText>
                      </h3>

                      <dl className="mt-5 grid gap-4 rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] p-6">
                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Challenge
                          </dt>

                          <dd className="m-0 mt-1 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                            {demo.challenge}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Design Decision
                          </dt>

                          <dd className="m-0 mt-1 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                            {demo.decision}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Outcome
                          </dt>

                          <dd className="m-0 mt-1 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                            {demo.outcome}
                          </dd>
                        </div>
                      </dl>

                      <ul className="mt-5 grid list-none gap-2 p-0">
                        {demo.highlights.map((highlight) => (
                          <li
                            className="border-t border-[#e6dfdb] pt-2 text-[16px] font-light leading-[1.6] text-[#5d5856]"
                            key={highlight}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </CaseSection>

            <div className="pt-10">
              <CaseSection
                id="results-learnings"
                label="Results + Reflection"
                title="The final direction made plant care feel calmer and easier to act on."
              >
                <p className="m-0 w-full text-[16px] font-light leading-[1.7] text-[#5d5856]">
                  {content.resultsCopy}
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {content.reflectionCards.map((reflection) => (
                    <article
                      className="border-t border-[#e6dfdb] pt-5"
                      key={reflection.title}
                    >
                      <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                        <HighlightText>
                          {reflection.title}
                        </HighlightText>
                      </h3>

                      <p className="mb-0 mt-3 text-[16px] font-light leading-[1.7] text-[#5d5856]">
                        {reflection.body}
                      </p>
                    </article>
                  ))}
                </div>
              </CaseSection>
            </div>
          </div>

          <ReturnToWorkSection />
        </div>
      </article>
    </CaseStudyShell>
  );
}
