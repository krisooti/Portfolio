import { HighlightText } from "../../app/HighlightText";
import { ImageBlock } from "./ImageBlock";
import { ProjectMetadata } from "./ProjectMetadata";
import type { MetadataItem, ProjectImage } from "./projectTypes";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  summary: string;
  metadata: MetadataItem[];
  image: ProjectImage;
};

export function ProjectHero({
  title,
  subtitle,
  summary,
  metadata,
  image,
}: ProjectHeroProps) {
  return (
    <section className="project-detail-hero case-section is-visible" id="project-hero">
      <p className="case-section-label">
        <span>01</span>
        <HighlightText>Overview</HighlightText>
      </p>
      <h1>
        <HighlightText>{title}</HighlightText>
      </h1>
      <p className="project-detail-subtitle">{subtitle}</p>
      <p className="project-detail-summary">{summary}</p>
      <ProjectMetadata items={metadata} />
      <ImageBlock
        caption="Haven desktop matching experience"
        image={image}
        tone="mockup"
      />
    </section>
  );
}
