import { HighlightText } from "../../../HighlightText";
import { caseSections } from "../caseStudies";
import {
  BackToWorkLink,
  CaseSection,
  CaseStudyShell,
  CaseVideo,
  ProjectCaseIntro,
  ReturnToWorkSection,
  type ProjectCaseStudyProps,
} from "./CaseStudyParts";

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

const competitorApps = ["01", "02", "03", "04"];

const leafyProcessTimeline = [
  {
    title: "Research",
    body: "Reviewed plant-care habits, market growth, and beginner pain points.",
  },
  {
    title: "Insights",
    body: "Identified that users needed clear next actions, not more raw data.",
  },
  {
    title: "Ideation",
    body: "Explored care reminders, sensor summaries, diagnosis, and widget touchpoints.",
  },
  {
    title: "Prototype",
    body: "Built a mobile flow that connects plant status to timely care decisions.",
  },
];

export function LeafyCaseStudy({ project, content }: ProjectCaseStudyProps) {
  return (
    <CaseStudyShell sections={caseSections}>
      <article className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,72px)] pt-[120px]">
        <div className="min-w-0 pb-36 max-[560px]:pb-44">
          <BackToWorkLink />
          <ProjectCaseIntro project={project} content={content} />

          <div>
            <CaseSection
              id="problem"
              label="Problem"
              title={project.problem ?? project.challenge}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <p className="m-0 max-w-[760px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                  {project.challenge}
                </p>
                <p className="m-0 max-w-[760px] border-l-2 border-[var(--pink)] pl-5 text-[15px] font-light leading-[1.7] text-[#3f3a38]">
                  {project.question}
                </p>
              </div>
              <ul className="mt-8 grid list-none gap-3 p-0 md:grid-cols-3">
                {content.painPoints.map((point) => (
                  <li
                    className="rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] p-5 text-sm font-light leading-[1.6] text-[#5d5856]"
                    key={point}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection
              id="research"
              label="Research"
              title={content.researchHeading}
            >
              <p className="m-0 max-w-[760px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
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
                  <article className="grid min-h-[560px] grid-rows-[auto_auto_1fr_auto_auto] gap-5 bg-white p-7 shadow-[0_18px_42px_rgba(17,17,17,0.045)]">
                    <div className="flex items-center justify-between gap-4">
                      <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                        Insight 01
                      </p>
                      <span className="text-[11px] font-light uppercase tracking-[0.12em] text-[#4f7f64]">
                        Market Growth
                      </span>
                    </div>
                    <div>
                      <h4 className="m-0 font-serif text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                        Indoor Plant Market Growth
                      </h4>
                      <p className="mb-0 mt-4 font-serif text-[clamp(42px,6vw,58px)] font-semibold leading-none tracking-[-0.04em] text-[#4f7f64]">
                        $20.68B <span className="text-[#b7c9bd]">→</span> $30.25B
                      </p>
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
                        <line x1="48" x2="312" y1="204" y2="204" stroke="#ded8d4" />
                        <rect x="96" y="86" width="68" height="118" fill="#dce8df" />
                        <rect x="196" y="40" width="68" height="164" fill="#4f7f64" />
                        <text x="130" y="72" textAnchor="middle" fill="#4f7f64" fontSize="14">
                          $20.68B
                        </text>
                        <text x="230" y="26" textAnchor="middle" fill="#4f7f64" fontSize="14">
                          $30.25B
                        </text>
                        <text x="130" y="226" textAnchor="middle" fill="#8a8380" fontSize="12">
                          2024
                        </text>
                        <text x="230" y="226" textAnchor="middle" fill="#8a8380" fontSize="12">
                          2032
                        </text>
                      </svg>
                    </div>
                    <p className="m-0 max-w-[44ch] text-[15px] font-light leading-[1.55] text-[#5d5856]">
                      More people are bringing plants into their homes.
                    </p>
                    <div className="border-t border-[#e6dfdb] pt-4">
                      <p className="m-0 text-[12px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        Key Insight
                      </p>
                      <p className="mb-0 mt-2 font-serif text-lg font-medium leading-[1.35] text-[#2c2826]">
                        People are buying more plants, but maintaining them remains difficult.
                      </p>
                    </div>
                  </article>

                  <article className="grid min-h-[560px] grid-rows-[auto_auto_1fr_auto_auto] gap-5 bg-white p-7 shadow-[0_18px_42px_rgba(17,17,17,0.045)]">
                    <div className="flex items-center justify-between gap-4">
                      <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                        Insight 02
                      </p>
                      <span className="text-[11px] font-light uppercase tracking-[0.12em] text-[#4f7f64]">
                        70% Plant Loss
                      </span>
                    </div>
                    <div>
                      <h4 className="m-0 font-serif text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                        Plant Care Challenges
                      </h4>
                      <p className="mb-0 mt-4 font-serif text-[clamp(52px,8vw,60px)] font-semibold leading-none tracking-[-0.04em] text-[#4f7f64]">
                        70%
                      </p>
                      <p className="mb-0 mt-3 text-[12px] font-light uppercase tracking-[0.1em] text-[#8a8380]">
                        Gen Z plant owners who have accidentally killed a plant
                      </p>
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
                        <text x="120" y="114" textAnchor="middle" fill="#171717" fontSize="38" fontWeight="600">
                          70%
                        </text>
                        <text x="120" y="142" textAnchor="middle" fill="#8a8380" fontSize="12">
                          PLANT LOSS
                        </text>
                      </svg>
                    </div>
                    <p className="m-0 max-w-[44ch] text-[15px] font-light leading-[1.55] text-[#5d5856]">
                      Beginners struggle when routines and care guidance are unclear.
                    </p>
                    <div className="border-t border-[#e6dfdb] pt-4">
                      <p className="m-0 text-[12px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        Key Insight
                      </p>
                      <p className="mb-0 mt-2 font-serif text-lg font-medium leading-[1.35] text-[#2c2826]">
                        Plant care feels stressful when users do not know what to do next.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="mt-16">
                <p className="m-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                  Initial Hypothesis
                </p>
                <h3 className="mb-0 mt-3 font-serif text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-[#171717]">
                  Competitive analysis helped frame the first product direction.
                </h3>

                <div className="relative mt-8">
                  <div className="absolute left-6 right-6 top-[88px] hidden h-px bg-[#d8d2ce] lg:block" aria-hidden="true" />
                  <div className="grid gap-7 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.27fr)_minmax(0,0.45fr)]">
                    <div className="relative bg-[var(--background)] pr-4">
                      <p className="m-0 text-[12px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        Competitor Apps
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {competitorApps.map((app) => (
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#e6dfdb] bg-white text-[#4f7f64] shadow-[0_8px_20px_rgba(17,17,17,0.035)]"
                            key={app}
                          >
                            <svg
                              aria-hidden="true"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 28 28"
                            >
                              <path
                                d="M14 22V10M14 10C10.5 10 8 8.2 7.2 5.5C10.8 5.2 13.1 6.8 14 10ZM14 10C17.5 10 20 8.2 20.8 5.5C17.2 5.2 14.9 6.8 14 10Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.4"
                              />
                            </svg>
                            <span className="sr-only">Competitor app {app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative bg-[var(--background)] pr-4">
                      <p className="m-0 text-[12px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        Common Features
                      </p>
                      <ul className="mb-0 mt-5 grid list-none gap-2 p-0 text-[15px] font-light leading-[1.55] text-[#5d5856]">
                        <li>Watering reminders</li>
                        <li>Care schedules</li>
                        <li>Growth tracking</li>
                      </ul>
                    </div>

                    <blockquote className="relative m-0 bg-[#fbfdfa] px-7 py-6 shadow-[0_18px_42px_rgba(17,17,17,0.04)]">
                      <span className="absolute bottom-6 left-0 top-6 w-1 bg-[#4f7f64]" aria-hidden="true" />
                      <p className="m-0 text-[12px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        Initial Assumption
                      </p>
                      <p className="mb-0 mt-4 font-serif text-[clamp(24px,3vw,32px)] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
                        “The core problem is that users struggle to keep up with their plant care schedule.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection
              id="design-process"
              label="Design Process"
              title={content.designHeading}
            >
              <p className="m-0 max-w-[620px] text-[15px] font-light leading-[1.65] text-[#5d5856]">
                {content.designTakeaway}
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-4">
                {leafyProcessTimeline.map((stage, index) => (
                  <article className="relative min-w-0 pr-5" key={stage.title}>
                    {index < leafyProcessTimeline.length - 1 ? (
                      <span
                        className="absolute right-1 top-[20px] hidden h-px w-10 bg-[#d8d2ce] md:block"
                        aria-hidden="true"
                      />
                    ) : null}
                    <p className="m-0 font-serif text-3xl font-medium leading-none text-[#4f7f64]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mb-0 mt-4 font-serif text-xl font-medium leading-[1.2] text-[#171717]">
                      <HighlightText>{stage.title}</HighlightText>
                    </h3>
                    <p className="mb-0 mt-3 text-sm font-light leading-[1.6] text-[#5d5856]">
                      {stage.body}
                    </p>
                  </article>
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="final-solution"
              label="Final Solution"
              title={content.solutionHeading}
            >
              <p className="m-0 max-w-[760px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
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
                    <div className="max-w-[760px]">
                      <h3 className="m-0 font-serif text-xl font-medium text-[#171717]">
                        <HighlightText>{demo.title}</HighlightText>
                      </h3>
                      <dl className="mb-0 mt-5 grid gap-4">
                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Challenge
                          </dt>
                          <dd className="m-0 mt-1 text-sm font-light leading-[1.65] text-[#5d5856]">
                            {demo.challenge}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Design Decision
                          </dt>
                          <dd className="m-0 mt-1 text-sm font-light leading-[1.65] text-[#5d5856]">
                            {demo.decision}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                            Outcome
                          </dt>
                          <dd className="m-0 mt-1 text-sm font-light leading-[1.65] text-[#5d5856]">
                            {demo.outcome}
                          </dd>
                        </div>
                      </dl>
                      <ul className="mt-5 grid list-none gap-2 p-0">
                        {demo.highlights.map((highlight) => (
                          <li
                            className="border-t border-[#e6dfdb] pt-2 text-sm font-light leading-[1.6] text-[#5d5856]"
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

            <CaseSection
              id="results-learnings"
              label="Results + Reflection"
              title="The final direction made plant care feel calmer and easier to act on."
            >
              <p className="m-0 max-w-[760px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {content.resultsCopy}
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {content.reflectionCards.map((reflection) => (
                  <article className="border-t border-[#e6dfdb] pt-5" key={reflection.title}>
                    <h3 className="m-0 font-serif text-lg font-medium text-[#171717]">
                      <HighlightText>{reflection.title}</HighlightText>
                    </h3>
                    <p className="mb-0 mt-3 text-sm font-light leading-[1.7] text-[#5d5856]">
                      {reflection.body}
                    </p>
                  </article>
                ))}
              </div>
            </CaseSection>
          </div>

          <ReturnToWorkSection />
        </div>
      </article>
    </CaseStudyShell>
  );
}
