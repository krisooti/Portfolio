"use client";

import { useState } from "react";
import { HighlightText } from "../../../HighlightText";
import { CASE_TYPOGRAPHY } from "./CaseStudyParts";

type PersonaTab = {
  title: string;
  items: string[];
};

export type LeafyPersona = {
  type: string;
  title: string;
  detail: string;
  tabs: PersonaTab[];
};

export function LeafyPersonaCard({ persona }: { persona: LeafyPersona }) {
  const [activeTab, setActiveTab] = useState(persona.tabs[0]?.title ?? "");

  const activeContent =
    persona.tabs.find((tab) => tab.title === activeTab) ?? persona.tabs[0];

  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-[#e6dfdb] bg-[#fffdfb] px-7 py-7 shadow-[0_10px_28px_rgba(17,17,17,0.035)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#d6dfd7] hover:bg-[#f8fbf7] hover:shadow-[0_16px_36px_rgba(17,17,17,0.055)]">
      <svg
        className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 text-[#4f7f64] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
        fill="none"
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        <path
          d="M80 132C80 96 79 63 79 28"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M82 76C105 52 129 49 142 56C135 78 111 91 82 76Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M78 94C54 70 30 67 18 75C26 96 50 108 78 94Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>

      <div className="relative z-10">
        <p className={CASE_TYPOGRAPHY.eyebrow}>
          {persona.type}
        </p>

        <h3 className={CASE_TYPOGRAPHY.cardTitle}>
          <HighlightText>{persona.title}</HighlightText>
        </h3>

        <p className="mb-0 mt-2 text-[12px] font-light leading-[1.6] text-[#746f6c]">
          {persona.detail}
        </p>

        <div className="mt-7 flex flex-wrap gap-2" role="tablist">
          {persona.tabs.map((tab) => {
            const isActive = tab.title === activeContent.title;

            return (
              <button
                className={`rounded-full border px-4 py-2 text-[11px] font-light uppercase tracking-[0.08em] transition-all duration-200 ease-out ${
                  isActive
                    ? "border-[#4f7f64] bg-[#edf5ef] text-[#365f49]"
                    : "border-[#e1dbd7] bg-[#fffdfb] text-[#746f6c] hover:border-[#8baa97] hover:text-[#4f7f64]"
                }`}
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                onFocus={() => setActiveTab(tab.title)}
                onMouseEnter={() => setActiveTab(tab.title)}
                role="tab"
                type="button"
                aria-selected={isActive}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        <div
          className="mt-7 transition-opacity duration-300 ease-out"
          key={activeContent.title}
          role="tabpanel"
        >
          <p className="m-0 text-[11px] font-light uppercase tracking-[0.12em] text-[#8a8380]">
            {activeContent.title}
          </p>

          <ul className="mt-3 grid list-none gap-2 p-0">
            {activeContent.items.map((item) => (
              <li
                className="grid grid-cols-[14px_minmax(0,1fr)] gap-2 text-[16px] font-normal leading-[1.75] text-[#5d5856]"
                key={item}
              >
                <span className="mt-[0.58em] h-1 w-1 rounded-full bg-[#4f7f64]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
