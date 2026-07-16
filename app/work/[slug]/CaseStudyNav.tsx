"use client";

import { useEffect, useState } from "react";
import { HighlightText } from "../../HighlightText";

type CaseStudyNavProps = {
  sections: {
    id: string;
    label: string;
    number: string;
  }[];
};

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    sectionElements.forEach((section) => {
      navObserver.observe(section);
      revealObserver.observe(section);
    });

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sections]);

  return (
    <aside className="case-sidebar" aria-label="Case study sections">
      <nav className="case-sidebar-nav">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? "is-active" : undefined}
            aria-current={activeSection === section.id ? "true" : undefined}
            onClick={() => setActiveSection(section.id)}
          >
            <span>{section.number}</span>
            <HighlightText>{section.label}</HighlightText>
          </a>
        ))}
      </nav>
    </aside>
  );
}
