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
    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;

      const activationLine = window.innerHeight * 0.38;
      let currentSection = sectionElements[0];

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom > 96) {
          currentSection = section;
        }
      });

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [sections]);

  return (
    <aside
      className="fixed left-6 top-[112px] z-40 border border-[#e4ded9] bg-[#fffdfc]/90 p-3 backdrop-blur-md max-[980px]:left-4 max-[980px]:top-[104px] max-[560px]:left-4 max-[560px]:right-4 max-[560px]:overflow-x-auto"
      aria-label="Case study sections"
      data-gsap-nav
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
