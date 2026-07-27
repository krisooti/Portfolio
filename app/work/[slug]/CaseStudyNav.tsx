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
    <aside
      className="sticky top-24 self-start py-1 max-[980px]:top-[58px] max-[980px]:z-[6] max-[980px]:overflow-x-auto max-[980px]:border-b max-[980px]:border-[var(--line)] max-[980px]:bg-[rgba(255,253,251,0.94)] max-[980px]:pb-3 max-[980px]:pt-0 max-[980px]:backdrop-blur-[14px]"
      aria-label="Case study sections"
    >
      <nav className="case-sidebar-nav grid gap-4 max-[980px]:flex max-[980px]:min-w-max max-[980px]:gap-[22px]">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative flex items-center gap-3 py-2 pl-4 text-[13px] font-light text-[#5f5a58] transition-[color,transform] duration-200 ease-out hover:translate-x-[3px] hover:text-[#171717] max-[980px]:hover:translate-x-0 max-[980px]:hover:-translate-y-px${
              activeSection === section.id
                ? " is-active translate-x-[3px] text-[#171717] max-[980px]:translate-x-0 max-[980px]:-translate-y-px"
                : ""
            }`}
            aria-current={activeSection === section.id ? "true" : undefined}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="text-[11px] text-[#9b9491] transition-colors duration-200 ease-out">
              {section.number}
            </span>
            <HighlightText>{section.label}</HighlightText>
          </a>
        ))}
      </nav>
    </aside>
  );
}
