export type CaseStudySectionLink = {
  id: string;
  label: string;
  number: string;
};

export type MetadataItem = {
  label: string;
  value: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit?: "contain" | "cover";
};

export type Feature = {
  title: string;
  body: string;
  rationale: string;
  image?: ProjectImage;
};
