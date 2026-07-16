import type { ReactNode } from "react";

type HighlightTextProps = {
  children: ReactNode;
  className?: string;
  persistent?: boolean;
};

export function HighlightText({
  children,
  className = "",
  persistent = false,
}: HighlightTextProps) {
  return (
    <span
      className={`marker-highlight${
        persistent ? " marker-highlight--persistent" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
