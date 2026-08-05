"use client";

import { useCardHover } from "../hooks/useCardHover";
import { usePageMotion } from "../hooks/usePageMotion";
import { useReveal } from "../hooks/useReveal";

export function PortfolioMotion() {
  usePageMotion();
  useReveal();
  useCardHover();

  return null;
}
