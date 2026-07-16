import { HighlightText } from "../../app/HighlightText";
import { ImageBlock } from "./ImageBlock";
import type { ProjectImage } from "./projectTypes";

type ProcessStepProps = {
  number: string;
  title: string;
  body: string;
  caption: string;
  image?: ProjectImage;
};

export function ProcessStep({
  number,
  title,
  body,
  caption,
  image,
}: ProcessStepProps) {
  return (
    <article className="project-process-step">
      <div className="project-process-marker">
        <span>{number}</span>
      </div>
      <div>
        <h3>
          <HighlightText>{title}</HighlightText>
        </h3>
        <p>{body}</p>
        <ImageBlock caption={caption} image={image} tone="artifact" />
      </div>
    </article>
  );
}
