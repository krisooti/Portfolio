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
    const intersectingSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            intersectingSections.delete(entry.target.id);
          }
        });

        const readingLine = window.innerHeight * 0.4;
        const closestSection = Array.from(intersectingSections.entries()).sort(
          ([, firstTop], [, secondTop]) =>
            Math.abs(firstTop - readingLine) - Math.abs(secondTop - readingLine),
        )[0];

        if (closestSection) {
          setActiveSection(closestSection[0]);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      intersectingSections.clear();
    };
  }, [sections]);

  return (
    <aside
      className="fixed left-[clamp(24px,2.5vw,40px)] top-[30vh] z-40 w-[160px] max-[1023px]:hidden"
      aria-label="Case study sections"
      data-gsap-nav
    >
      <nav className="case-sidebar-nav flex flex-col gap-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`w-fit text-[14px] leading-[1.15] tracking-[-0.01em] transition-[color,transform,opacity] duration-[250ms] ease-out hover:translate-x-0.5 hover:text-[#66615f] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] motion-reduce:transition-none ${
              activeSection === section.id
                ? "translate-x-0.5 font-normal text-[#171717] opacity-100"
                : "font-normal text-[#c9c7c5] opacity-80"
            }`}
            aria-current={activeSection === section.id ? "true" : undefined}
            onClick={(event) => handleNavClick(event, section.id)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
