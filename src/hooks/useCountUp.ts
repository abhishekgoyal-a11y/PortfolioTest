"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/**
 * Animate a number from 0 → target when the element scrolls into view.
 * Returns [ref, currentValue].
 */
export function useCountUp(
  target: number,
  durationMs = 1400
): [React.RefObject<HTMLSpanElement | null>, number] {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      // Reduced-motion path: skip animation, snap to target once.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / durationMs, 1);
              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs, reduced]);

  return [ref, value];
}
