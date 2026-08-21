"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

type CaseStudyNavProps = {
  sections: {
    id: string;
    label: string;
    number: string;
  }[];
};

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState("");

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

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.32;
      const current = sectionElements.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= readingLine && rect.bottom > readingLine;
      });

      setActiveSection(current?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <aside
      className="fixed left-[clamp(24px,2.5vw,40px)] top-[30vh] z-40 w-[160px] max-[1023px]:hidden"
      aria-label="Case study sections"
      data-gsap-nav
    >
      <nav className="case-sidebar-nav">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`w-fit text-[13px] tracking-[-0.01em] transition-[color,transform] duration-[250ms] ease-out hover:translate-x-0.5 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] motion-reduce:transition-none ${
                isActive
                  ? "is-active translate-x-0.5 text-[#171717]"
                  : "text-[#d2cecb] hover:text-[#9a928e]"
              }`}
              aria-current={isActive ? "true" : undefined}
              onClick={(event) => handleNavClick(event, section.id)}
            >
              {section.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
