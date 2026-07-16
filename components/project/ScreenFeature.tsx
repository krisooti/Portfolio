import { HighlightText } from "../../app/HighlightText";
import { ImageBlock } from "./ImageBlock";
import type { Feature } from "./projectTypes";

type ScreenFeatureProps = {
  feature: Feature;
  reverse?: boolean;
};

export function ScreenFeature({ feature, reverse = false }: ScreenFeatureProps) {
  return (
    <article
      className={`project-screen-feature${
        reverse ? " project-screen-feature--reverse" : ""
      }`}
    >
      <ImageBlock
        caption={`${feature.title} mockup`}
        image={feature.image}
        tone={feature.image ? "mockup" : "placeholder"}
      />
      <div>
        <h3>
          <HighlightText>{feature.title}</HighlightText>
        </h3>
        <p>{feature.body}</p>
        <p>{feature.rationale}</p>
      </div>
    </article>
  );
}
