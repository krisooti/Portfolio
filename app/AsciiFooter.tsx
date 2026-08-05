import { SeattleStatus } from "./SeattleStatus";

const ASCII_ART = `                     ★ ˚₊‧           ⊹           ‧₊˚ ★
        ⊹                                   ⊹

                  (\\_/)\     (\\_/)
                  ( •.• )   ( •.• )
                  / >🤍< \\  / >🤍< \\

              ♡  thanks for stopping by ♡`;

const EMAIL = "krisooti08@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kristiskim/";

export function AsciiFooter() {
  const linkClassName =
    "inline-flex items-center border border-[#ded8d4] px-3 py-1.5 text-[12px] font-light leading-none text-[#6b6664] transition-colors duration-200 hover:border-[#bdb7b3] hover:text-[#171717]";

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--background)] px-5 py-8 md:px-8 md:py-10">
      <div className="flex min-h-[132px] w-full items-end justify-between gap-10 max-[700px]:flex-col max-[700px]:items-start">
        <div className="text-[12px] font-light leading-[1.6] text-[#6b6664]">
          <p className="m-0 mb-2">I&apos;m currently in Seattle.</p>
          <SeattleStatus />
        </div>

        <div className="ml-auto grid max-w-full justify-items-end gap-4 max-[700px]:ml-0 max-[700px]:justify-items-start">
          <div className="max-w-full overflow-hidden">
            <pre
              aria-hidden="true"
              className="m-0 whitespace-pre text-center font-mono text-[clamp(6px,0.85vw,12px)] leading-[1.08] text-[#8f8986]"
            >
              {ASCII_ART}
            </pre>
          </div>

          <div className="grid justify-items-end gap-4 text-[12px] font-light leading-[1.6] text-[#6b6664] max-[700px]:justify-items-start">
            <div className="flex flex-wrap justify-end gap-2 max-[700px]:justify-start">
              <a className={linkClassName} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a
                className={linkClassName}
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="m-0 text-right text-[#8a8583] max-[700px]:text-left">
              Open for freelance and coffee chat.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
