import { HighlightText } from "../../../HighlightText";
import {
  BackToWorkLink,
  CaseSection,
  CaseStudyShell,
  CaseVideo,
  CaseVisual,
  ProjectCaseIntro,
  ReturnToWorkSection,
  type ProjectCaseStudyProps,
} from "./CaseStudyParts";

const mindBridgeSections = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "context", label: "Context", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-opportunities", label: "Opportunities", number: "04" },
  { id: "design-decisions", label: "Decisions", number: "05" },
  { id: "final-solution", label: "Solution", number: "06" },
  { id: "design-system", label: "System", number: "07" },
  { id: "results-learnings", label: "Learnings", number: "08" },
];

const researchFindings = [
  {
    icon: "01",
    category: "Current Experience",
    title: "The matching process lacks structure.",
    description:
      "Trainees described the current supervisor search as informal, opaque, and heavily dependent on referrals or existing professional networks.",
    userGroup: "Trainees",
  },
  {
    icon: "02",
    category: "Preference Setting",
    title:
      "Users want to define their preferences before receiving AI matches.",
    description:
      "Before receiving recommendations, trainees want AI to understand their learning goals, areas for growth, clinical modalities, supervision style, and desired supervisor experience.",
  },
  {
    icon: "03",
    category: "AI Trust",
    title: "AI should support human judgment.",
    description:
      "Trainees and supervisors welcomed AI assistance, but wanted transparent recommendations and control over the final matching decision.",
  },
];

const designOpportunities = [
  {
    icon: "≋",
    title: "Transparent Matching",
    description:
      "Explain why each supervisor is recommended using clear rationale, relevant experience, and preference alignment.",
  },
  {
    icon: "↔",
    title: "User Control",
    description:
      "Let trainees browse, compare, save, and make the final decision instead of relying on fully automated matching.",
  },
  {
    icon: "◎",
    title: "Meaningful Fit",
    description:
      "Prioritize learning goals, supervision style, modality, clinical interests, and experience over surface-level convenience.",
  },
];

const videoFeatures = [
  {
    title: "Filtering Supervisors",
    challenge:
      "Users needed a way to narrow recommendations without feeling locked into the AI’s first answer.",
    decision:
      "The filter flow makes supervision type, price range, goals, specialty, modality, style, and availability adjustable in one focused layer.",
    outcome:
      "Filtering turns AI matching into a collaborative exploration tool instead of a black-box result.",
    highlights: [
      "Lets users refine recommendations on their own terms.",
      "Keeps clinical criteria visible and easy to compare.",
      "Supports confident browsing before commitment.",
    ],
  },
  {
    title: "Request Supervision",
    challenge:
      "After finding a strong match, users needed a calm way to start the conversation.",
    decision:
      "The request flow gives users a focused message space with supervisor context and a clear final action.",
    outcome:
      "The interaction reduces uncertainty and helps users move from evaluation to outreach.",
    highlights: [
      "Keeps the request lightweight and professional.",
      "Creates a clear bridge between discovery and action.",
      "Supports transparency around communication and review.",
    ],
  },
];

export function MindBridgeCaseStudy({
  project,
  content,
}: ProjectCaseStudyProps) {
  const prototypeVideos =
    content.prototypeVideos ??
    (content.prototypeVideo ? [content.prototypeVideo] : []);

  return (
    <CaseStudyShell sections={mindBridgeSections}>
      <article className="centered-case-content mindbridge-case-content mx-auto w-full max-w-[900px] px-6 pt-[120px] md:px-8">
        <div className="min-w-0 pb-36 max-[560px]:pb-44">
          <BackToWorkLink />

          <ProjectCaseIntro project={project} content={content} />

          {/* Context */}
          <CaseSection id="context" title="The Problem">
            <div className="w-full">
              <p className="m-0 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
                No centralized system to find the right supervisor.
              </p>

              <p className="mb-0 mt-5 text-[16px] font-light leading-[1.7] text-[#5d5856]">
                Therapists-in-training rely on{" "}
                <span className="relative inline-block text-[#3f3a38] before:absolute before:inset-x-[-0.08em] before:bottom-[0.08em] before:-z-10 before:h-[0.72em] before:origin-left before:skew-x-[-8deg] before:bg-[#d8ecff]">
                  referrals and fragmented directories
                </span>
                , making the supervision search process time-consuming, opaque,
                and difficult to navigate. This often leads to uncertainty when
                evaluating supervisor fit.
              </p>

              <div className="mt-10 border-l-2 border-[var(--pink)] pl-5">
                <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                  How Might We
                </p>

                <p className="m-0 font-serif text-[20px] font-medium leading-[1.45] tracking-[-0.01em] text-[#171717]">
                  “{project.question}”
                </p>
              </div>
            </div>
          </CaseSection>

        <CaseSection
  id="what-is-tmind"
  category="Project Context"
  title="What is Tmind AI?"
>
  <div className="max-w-[920px]">

    <p className="text-[16px] font-light leading-[1.8] text-[#5d5856]">
      Tmind AI is a Seattle-based mental healthcare startup building AI-powered
      tools that support therapists throughout their professional journey. One
      of its core initiatives focuses on helping therapists-in-training find
      clinical supervisors through a more personalized and transparent matching
      experience.
    </p>
    <br></br>

    <p className="mt-6 text-[16px] font-light leading-[1.8] text-[#5d5856]">
      In collaboration with Tmind AI, our team spent six months designing an
      AI-assisted matching platform that helps trainees define their
      preferences, discover compatible supervisors, understand why each match
      is recommended, and confidently make informed decisions.
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-3">

      <article className="bg-[#f1f3f6] px-6 py-7 transition duration-300 hover:-translate-y-1">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
          Users
        </p>

        <h3 className="mt-5 text-[18px] font-semibold text-[#4f4b49]">
          Therapists-in-Training
        </h3>

        <p className="mt-3 text-[14px] leading-[1.6] text-[#66615f]">
          Graduate students and associate therapists seeking clinical supervision.
        </p>
      </article>

      <article className="bg-[#f1f3f6] px-6 py-7 transition duration-300 hover:-translate-y-1">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
          Problem
        </p>

        <h3 className="mt-5 text-[18px] font-semibold text-[#4f4b49]">
          No Centralized Directory
        </h3>

        <p className="mt-3 text-[14px] leading-[1.6] text-[#66615f]">
          Finding the right supervisor relies heavily on referrals and fragmented resources.
        </p>
      </article>

      <article className="bg-[#f1f3f6] px-6 py-7 transition duration-300 hover:-translate-y-1">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
          Solution
        </p>

        <h3 className="mt-5 text-[18px] font-semibold text-[#4f4b49]">
          AI Matching Platform
        </h3>

        <p className="mt-3 text-[14px] leading-[1.6] text-[#66615f]">
          Personalized recommendations with transparent explanations and user control.
        </p>
      </article>

    </div>

  </div>
</CaseSection>
          {/* Research */}
          <CaseSection
            id="research"
          >
           <div className="w-full">

  <p className="mb-3 mt-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
    Research Method
  </p>

  <h3 className="m-0 font-serif text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
    Understaing user needs through interviews and and surveys.
  </h3>
  <br></br>
 <p className="mt-5 max-w-[860px] text-[16px] font-light leading-[1.75] text-[#5d5856]">
  To understand how therapists-in-training and supervisors approach the
  supervision matching process, we combined qualitative interviews with
  quantitative survey data.
</p>

<ul className="mt-6 space-y-3 text-[15px] font-light leading-[1.75] text-[#5d5856]">
  <li className="flex gap-3">
    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a8380]" />
    <span>
      <strong className="font-medium text-[#171717]">6 semi-structured interviews</strong>
      {" "}— 30-minute sessions with <strong>3 clinical supervisors</strong> and{" "}
      <strong>3 therapists-in-training</strong>.
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a8380]" />
    <span>
      <strong className="font-medium text-[#171717]">15 survey responses</strong>
      {" "}to validate interview findings and identify recurring patterns.
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a8380]" />
    <span>
      Findings were synthesized using <strong className="font-medium text-[#171717]">affinity mapping</strong> and{" "}
      <strong className="font-medium text-[#171717]">thematic analysis</strong>.
    </span>
  </li>
</ul>
{/* Research synthesis */}
<div className="mt-16">
  <CaseVisual
    image={content.researchImage}
    label={content.researchCaption}
  />
</div>
</div>
            {/* Research findings */}
            <div className="mt-14">
              <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="m-0 text-[11px] font-light uppercase tracking-[0.12em] text-[#9a928e]">
                    Key Findings
                  </p>

                  <h3 className="mb-0 mt-3 max-w-[720px] font-serif text-[22px] font-small leading-[1.2] tracking-[-0.02em] text-[#171717]">
                    Three Key Insights from User Interviews and Survey Data.
                  </h3>
                </div>
              </div>

              <div className="grid gap-5">
                {researchFindings.map((finding) => (
                  <article
                    className="
                      group
                      grid
                      min-h-[190px]
                      gap-8
                      rounded-[1px]
                      border
                      border-transparent
                      bg-[#f1f3f6]
                      px-6
                      py-7
                      transition-[transform,background-color,border-color]
                      duration-[250ms]
                      ease-out
                      hover:-translate-y-1
                      hover:border-[#d8dadd]
                      hover:bg-[#eceef1]
                      md:grid-cols-[64px_minmax(0,1fr)_140px]
                      md:items-center
                      md:px-8
                      md:py-8
                      max-[560px]:min-h-0
                      max-[560px]:gap-5
                      max-[560px]:px-5
                      max-[560px]:py-6
                    "
                    key={finding.title}
                  >
                    {/* Number */}
                    <span
                      className="font-mono text-[26px] font-normal leading-none text-[#4d4a49]"
                      aria-hidden="true"
                    >
                      {finding.icon}
                    </span>

                    {/* Main research finding */}
                    <div className="min-w-0">
                      <p className="m-0 text-[10px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
                        {finding.category}
                      </p>

                      <h4 className="mb-0 mt-3 text-[17px] font-bold leading-[1.3] text-[#656565]">
                        {finding.title}
                      </h4>

                      <p className="mb-0 mt-3 max-w-[640px] text-[14px] font-normal leading-[1.65] text-[#66615f]">
                        {finding.description}
                      </p>
                    </div>


                  </article>
                ))}
              </div>
                <br></br>
              <p className="mb-0 mt-10 max-w-[900px] text-[17px] font-normal leading-[1.75] text-[#2f2b29]">
                The findings showed that users were not simply looking for more
                supervisor options. They needed a transparent and guided process
                that reflected their preferences and learning goals while
                preserving their ability to compare and choose.
              </p>
            </div>
          </CaseSection>
         
         {/* Design Ideation */}
        <div className="mt-20">
          <p className="mb-3 mt-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
            Design Ideation
          </p>

          <h3 className="m-0 font-serif text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#171717]">
            <HighlightText>
              Exploring concepts from key research findings.
            </HighlightText>
          </h3>

          <p className="mt-5 max-w-[860px] text-[16px] font-normal leading-[1.75] text-[#5d5856]">
            Guided by the research findings, we explored multiple concepts for how AI
            could support the supervision matching journey. We rapidly sketched
            different approaches for onboarding, preference collection,
            recommendation transparency, filtering, and supervisor comparison before
            converging on the final product experience.
          </p>

          <img
            className="mx-auto mt-10 block h-auto w-full max-w-[600px] object-contain"
            src="/images/ideation.png"
            alt="Early design ideation sketches exploring onboarding, preference collection, AI matching, and supervisor comparison."
          />
        </div>

          {/* Design Opportunities */}
          <CaseSection
            id="design-opportunities"
            title="Design Opportunities"
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {designOpportunities.map((opportunity) => (
                <article
                  className="
                    flex
                    min-h-[280px]
                    flex-col
                    justify-between
                    rounded-[1px]
                    border
                    border-transparent
                    bg-[#f1f3f6]
                    px-6
                    py-7
                    transition-[transform,background-color,border-color]
                    duration-[250ms]
                    ease-out
                    hover:-translate-y-1
                    hover:border-[#d8dadd]
                    hover:bg-[#eceef1]
                    max-[560px]:min-h-[230px]
                    max-[560px]:px-5
                    max-[560px]:py-6
                  "
                  key={opportunity.title}
                >
                  <span
                    className="font-mono text-[26px] font-normal leading-none text-[#4d4a49]"
                    aria-hidden="true"
                  >
                    {opportunity.icon}
                  </span>

                  <div>
                    <h3 className="m-0 text-[16px] font-bold leading-[1.2] text-[#656565]">
                      {opportunity.title}
                    </h3>

                    <p className="mb-0 mt-3 text-[14px] font-normal leading-[1.6] text-[#66615f]">
                      {opportunity.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mb-0 mt-10 max-w-[960px] text-[18px] font-normal leading-[1.7] text-[#2f2b29]">
              Based on the research findings, we identified three design
              opportunities: make AI recommendations easier to understand,
              preserve trainee control throughout the matching process, and
              prioritize the factors that define meaningful supervisor fit.
            </p>
          </CaseSection>

          {/* Information Architecture */}
          <CaseSection
            id="design-decisions"
            title="Translating Research into Structure"
          >
            <p className="m-0 w-full text-[16px] font-light leading-[1.8] text-[#5d5856]">
              We transformed research findings into a structured product
              experience by organizing features around users&apos; mental
              models. Rather than presenting a large directory, the architecture
              guides trainees through onboarding, preference setting,
              personalized matching, profile comparison, and scheduling in a
              clear, progressive flow.
            </p>

            <figure className="my-12 w-full">
              <img
                className="block h-auto w-full object-contain"
                src="/images/mindbridge-information-architecture.png"
                alt="MindBridge information architecture showing dashboard, onboarding, supervisors, compare, messages, and requests"
              />
            </figure>
          </CaseSection>

          {/* Final Solution */}
          <CaseSection
            id="final-solution"
            label="Final Solution"
            title="The demos show the core matching experience in motion."
          >
            <p className="m-0 w-full text-[16px] font-light leading-[1.8] text-[#5d5856]">
              The final solution centers on helping users refine supervisor
              recommendations and take action with clarity.
            </p>

            <div className="mt-12 grid gap-20">
              {videoFeatures.map((feature, index) => {
                const video = prototypeVideos[index];

                return (
                  <article className="grid gap-7" key={feature.title}>
                    <div className="w-full">
                      <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                        <HighlightText>{feature.title}</HighlightText>
                      </h3>
                    </div>

                    {video ? (
                      <CaseVideo
                        caption={video.caption}
                        poster={video.poster}
                        src={video.src}
                      />
                    ) : null}

                    <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
                      <div className="grid gap-5">
                        {[
                          ["Challenge", feature.challenge],
                          ["Design Decision", feature.decision],
                          ["Outcome", feature.outcome],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                              {label}
                            </p>

                            <p className="m-0 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <ul className="m-0 list-disc space-y-2 pl-5 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                        {feature.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </CaseSection>

          {/* Design System */}
          <CaseSection
            id="design-system"
            label="Design System"
            title="A restrained visual system built for clarity and trust."
          >
            <p className="m-0 w-full text-[16px] font-light leading-[1.8] text-[#5d5856]">
              The interface uses a clean and accessible visual language focused
              on clarity, consistency, and trust. A restrained color palette and
              consistent typography help users focus on important clinical
              information while supporting AI transparency.
            </p>

            <figure className="my-12 w-full">
              <img
                className="block h-auto w-full object-contain"
                src="/images/mindbridge-design-system.png"
                alt="MindBridge design system showing typography, components, and color palette"
              />

              <figcaption className="mt-3 w-full text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
                Design system: typography, components, and color palette
              </figcaption>
            </figure>
          </CaseSection>

          {/* Results */}
          <CaseSection
            id="results-learnings"
            label="Results + Learnings"
            title="The final direction made AI recommendations feel more transparent."
          >
            <div className="grid w-full gap-12 md:grid-cols-2">
              <div>
                <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                  <HighlightText>Results</HighlightText>
                </h3>

                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                  <li>Improved transparency</li>
                  <li>Increased user confidence</li>
                  <li>Reduced uncertainty</li>
                  <li>Supported user control</li>
                </ul>
              </div>

              <div>
                <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                  <HighlightText>Learnings</HighlightText>
                </h3>

                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-[16px] font-light leading-[1.65] text-[#5d5856]">
                  <li>AI should support human decision making.</li>
                  <li>Research should drive product decisions.</li>
                  <li>Iteration creates better outcomes than first ideas.</li>
                </ul>
              </div>
            </div>
          </CaseSection>

          <ReturnToWorkSection />
        </div>
      </article>
    </CaseStudyShell>
  );
}
