import Image from "next/image";
import type { ProjectImage } from "./projectTypes";

type ImageBlockProps = {
  caption: string;
  image?: ProjectImage;
  tone?: "mockup" | "artifact" | "placeholder";
};

export function ImageBlock({
  caption,
  image,
  tone = "placeholder",
}: ImageBlockProps) {
  return (
    <figure className={`project-image-block project-image-block--${tone}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={tone === "mockup"}
          sizes="(max-width: 900px) 100vw, 760px"
          className={
            image.fit === "cover"
              ? "project-image-block__image project-image-block__image--cover"
              : "project-image-block__image"
          }
        />
      ) : (
        <div className="project-image-placeholder" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
