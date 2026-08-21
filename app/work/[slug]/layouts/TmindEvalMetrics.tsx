"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../../../../lib/gsap";

const metrics = [
  {
    end: 85,
    decimals: 0,
    suffix: "%",
    label: "Task completion",
    detail: "17 of 20 participants finished the request flow independently.",
    color: "#3d4aad",
    tint: "#f3f1ef",
  },
  {
    end: 4.3,
    decimals: 1,
    suffix: "/5",
    label: "Recommendation clarity",
    detail: "Average rating after viewing supervisor matches.",
    color: "#3d4aad",
    tint: "#f3f1ef",
  },
];

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

export function TmindEvalMetrics() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const { gsap } = getGSAP();
      const cards = root.querySelectorAll<HTMLElement>("[data-eval-card]");
      const numbers = root.querySelectorAll<HTMLElement>("[data-eval-number]");

      if (prefersReducedMotion()) {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
        numbers.forEach((node, index) => {
          const metric = metrics[index];
          if (!metric) {
            return;
          }
          node.textContent = `${formatValue(metric.end, metric.decimals)}${metric.suffix}`;
        });
        return;
      }

      gsap.set(cards, { autoAlpha: 0, y: 22 });

      numbers.forEach((node, index) => {
        const metric = metrics[index];
        if (!metric) {
          return;
        }
        node.textContent = `${formatValue(0, metric.decimals)}${metric.suffix}`;
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      timeline.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      numbers.forEach((node, index) => {
        const metric = metrics[index];
        if (!metric) {
          return;
        }

        const counter = { value: 0 };
        timeline.to(
          counter,
          {
            value: metric.end,
            duration: 1.15,
            ease: "power2.out",
            onUpdate: () => {
              node.textContent = `${formatValue(counter.value, metric.decimals)}${metric.suffix}`;
            },
          },
          index * 0.12,
        );
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="mt-6 grid gap-5 md:grid-cols-2">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="px-6 py-8"
          data-eval-card
          style={{ backgroundColor: metric.tint }}
        >
          <p
            className="eval-metric-number mb-4 mt-0"
            data-eval-number
            style={{ color: metric.color }}
          >
            {formatValue(0, metric.decimals)}
            {metric.suffix}
          </p>
          <p className="mb-2 mt-0 text-[11px] font-normal uppercase tracking-[0.1em] text-[#9a928e]">
            {metric.label}
          </p>
          <p className="mb-0 mt-0 text-[15px] font-normal leading-[1.55] text-[#66615f]">
            {metric.detail}
          </p>
        </article>
      ))}
    </div>
  );
}
