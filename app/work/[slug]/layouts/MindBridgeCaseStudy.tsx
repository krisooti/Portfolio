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
  { id: "problem", label: "Problem", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-decisions", label: "Decisions", number: "04" },
  { id: "final-solution", label: "Solution", number: "05" },
  { id: "design-system", label: "System", number: "06" },
  { id: "results-learnings", label: "Learnings", number: "07" },
];

const researchMethods = [
  "User Interviews",
  "Affinity Mapping",
  "Thematic Analysis",
  "Usability Testing",
];

const insights = [
  {
    title: "Human Control",
    body: "Users wanted AI to support, not replace, their decision making.",
  },
  {
    title: "Transparency",
    body: "Users needed to understand why recommendations were generated.",
  },
  {
    title: "Exploration",
    body: "Users preferred comparing multiple supervisors before committing.",
  },
];

const designDecisions = [
  {
    insight: "Users did not trust compatibility percentages.",
    decision: "Removed percentage scores.",
    outcome: "Introduced a clear “Best Match” explanation that describes why a supervisor is recommended.",
  },
  {
    insight: "Users wanted to stay in control of AI suggestions.",
    decision: "Added flexible filters and browse-first exploration.",
    outcome: "Users can adjust criteria, compare options, and decide when to reach out.",
  },
  {
    insight: "Users needed confidence before contacting a supervisor.",
    decision: "Made request supervision feel structured and low-pressure.",
    outcome: "The messaging flow helps users take action with enough context and clarity.",
  },
];

const videoFeatures = [
  {
    title: "Filtering Supervisors",
    challenge: "Users needed a way to narrow recommendations without feeling locked into the AI’s first answer.",
    decision: "The filter flow makes supervision type, price range, goals, specialty, modality, style, and availability adjustable in one focused layer.",
    outcome: "Filtering turns AI matching into a collaborative exploration tool instead of a black-box result.",
    highlights: [
      "Lets users refine recommendations on their own terms.",
      "Keeps clinical criteria visible and easy to compare.",
      "Supports confident browsing before commitment.",
    ],
  },
  {
    title: "Request Supervision",
    challenge: "After finding a strong match, users needed a calm way to start the conversation.",
    decision: "The request flow gives users a focused message space with supervisor context and a clear final action.",
    outcome: "The interaction reduces uncertainty and helps users move from evaluation to outreach.",
    highlights: [
      "Keeps the request lightweight and professional.",
      "Creates a clear bridge between discovery and action.",
      "Supports transparency around communication and review.",
    ],
  },
];

export function MindBridgeCaseStudy({ project, content }: ProjectCaseStudyProps) {
  const prototypeVideos =
    content.prototypeVideos ??
    (content.prototypeVideo ? [content.prototypeVideo] : []);

  return (
    <CaseStudyShell sections={mindBridgeSections}>
      <article className="mx-auto w-full max-w-[1320px] px-[clamp(20px,5vw,72px)] pt-[120px]">
        <div className="min-w-0 pb-36 max-[560px]:pb-44">
          <BackToWorkLink />
          <ProjectCaseIntro project={project} content={content} />

          <CaseSection
            id="problem"
            label="Problem"
            title={project.problem ?? project.challenge}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(280px,0.35fr)]">
              <div className="grid gap-6">
                <div>
                  <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                    Background
                  </p>
                  <p className="m-0 max-w-[920px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                    How Might We
                  </p>
                  <p className="m-0 max-w-[1120px] border-l-2 border-[var(--pink)] pl-5 text-[15px] font-light leading-[1.7] text-[#3f3a38]">
                    {project.question}
                  </p>
                </div>
              </div>
              <ol className="m-0 grid list-none gap-5 border-y border-[#e6dfdb] py-6 p-0">
                {content.painPoints.map((point, index) => (
                  <li className="grid gap-2" key={point}>
                    <span className="font-serif text-lg font-medium text-[#8a8380]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="m-0 text-sm font-light leading-[1.6] text-[#5d5856]">
                      {point}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </CaseSection>

          <CaseSection
            id="research"
            label="Research"
            title="Research clarified what users needed before trusting AI."
          >
            <p className="m-0 max-w-[920px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
              Research became the foundation for deciding how AI should explain, support, and stay secondary to human judgment.
            </p>

            <ul className="mt-10 flex list-none flex-wrap gap-x-6 gap-y-3 border-y border-[#e6dfdb] py-5 p-0">
              {researchMethods.map((method) => (
                <li
                  className="text-[12px] font-light uppercase tracking-[0.08em] text-[#5d5856]"
                  key={method}
                >
                  {method}
                </li>
              ))}
            </ul>

            <div className="mt-14 max-w-[920px]">
              <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                User Interviews
              </p>
              <p className="m-0 text-[15px] font-light leading-[1.7] text-[#5d5856]">
                We conducted six 30-minute interviews with three clinical supervisors and three therapists-in-training. We synthesized the findings through affinity mapping and thematic analysis to understand what users need before trusting AI-generated recommendations.
              </p>
            </div>

            <div className="mt-16">
              <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                Research Synthesis
              </p>
              <CaseVisual
                image={content.researchImage}
                label={content.researchCaption}
              />
            </div>

            <div className="mt-16 border-y border-[#e6dfdb] py-8">
              <h3 className="m-0 font-serif text-xl font-medium text-[#171717]">
                <HighlightText>Key Insights</HighlightText>
              </h3>
              <div className="mt-7 grid gap-8 md:grid-cols-3">
                {insights.map((insight, index) => (
                  <article className="grid gap-3" key={insight.title}>
                    <span className="font-serif text-lg font-medium text-[#8a8380]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="m-0 font-serif text-lg font-medium text-[#171717]">
                      <HighlightText>{insight.title}</HighlightText>
                    </h4>
                    <p className="m-0 text-sm font-light leading-[1.65] text-[#5d5856]">
                      {insight.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection
            id="design-decisions"
            label="Design Decisions"
            title="Research insights became focused product decisions."
          >
            <p className="m-0 max-w-[920px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
              Instead of documenting every screen iteration, I focused the case study around the decisions that changed the product experience.
            </p>
            <div className="mt-10 border-y border-[#e6dfdb]">
              {designDecisions.map((decision) => (
                <article
                  className="grid gap-5 border-b border-[#e6dfdb] py-7 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] lg:items-start"
                  key={decision.insight}
                >
                  <div className="min-w-0">
                    <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                      Research Insight
                    </p>
                    <p className="m-0 text-sm font-light leading-[1.65] text-[#5d5856]">
                      {decision.insight}
                    </p>
                  </div>
                  <span
                    className="hidden text-center font-serif text-lg text-[#aaa29e] lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <div className="min-w-0">
                    <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                      Design Decision
                    </p>
                    <p className="m-0 text-sm font-light leading-[1.65] text-[#5d5856]">
                      {decision.decision}
                    </p>
                  </div>
                  <span
                    className="hidden text-center font-serif text-lg text-[#aaa29e] lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <div className="min-w-0">
                    <p className="mb-2 mt-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                      Outcome
                    </p>
                    <p className="m-0 text-sm font-light leading-[1.65] text-[#5d5856]">
                      {decision.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            id="final-solution"
            label="Final Solution"
            title="The demos show the core matching experience in motion."
          >
            <p className="m-0 max-w-[1120px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
              The final solution centers on helping users refine supervisor recommendations and take action with clarity.
            </p>
            <div className="mt-10 grid gap-16">
              {videoFeatures.map((feature, index) => {
                const video = prototypeVideos[index];

                return (
                  <article className="grid gap-7" key={feature.title}>
                    <div className="max-w-[920px]">
                      <h3 className="m-0 font-serif text-xl font-medium text-[#171717]">
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
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
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
                            <p className="m-0 text-sm font-light leading-[1.65] text-[#5d5856]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <ul className="m-0 list-disc space-y-2 pl-5 text-sm font-light leading-[1.65] text-[#5d5856]">
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

          <CaseSection
            id="design-system"
            label="Design System"
            title="A restrained visual system built for clarity and trust."
          >
            <p className="m-0 max-w-[920px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
              The interface uses a clean and accessible visual language focused on clarity, consistency, and trust. A restrained color palette and consistent typography help users focus on important clinical information while supporting AI transparency.
            </p>
            <figure className="my-10 w-full">
              <img
                src="/images/Typography.png"
                alt="MindBridge typography design system"
                className="block h-auto w-full object-contain"
              />
              <figcaption className="mt-3 text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
                Typography system
              </figcaption>
            </figure>
            <figure className="my-10 w-full">
              <img
                src="/images/color.png"
                alt="MindBridge color palette design system"
                className="block h-auto w-full object-contain"
              />
              <figcaption className="mt-3 text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
                Color palette
              </figcaption>
            </figure>
          </CaseSection>

          <CaseSection
            id="results-learnings"
            label="Results + Learnings"
            title="The final direction made AI recommendations feel more transparent."
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="m-0 font-serif text-lg font-medium text-[#171717]">
                  <HighlightText>Results</HighlightText>
                </h3>
                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-sm font-light leading-[1.65] text-[#5d5856]">
                  <li>Improved transparency</li>
                  <li>Increased user confidence</li>
                  <li>Reduced uncertainty</li>
                  <li>Supported user control</li>
                </ul>
              </div>
              <div>
                <h3 className="m-0 font-serif text-lg font-medium text-[#171717]">
                  <HighlightText>Learnings</HighlightText>
                </h3>
                <ul className="mb-0 mt-5 list-disc space-y-2 pl-5 text-sm font-light leading-[1.65] text-[#5d5856]">
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
