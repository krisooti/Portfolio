import { HighlightText } from "../../../HighlightText";
import { caseSections } from "../caseStudies";
import {
  BackToWorkLink,
  CaseInsightPanel,
  CaseSection,
  CaseSolutionFeature,
  CaseStudyShell,
  CASE_TYPOGRAPHY,
  CaseVideo,
  CaseVisual,
  ProjectCaseIntro,
  ReturnToWorkSection,
  type ProjectCaseStudyProps,
} from "./CaseStudyParts";

export function HavenCaseStudy({ project, content }: ProjectCaseStudyProps) {
  const prototypeVideos =
    content.prototypeVideos ??
    (content.prototypeVideo ? [content.prototypeVideo] : []);

  return (
    <CaseStudyShell sections={caseSections}>
      <article className="centered-case-content mx-auto w-full max-w-[900px] px-6 pt-[120px] md:px-8">
        <div className="min-w-0 pb-36 max-[560px]:pb-44">
          <BackToWorkLink />
          <ProjectCaseIntro project={project} content={content} />

          <div>
            <CaseSection
              id="context"
              label="Context"
              title={project.problem ?? project.challenge}
              titleAs="body"
              titleClassName={CASE_TYPOGRAPHY.body}
            >
              <p className={CASE_TYPOGRAPHY.body}>
                {project.challenge}
              </p>
              <p className="mt-6 max-w-[860px] border-l-2 border-[var(--pink)] pl-5 text-[16px] font-normal leading-[1.75] text-[#3f3a38]">
                {project.question}
              </p>
              <CaseInsightPanel title="Pain points" items={content.painPoints} />
            </CaseSection>

            <CaseSection
              id="research"
              label="Research"
              title={content.researchHeading}
            >
              <p className={CASE_TYPOGRAPHY.body}>
                {content.researchCopy}
              </p>

              <CaseVisual
                image={content.researchImage}
                label={content.researchCaption}
                note="Replace with research synthesis, interview notes, or competitive analysis."
              />
            </CaseSection>

            <CaseSection
              id="design-process"
              label="Design Process"
              title={content.designHeading}
            >
              <div className="w-full">
                <p className={CASE_TYPOGRAPHY.body}>
                  {content.designTakeaway}
                </p>
              </div>

              <div className="mt-10 grid gap-4">
                {content.processStages.map((stage, index) => (
                  <article
                    key={stage.title}
                    className="group grid grid-cols-[56px_minmax(0,1fr)] items-start gap-5 rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] px-6 py-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#cec6c1] hover:shadow-[0_14px_34px_rgba(17,17,17,0.07)] max-[560px]:grid-cols-[42px_minmax(0,1fr)] max-[560px]:gap-4 max-[560px]:px-4 max-[560px]:py-5"
                  >
                    <span className="font-serif text-lg font-medium leading-none text-[#aaa29e] transition-colors duration-300 group-hover:text-[var(--pink)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className={CASE_TYPOGRAPHY.subsectionHeading}>
                          <HighlightText>{stage.title}</HighlightText>
                        </h3>

                        {stage.caption ? (
                          <span className="text-[11px] font-light uppercase tracking-[0.08em] text-[#9a928e]">
                            {stage.caption}
                          </span>
                        ) : null}
                      </div>

                      <p className={CASE_TYPOGRAPHY.cardDescription}>
                        {stage.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="final-solution"
              label="Final Solution"
              title={content.solutionHeading}
            >
              <p className={CASE_TYPOGRAPHY.body}>
                {content.solutionCopy}
              </p>

              {prototypeVideos.length > 0 ? (
                <div className="mt-10 grid gap-8">
                  <div className="w-full border-t border-[#e6dfdb] pt-7">
                    <p className={CASE_TYPOGRAPHY.eyebrow}>
                      Prototype demos
                    </p>
                  </div>
                  {prototypeVideos.map((video) => (
                    <CaseVideo
                      caption={video.caption}
                      key={video.src}
                      poster={video.poster}
                      src={video.src}
                    />
                  ))}
                </div>
              ) : null}

              <div className="mt-10 grid gap-12">
                {content.solutionScreens.map((screen, index) => (
                  <CaseSolutionFeature
                    key={screen.title}
                    image={content.supportingVisuals[index]?.image}
                    rationale={screen.rationale}
                    title={screen.title}
                  />
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="results-learnings"
              label="Results + Reflection"
              title="The final direction made the search feel more guided and less uncertain."
            >
              <p className={CASE_TYPOGRAPHY.body}>
                {content.resultsCopy}
              </p>
              <CaseVisual
                image={content.resultsVisual}
                label={content.resultsVisualCaption}
                note="Replace with the final prototype walkthrough or product overview."
              />
              <div className="mt-8 grid gap-5">
                {content.reflectionCards.map((reflection) => (
                  <article
                    className="border-t border-[#e6dfdb] pt-5"
                    key={reflection.title}
                  >
                    <h3 className={CASE_TYPOGRAPHY.subsectionHeading}>
                      <HighlightText>{reflection.title}</HighlightText>
                    </h3>
                    <p className={CASE_TYPOGRAPHY.cardDescription}>
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
