import type { ReactNode } from "react";
import { HighlightText } from "../../app/HighlightText";

type CaseStudySectionProps = {
  id: string;
  eyebrow: string;
  number: string;
  title: string;
  children: ReactNode;
};

export function CaseStudySection({
  id,
  eyebrow,
  number,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="case-section project-detail-section" id={id}>
      <p className="case-section-label">
        <span>{number}</span>
        <HighlightText>{eyebrow}</HighlightText>
      </p>
      <h2>
        <HighlightText>{title}</HighlightText>
      </h2>
      {children}
    </section>
  );
}
