import { HighlightText } from "../../app/HighlightText";

type InsightCardProps = {
  title: string;
  body: string;
};

export function InsightCard({ title, body }: InsightCardProps) {
  return (
    <article className="project-detail-card">
      <h3>
        <HighlightText>{title}</HighlightText>
      </h3>
      <p>{body}</p>
    </article>
  );
}
