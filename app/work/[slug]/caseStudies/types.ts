export type CaseVisualImage = {
  src: string;
  alt: string;
};

export type ProcessStage = {
  title: string;
  body: string;
  caption: string;
};

export type SolutionScreen = {
  title: string;
  body: string;
  rationale: string;
  image?: CaseVisualImage;
};

export type ReflectionCard = {
  title: string;
  body: string;
};

export type CaseStudyContent = {
  meta: {
    duration: string;
    role: string;
    team: string;
    sponsor: string;
  };
  painPoints: string[];
  processStages: ProcessStage[];
  solutionScreens: SolutionScreen[];
  reflectionCards: ReflectionCard[];
  overviewContribution: string;
  researchHeading: string;
  researchCopy: string;
  researchCaption: string;
  researchImage?: CaseVisualImage;
  designHeading: string;
  designTakeaway: string;
  solutionHeading: string;
  solutionCopy: string;
  primaryVisual?: CaseVisualImage;
  primaryVisualCaption: string;
  supportingVisuals: Array<{
    caption: string;
    image?: CaseVisualImage;
  }>;
  solutionTakeaway: string;
  resultsCopy: string;
  extraResult: string;
  resultsVisualCaption: string;
  resultsVisual?: CaseVisualImage;
};
