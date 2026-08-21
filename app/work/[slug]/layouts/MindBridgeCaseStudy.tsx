import { HighlightText } from "../../../HighlightText";
import { ImageLightbox } from "../../../../components/ImageLightbox";
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
import { TmindEvalMetrics } from "./TmindEvalMetrics";
import { TmindHmwQuote } from "./TmindHmwQuote";

const mindBridgeSections = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "context", label: "Challenge", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-decisions", label: "Decisions", number: "04" },
  { id: "design-system", label: "Design", number: "05" },
  { id: "final-solution", label: "Solution", number: "06" },
  { id: "results-learnings", label: "Results", number: "07" },
];

const researchFindings = [
  {
    icon: "01",
    category: "Current Experience",
    title: "Compatibility involved more than credentials.",
    description:
      "Users were not only looking at a supervisor’s qualifications or years of experience. They also considered specialization, therapeutic approach, and weather the supervisor aligned with their individual learning goals.",
    userGroup: "Trainees",
  },
  {
    icon: "02",
    category: "Preference Setting",
    title: "Discovering and comparing supervisors was difficult.",
    description:
      "Even when suitable supervisors existed, users had difficulty finding and evaluating them.",
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

const postTaskQuestions = [
  "I understand why these supervisors were recommended.",
  "I felt in control of the matching process.",
  "I would trust this system to help me identify potential supervisors.",
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
    usabilityTesting: (
      <>
        Users appreciated being able to refine AI recommendations, reinforcing
        the need for{" "}
        <strong className="font-semibold text-[#171717]">
          human control over AI-assisted matching
        </strong>
        .
      </>
    ),
    highlights: [
      "Lets users refine recommendations on their own terms.",
      "Keeps clinical criteria visible and easy to compare.",
      "Supports confident browsing before commitment.",
    ],
  },
  {
    title: "Request Supervision",
    challenge:
      "After identifying a potential match, users needed a clear and comfortable way to initiate contact.",
    decision:
      "We designed a focused request flow that provides supervisor context, space for a personal message, and a clear confirmation of what happens next.",
    outcome:
      "The interaction reduces uncertainty and helps users move from evaluation to outreach.",
    usabilityTesting: (
      <>
        Participants found the request and confirmation flow easy to follow, suggesting that clear feedback can reduce uncertainty when moving from evaluation to outreach.
      </>
    ),
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

          {/* Project Context */}
          <CaseSection
            id="what-is-tmind"
            category="Project Context"
            title="What is Tmind AI?"
          >
            <div className="w-full">
              <p className="mb-0 mt-5 text-[16px] font-normal leading-[1.7] text-[#5d5856]">
                Tmind AI is a Seattle-based mental healthcare startup building AI-powered
                tools that support therapists throughout their professional journey. One
                of its core initiatives focuses on helping therapists-in-training find
                clinical supervisors through a more personalized and transparent matching
                experience.
              </p>
            </div>
          </CaseSection>

        <CaseSection
  id="context"
  title="The Challenge"
>
  <div className="max-w-[920px]">

    <p className="text-[16px] font-normal leading-[1.8] text-[#5d5856]">
      Therapists-in-training need qualified supervisors to complete their clinical hours.
      However, many currently rely on{" "}
      <span className="relative inline-block text-[#3f3a38] before:absolute before:inset-x-[-0.08em] before:bottom-[0.08em] before:-z-10 before:h-[0.72em] before:origin-left before:skew-x-[-8deg] before:bg-[#d8ecff]">
        personal referrals, professional networks, and fragmented online directories
      </span>
      . This makes it difficult to determine which supervisors are available and, more
      importantly, which ones would be a good fit for their individual learning needs.
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-3">

      <article className="bg-[#f1f3f6] px-6 py-7 transition duration-300 hover:-translate-y-1">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
          Users
        </p>

        <h3 className="mt-5 text-[18px] font-semibold text-[#4f4b49]">
          Therapists-in-Training
        </h3>

        <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
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

        <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
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

        <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
          Personalized recommendations with transparent explanations and user control.
        </p>
      </article>

    </div>

    <TmindHmwQuote question={project.question ?? ""} />

  </div>
</CaseSection>
          {/* Research */}
          <CaseSection
            id="research"
          >
           <div className="w-full">

  <p className="mb-3 mt-0 text-[11px] font-normal uppercase tracking-[0.14em] text-[#8a8380]">
    Research Method
  </p>

  <h3 className="m-0 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
    Understaing user needs through <HighlightText>interviews</HighlightText> and and surveys.
  </h3>
  <br></br>
 <p className="mt-5 max-w-[860px] text-[16px] font-normal leading-[1.75] text-[#5d5856]">
  To understand how therapists-in-training and supervisors approach the
  supervision matching process, we combined qualitative interviews with
  quantitative survey data.
</p>

<div className="mt-6 grid gap-5 md:grid-cols-3">
  <article className="bg-[#f3f1ef] px-6 py-7">
    <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
      01
    </p>
    <h3 className="mt-5 text-[20px] font-bold text-[#4f4b49]">
      6 Interviews
    </h3>
    <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
      30-minute sessions with 3 clinical supervisors and 3 therapists-in-training.
    </p>
  </article>

  <article className="bg-[#f3f1ef] px-6 py-7">
    <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
      02
    </p>
    <h3 className="mt-5 text-[20px] font-bold text-[#4f4b49]">
      15 Surveys
    </h3>
    <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
      Validated interview findings and identified recurring patterns.
    </p>
  </article>

  <article className="bg-[#f3f1ef] px-6 py-7">
    <p className="text-[10px] uppercase tracking-[0.12em] text-[#8a8380]">
      03
    </p>
    <h3 className="mt-5 text-[20px] font-bold text-[#4f4b49]">
      Synthesis
    </h3>
    <p className="mt-3 text-[16px] leading-[1.6] text-[#66615f]">
      Findings were mapped with affinity mapping and thematic analysis.
    </p>
  </article>
</div>
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
                  <p className="m-0 text-[11px] font-normal uppercase tracking-[0.12em] text-[#9a928e]">
                    Key Findings
                  </p>

                  <h3 className="mb-0 mt-3 max-w-[720px] font-serif text-[26px] font-small leading-[1.2] tracking-[-0.02em] text-[#171717]">
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
                      <p className="m-0 text-[10px] font-normal uppercase tracking-[0.12em] text-[#8a8380]">
                        {finding.category}
                      </p>

                      <h4 className="mb-0 mt-3 text-[17px] font-bold leading-[1.3] text-[#656565]">
                        {finding.title}
                      </h4>

                      <p className="mb-0 mt-3 max-w-[640px] text-[16px] font-normal leading-[1.65] text-[#66615f]">
                        {finding.description}
                      </p>
                    </div>


                  </article>
                ))}
              </div>
                <br></br>
              <p className="mb-0 mt-10 max-w-[900px] text-[16px] font-normal leading-[1.75] text-[#2f2b29]">
                The findings showed that users were not simply looking for more
                supervisor options. They needed a transparent and guided process
                that reflected their preferences and learning goals while
                preserving their ability to compare and choose.
              </p>
            </div>
          </CaseSection>
         
   {/* Design Ideation */}
<div className="mt-20">
  {/* Two images side by side */}
  <figure className="mb-10">
    <div className="grid grid-cols-2 items-start gap-5 max-[560px]:grid-cols-1">
      {/* Left */}
      <img
        src="/images/ideation.png"
        alt="Early design ideation sketches."
        className="block h-auto w-full object-contain"
      />

      {/* Right */}
      <img
        src="/images/mindbridge-information-architecture.png"
        alt="Low-fidelity design exploration."
        className="block h-auto w-full object-contain"
      />
    </div>

    <figcaption className="mt-3 text-[11px] font-normal uppercase tracking-[0.08em] text-[#8a8380]">
      Early concept exploration
    </figcaption>
  </figure>

  <p className="mt-8 text-[16px] font-normal leading-[1.75] text-[#5d5856]">
    Guided by the research findings, we explored multiple concepts for how AI
    could support the supervision matching journey. We rapidly sketched
    different approaches for onboarding, preference collection,
    recommendation transparency, filtering, and supervisor comparison before
    converging on the final product experience.
  </p>

</div>


        {/* Design Opportunities */}
<CaseSection
  id="design-opportunities"
  title="Design Opportunities"
>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {designOpportunities.map((opportunity) => (
      <article
        key={opportunity.title}
        className="
          bg-[#f1f3f6]
          px-6
          py-6
          transition-[transform,background-color]
          duration-[250ms]
          ease-out
          hover:-translate-y-1
          hover:bg-[#eceef1]
          max-[560px]:px-5
          max-[560px]:py-5
        "
      >
        <h3 className="m-0 font-serif text-[20px] font-semibold leading-[1.3] text-[#656565]">
          {opportunity.title}
        </h3>

        <p className="mb-0 mt-3 text-[16px] font-normal leading-[1.6] text-[#66615f]">
          {opportunity.description}
        </p>
      </article>
    ))}
  </div>

  <p className="mb-0 mt-8 max-w-[900px] text-[16px] font-normal leading-[1.7] text-[#2f2b29]">
    Based on the research findings, we identified three design
    opportunities: make AI recommendations easier to understand,
    preserve trainee control throughout the matching process, and
    prioritize the factors that define meaningful supervisor fit.
  </p>
</CaseSection>
{/* Early Concept Exploration */}
<CaseSection
  id="design-decisions"
  title="Early Concept Exploration"
>
  <figure className="mb-12 w-full">
    <img
      className="block h-auto w-full object-contain"
      src="/images/low.png"
      alt="Early concept sketches exploring AI-assisted supervisor matching"
    />
  </figure>

  <div className="grid w-full gap-[18px] text-[16px] font-normal leading-[1.8] text-[#5d5856]">
    <p className="m-0">
      One of our initial concepts positioned AI as the primary driver of the experience. Users would enter their preferences, receive a curated set of candidates, 
      and swipe through supervisor cards to create a shortlist. 
    </p>

    <p className="m-0">
      Exploring this flow surfaced a key question:
    </p>

    <p className="m-0 max-w-[860px] font-serif !text-[16px] font-semibold leading-[1.5] tracking-[-0.02em] text-[#171717]">
      <span className="relative inline text-[#171717] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] before:absolute before:inset-x-[-0.08em] before:bottom-[0.08em] before:-z-10 before:h-[0.72em] before:origin-left before:skew-x-[-8deg] before:bg-[#d8ecff]">
        How much should AI decide—and how much control should remain with the user?
      </span>
    </p>

    <p className="m-0">
      This led us to{" "}
      <strong className="font-semibold text-[#171717]">
        shift toward AI-assisted discovery, giving users more control through
        transparent recommendations, flexible filters, and direct profile
        exploration.
      </strong>
    </p>
  </div>

</CaseSection>

          {/* Design System */}
          <CaseSection
            id="design-system"
            label="Design System"
            title="A restrained visual system built for clarity and trust."
          >
            <figure className="mb-12 w-full">
              <img
                className="block h-auto w-full object-contain"
                src="/images/mindbridge-design-system.png"
                alt="MindBridge design system showing typography, components, and color palette"
              />
            </figure>

            <p className="m-0 w-full text-[16px] font-normal leading-[1.8] text-[#5d5856]">
              Since Tmind AI already had an established color palette and typography, we focused on preserving its brand identity while organizing the UI elements needed for the matching experience into a consistent system.

We created reusable components for recurring elements such as buttons, input fields, supervisor cards, filter tags, status labels, and Match Insight.
            </p>
          </CaseSection>

          {/* Match Insight Feature */}
<CaseSection
  id="match-insight"
  label="Main Feature"
  title="Making AI Recommendations Explainable"
>
  <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
    {/* Left: Image */}
    <figure className="m-0 w-full">
      <ImageLightbox
        src="/images/Group 4.png"
        alt="Tmind AI supervisor recommendation interface showing Match Insight explanations"
        imageClassName="block h-auto w-full rounded-[6px] object-contain"
      />
    </figure>

    {/* Right: Text */}
    <div className="space-y-5">
      <p className="m-0 text-[16px] font-normal leading-[1.8] text-[#5d5856]">
        Instead of only showing users the top recommended supervisors, we added
        a{" "}
        <span className="inline bg-[#d8ecff] px-[0.08em] text-[#3f3a38] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
          Match Insight that explains why each supervisor was recommended.
        </span>
      </p>
      <p className="m-0 text-[16px] font-normal leading-[1.8] text-[#5d5856]">
        This way, AI helps narrow the options while users still have enough
        context to{" "}
        <HighlightText>evaluate the recommendation and make the final decision.</HighlightText>
      </p>
    </div>
  </div>
</CaseSection>
          
          {/* Final Solution */}
          <CaseSection
            id="final-solution"
            label="Final Solution"
          >
            <div className="grid gap-24">
              {videoFeatures.map((feature, index) => {
                const video = prototypeVideos[index];

                return (
                  <article
                    key={feature.title}
                    className="grid gap-3"
                  >
                    {/* Feature Title */}
                    <h3
                      className="m-0 font-serif text-[26px] font-medium leading-[1.25] text-[#171717]"
                    >
                      <HighlightText>{feature.title}</HighlightText>
                    </h3>

                    {/* Demo Video */}
                    {video ? (
                      <CaseVideo
                        caption={video.caption}
                        className="my-0"
                        poster={video.poster}
                        src={video.src}
                      />
                    ) : null}

                    {/* Challenge / Design Decision / Outcome */}
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        ["Challenge", feature.challenge],
                        ["Design Decision", feature.decision],
                        ["Outcome", feature.outcome],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="border border-[#dedbd8] px-6 py-6"
                        >
                          <p className="mb-4 mt-0 text-[11px] font-normal uppercase tracking-[0.1em] text-[#9a928e]">
                            {label}
                          </p>

                          <p className="m-0 text-[16px] font-normal leading-[1.7] text-[#5d5856]">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Usability Testing */}
                    <div className="border border-[#dedbd8] px-6 py-6">
                      <p className="mb-3 mt-0 text-[11px] font-normal uppercase tracking-[0.1em] text-[#9a928e]">
                        Usability Testing
                      </p>
                      <p className="mb-0 mt-8 max-w-[900px] text-[16px] font-normal leading-[1.7] text-[#2f2b29]">
                        {feature.usabilityTesting}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </CaseSection>

          {/* Results + Learnings */}
          <CaseSection
            id="results-learnings"
            label="Results + Learnings"
            title="What We Validated"
          >
            <div className="grid w-full gap-12">
              <div>
                <p className="m-0 text-[16px] font-normal leading-[1.75] text-[#5d5856]">
                  Usability testing indicated that participants:
                </p>

                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-[16px] font-normal leading-[1.65] text-[#5d5856]">
                  <li>Better understood why supervisors were recommended</li>
                  <li>Valued the ability to refine AI-generated results</li>
                  <li>Felt more confident about the next step</li>
                  <li>Preferred maintaining control over the final decision</li>
                </ul>
              </div>

              <div>
                <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                  <HighlightText>Post-task questions</HighlightText>
                </h3>
                <p className="mb-0 mt-4 text-[16px] font-normal leading-[1.75] text-[#5d5856]">
                  After viewing recommendations, participants rated standardized
                  statements from{" "}
                  <strong className="font-medium text-[#171717]">
                    1 = Strongly Disagree
                  </strong>{" "}
                  to{" "}
                  <strong className="font-medium text-[#171717]">
                    5 = Strongly Agree
                  </strong>
                  . This made feedback comparable across sessions instead of
                  relying only on open comments.
                </p>
                <ol className="mb-0 mt-5 list-none space-y-3 p-0">
                  {postTaskQuestions.map((question, index) => (
                    <li
                      key={question}
                      className="rounded-[12px] border border-[#e4e1de] bg-[#f3f1ef] px-5 py-3.5 text-[16px] font-semibold leading-[1.65] text-[#5d5856] [transform:none]"
                    >
                      <span className="mr-3 text-[11px] font-normal uppercase tracking-[0.1em] text-[#9a928e]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      “{question}”
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                  <HighlightText>What the numbers showed</HighlightText>
                </h3>
                <TmindEvalMetrics />
              </div>

              <div>
                <h3 className="m-0 font-serif text-[26px] font-medium text-[#171717]">
                  <HighlightText>Key Learnings</HighlightText>
                </h3>

                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-[16px] font-normal leading-[1.65] text-[#5d5856]">
                  <li>AI should support human judgment rather than replace it.</li>
                  <li>
                    Transparency requires explaining the recommendation—not simply showing a score.
                  </li>
                  <li>User control should remain available throughout the matching journey.</li>
                  <li>
                    Iterative testing can reveal gaps between the intended experience and users’ actual understanding.
                  </li>
                </ul>
              </div>
            </div>
          </CaseSection>

          <ReturnToWorkSection currentSlug={project.slug} />
        </div>
      </article>
    </CaseStudyShell>
  );
}
