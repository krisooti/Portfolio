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
      className="fixed bottom-6 left-6 z-40 rounded-2xl border border-[#e4ded9] bg-[#fffdfc]/90 p-2 shadow-[0_10px_30px_rgba(17,17,17,0.08)] backdrop-blur-md max-[980px]:bottom-4 max-[980px]:left-4 max-[560px]:right-4 max-[560px]:overflow-x-auto"
      aria-label="Case study sections"
    >
      <nav className="case-sidebar-nav grid gap-1 max-[560px]:flex max-[560px]:min-w-max">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-light text-[#5f5a58] transition-[background-color,color,transform] duration-200 ease-out hover:-translate-y-px hover:bg-[#f7f4f1] hover:text-[#171717]${
              activeSection === section.id
                ? " is-active bg-[#f7f4f1] text-[#171717] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.035),inset_-2px_-2px_6px_rgba(255,255,255,0.82)]"
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
