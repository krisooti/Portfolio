import type { Project } from "../../../projects";
import { havenCaseStudy } from "./haven";
import { leafyCaseStudy } from "./leafy";
import { caseSections } from "./sections";
import { tmindAiCaseStudy } from "./tmindAi";
import type { CaseStudyContent } from "./types";

const fallbackCaseStudy = tmindAiCaseStudy;

const caseStudiesBySlug: Record<string, CaseStudyContent> = {
  "tmind-ai": tmindAiCaseStudy,
  Haven: havenCaseStudy,
  Leafy: leafyCaseStudy,
};

export { caseSections };
export type { CaseVisualImage, ProcessStage } from "./types";

export function getCaseStudyContent(project: Project) {
  const content = caseStudiesBySlug[project.slug] ?? fallbackCaseStudy;

  return {
    ...content,
    meta: {
      duration: project.duration ?? content.meta.duration,
      role: project.role ?? content.meta.role,
      team: project.team ?? content.meta.team,
      sponsor: project.sponsor ?? content.meta.sponsor,
    },
  };
}
