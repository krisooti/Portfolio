"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import { HighlightText } from "../HighlightText";

type ToolboxItem = {
  name: string;
  description: string;
  logo: string;
};

const toolboxItems: ToolboxItem[] = [
  {
    name: "Figma",
    description: "Product design & design ideation",
    logo: "/images/toolbox/figma-original.svg",
  },
  {
    name: "VS Code",
    description: "Development",
    logo: "/images/toolbox/vscode.svg",
  },
  {
    name: "ChatGPT",
    description: "Ideation & problem solving",
    logo: "/images/toolbox/openai.svg",
  },
  {
    name: "Claude",
    description: "Research & prototyping",
    logo: "/images/toolbox/claude.svg",
  },
  {
    name: "Lovable",
    description: "Rapid prototyping",
    logo: "/images/toolbox/lovable.ico",
  },
  {
    name: "Notion",
    description: "Documentation",
    logo: "/images/toolbox/notion.svg",
  },
  {
    name: "Miro",
    description: "Research synthesis",
    logo: "/images/toolbox/miro.svg",
  },
];

const toolboxPositions = [
  { left: "9%", top: "70px", rotation: "-5deg" },
  { left: "22.5%", top: "42px", rotation: "3deg" },
  { left: "36.5%", top: "22px", rotation: "-2deg" },
  { left: "50%", top: "14px", rotation: "0deg" },
  { left: "63.5%", top: "22px", rotation: "2deg" },
  { left: "77.5%", top: "42px", rotation: "-3deg" },
  { left: "91%", top: "70px", rotation: "5deg" },
] as const;

export function ToolboxSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const toggleToolbox = () => {
    setIsOpen((current) => !current);
    setSelectedTool(null);
  };

  return (
    <section
      aria-labelledby="toolbox-title"
      className="about-story-section mx-auto mt-[clamp(96px,13vw,156px)] w-[min(100%,960px)] border-t border-[var(--line)] pb-[clamp(28px,5vw,56px)] pt-[clamp(68px,9vw,104px)] max-[560px]:mt-[80px] max-[560px]:pb-6 max-[560px]:pt-14"
      data-gsap-section
    >
      <div className="flex flex-col items-center gap-[clamp(38px,5vw,52px)]">
        <h2
          id="toolbox-title"
          className="m-0 text-center font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive] text-[26px] font-light leading-[1.2] tracking-normal text-[#171717] max-[560px]:text-[23px]"
          data-gsap-header
        >
          <HighlightText>Toolbox</HighlightText>
        </h2>

        <div
          className="relative mx-auto h-[300px] w-full max-w-[520px]"
          data-gsap-body
        >
          <ul className="absolute inset-0 m-0 list-none p-0" id="toolbox-tools">
            {toolboxItems.map((tool, index) => {
              const position = toolboxPositions[index];
              const isSelected = selectedTool === tool.name;
              const iconStyle: CSSProperties = {
                left: isOpen ? position.left : "50%",
                top: isOpen ? position.top : "150px",
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
                transform: isOpen
                  ? `translateX(-50%) rotate(${position.rotation}) scale(1)`
                  : "translateX(-50%) rotate(0deg) scale(0.55)",
                transitionDelay: isOpen
                  ? `${120 + index * 70}ms`
                  : `${(toolboxItems.length - index - 1) * 40}ms`,
              };

              return (
                <li
                  className="group absolute z-10 h-[58px] w-[58px] max-[420px]:h-[52px] max-[420px]:w-[52px] motion-safe:transition-[left,top,opacity,transform] motion-safe:duration-700 motion-safe:[transition-timing-function:cubic-bezier(0.22,1.35,0.36,1)]"
                  key={tool.name}
                  style={iconStyle}
                >
                  <button
                    aria-label={`${tool.name}: ${tool.description}`}
                    aria-pressed={isSelected}
                    className="grid h-full w-full place-items-center rounded-[14px] border border-[#d8d4d1] bg-[#faf9f7] outline-none hover:border-[#bdb7b3] hover:bg-white focus-visible:ring-2 focus-visible:ring-[#817b77] focus-visible:ring-offset-2 motion-safe:transition-[transform,background-color,border-color] motion-safe:duration-[220ms] motion-safe:ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:rotate-0 motion-safe:focus-visible:-translate-y-2"
                    onClick={() =>
                      setSelectedTool((current) =>
                        current === tool.name ? null : tool.name,
                      )
                    }
                    type="button"
                  >
                    <span
                      className={isOpen ? "toolbox-floating-icon" : undefined}
                      style={{ animationDelay: `${index * 170}ms` }}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="h-8 w-8 object-contain max-[560px]:h-7 max-[560px]:w-7 motion-safe:transition-transform motion-safe:duration-[220ms] motion-safe:ease-out motion-safe:group-hover:scale-[1.06] motion-safe:group-focus-within:scale-[1.06]"
                        height={40}
                        src={tool.logo}
                        width={40}
                      />
                    </span>
                  </button>

                  <div
                    className={`pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 w-max max-w-[190px] -translate-x-1/2 bg-[rgba(232,232,230,0.82)] px-3 py-2 text-center shadow-[0_10px_28px_rgba(23,23,23,0.07)] backdrop-blur-xl motion-safe:transition-[opacity,transform] motion-safe:duration-200 ${
                      isSelected
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    }`}
                  >
                    <h3 className="m-0 text-[13px] font-medium leading-[1.35] text-[#171717]">
                      {tool.name}
                    </h3>
                    <p className="mb-0 mt-0.5 text-[12px] font-normal leading-[1.45] text-[#77716e]">
                      {tool.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            aria-controls="toolbox-tools"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close toolbox" : "Open toolbox"}
            className={`absolute left-1/2 top-1/2 z-20 h-[88px] w-[180px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-[8px] border border-[#bfb9b4] bg-[#e9e5e0] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_rgba(23,23,23,0.06)] outline-none hover:border-[#9f9893] focus-visible:ring-2 focus-visible:ring-[#817b77] focus-visible:ring-offset-4 max-[420px]:w-[160px] motion-safe:transition-[transform,border-color,background-color] motion-safe:duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:bg-[#e5e0da] ${
              isOpen ? "motion-safe:scale-[0.98]" : ""
            }`}
            onClick={toggleToolbox}
            type="button"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-3 top-3 h-px bg-[#c8c2bd]"
            />
            <span className="absolute inset-0 grid place-items-center pt-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#655f5b]">
              {isOpen ? "Close" : "Open"}
            </span>
            <span className="sr-only">
              {isOpen ? "Close toolbox" : "Open toolbox"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
