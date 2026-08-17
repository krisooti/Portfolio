import { SeattleStatus } from "./SeattleStatus";
import { HighlightText } from "./HighlightText";

const EMAIL = "krisooti08@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kristiskim/";

export function AsciiFooter() {
  const linkClassName =
    "text-[12px] font-light leading-none text-[#6b6664] transition-colors duration-200 hover:text-[#171717]";

  return (
    <footer className="relative w-full border-t border-black/[0.06] bg-transparent px-5 py-8 md:px-8 md:py-9">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 max-[700px]:flex-col max-[700px]:items-start">
        <div className="text-[12px] font-light leading-[1.6] text-[#6b6664]">
          <p className="m-0">I&apos;m currently in Seattle.</p>
          <SeattleStatus />
        </div>

        <div className="grid justify-items-end gap-2 text-[12px] font-light leading-[1.6] text-[#6b6664] max-[700px]:justify-items-start">
          <div className="flex flex-wrap items-center justify-end gap-4 max-[700px]:justify-start">
            <a className={linkClassName} href={`mailto:${EMAIL}`}>
              <HighlightText>{EMAIL}</HighlightText>
            </a>
            <a
              className={linkClassName}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HighlightText>LinkedIn</HighlightText>
            </a>
          </div>
          <p className="m-0 text-[#8a8583]">
            Open for freelance and coffee chat.
          </p>
        </div>
      </div>
    </footer>
  );
}
