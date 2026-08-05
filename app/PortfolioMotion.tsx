"use client";

import { useCardHover } from "../hooks/useCardHover";
import { useHomeHeroAnimation } from "../hooks/useHomeHeroAnimation";
import { usePageMotion } from "../hooks/usePageMotion";
import { useReveal } from "../hooks/useReveal";

export function PortfolioMotion() {
  usePageMotion();
  useHomeHeroAnimation();
  useReveal();
  useCardHover();

  return null;
}
