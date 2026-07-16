import type { MetadataItem } from "./projectTypes";

type ProjectMetadataProps = {
  items: MetadataItem[];
};

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  return (
    <dl className="project-detail-meta" aria-label="Project metadata">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
