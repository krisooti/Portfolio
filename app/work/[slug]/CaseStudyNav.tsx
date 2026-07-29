"use client";

import type { MouseEvent } from "react";
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

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    setActiveSection(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${sectionId}`);
  };

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.08, 0.2, 0.45],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      className="fixed left-6 top-[112px] z-40 border border-[#e4ded9] bg-[#fffdfc]/90 p-3 backdrop-blur-md max-[980px]:left-4 max-[980px]:top-[104px] max-[560px]:left-4 max-[560px]:right-4 max-[560px]:overflow-x-auto"
      aria-label="Case study sections"
    >
      <nav className="case-sidebar-nav grid gap-2 max-[560px]:flex max-[560px]:min-w-max">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative flex items-center px-1 py-1 text-[12px] font-light transition-colors duration-200 ease-out hover:text-[#74706e] ${
              activeSection === section.id ? "text-[#4a4745]" : "text-[#b0acab]"
            }`}
            aria-current={activeSection === section.id ? "location" : undefined}
            onClick={(event) => handleNavClick(event, section.id)}
          >
            <HighlightText>{section.label}</HighlightText>
          </a>
        ))}
      </nav>
    </aside>
  );
}
