import Image from "next/image";

import { HighlightText } from "../HighlightText";

type ToolboxItem = {
  name: string;
  description: string;
  logo: string;
};

const toolboxItems: ToolboxItem[] = [
  {
    name: "Figma",
    description: "Product design",
    logo: "/images/toolbox/figma-original.svg",
  },
  {
    name: "FigJam",
    description: "Research & collaboration",
    logo: "/images/toolbox/figjam.svg",
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

export function ToolboxSection() {
  return (
    <section
      aria-labelledby="toolbox-title"
      className="about-story-section mx-auto mt-[clamp(82px,11vw,132px)] w-[min(100%,960px)] border-t border-[var(--line)] pt-[clamp(54px,7vw,78px)] max-[560px]:mt-[72px] max-[560px]:pt-11"
      data-gsap-section
    >
      <div className="grid grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-[clamp(40px,7vw,96px)] max-[760px]:grid-cols-1 max-[760px]:gap-8">
        <h2
          id="toolbox-title"
          className="m-0 self-start font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive] text-[26px] font-light leading-[1.2] tracking-normal text-[#171717] max-[560px]:text-[23px]"
          data-gsap-header
        >
          <HighlightText>Toolbox</HighlightText>
        </h2>

        <ul
          className="m-0 grid list-none grid-cols-2 gap-x-10 p-0 max-[560px]:grid-cols-1"
          data-gsap-body
        >
          {toolboxItems.map((tool) => (
            <li
              className="group min-w-0 border-b border-[var(--line)] py-5 first:pt-0 motion-safe:transition-transform motion-safe:duration-[220ms] motion-safe:ease-out motion-safe:hover:-translate-y-0.5"
              key={tool.name}
            >
              <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center"
                >
                  <Image
                    alt=""
                    className="h-10 w-10 object-contain motion-safe:transition-transform motion-safe:duration-[220ms] motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                    height={44}
                    src={tool.logo}
                    width={44}
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="m-0 text-[15px] font-medium leading-[1.35] text-[#171717]">
                    {tool.name}
                  </h3>
                  <p className="mb-0 mt-1 text-[13px] font-light leading-[1.5] text-[#8a8380] motion-safe:transition-colors motion-safe:duration-[220ms] motion-safe:group-hover:text-[#5d5856]">
                    {tool.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
