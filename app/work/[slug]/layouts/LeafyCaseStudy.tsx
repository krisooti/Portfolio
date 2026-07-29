import { HighlightText } from "../../../HighlightText";
import { caseSections } from "../caseStudies";
import {
  BackToWorkLink,
  CaseSection,
  CaseStudyShell,
  CaseVisual,
  ProjectCaseIntro,
  ReturnToWorkSection,
  type ProjectCaseStudyProps,
} from "./CaseStudyParts";

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
              <CaseVisual
                image={content.researchImage}
                label={content.researchCaption}
                note="Replace with plant care research, diary notes, or synthesis."
              />
            </CaseSection>

            <CaseSection
              id="design-process"
              label="Design Process"
              title={content.designHeading}
            >
              <p className="m-0 max-w-[760px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {content.designTakeaway}
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {content.processStages.map((stage, index) => (
                  <article
                    className="rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] p-6"
                    key={stage.title}
                  >
                    <p className="m-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                      {String(index + 1).padStart(2, "0")} / {stage.caption}
                    </p>
                    <h3 className="mb-0 mt-4 font-serif text-lg font-medium text-[#171717]">
                      <HighlightText>{stage.title}</HighlightText>
                    </h3>
                    <p className="mb-0 mt-3 text-sm font-light leading-[1.65] text-[#5d5856]">
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
              <div className="mt-10 grid gap-8">
                {content.solutionScreens.map((screen, index) => (
                  <article
                    className="grid gap-6 md:grid-cols-[minmax(0,0.62fr)_minmax(260px,0.38fr)] md:items-center"
                    key={screen.title}
                  >
                    <CaseVisual
                      image={content.supportingVisuals[index]?.image}
                      label={screen.title}
                      note="Replace with a final solution screen."
                    />
                    <div>
                      <h3 className="m-0 font-serif text-lg font-medium text-[#171717]">
                        <HighlightText>{screen.title}</HighlightText>
                      </h3>
                      <p className="mb-0 mt-3 text-sm font-light leading-[1.7] text-[#5d5856]">
                        {screen.rationale}
                      </p>
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
