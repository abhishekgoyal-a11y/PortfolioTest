"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const metrics = [
  { value: "4+",   label: "Years Experience" },
  { value: "90%",  label: "Automation Coverage" },
  { value: "100+", label: "Production Issues Debugged" },
];

const tags = [
  { value: "Web · API · Mobile · Backend", label: "Testing Layers" },
  { value: "Java · Python · TypeScript",   label: "Languages" },
  { value: "AI-Assisted QA",               label: "Claude Code · Cursor · MCP" },
];

export function CareerSnapshot() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="border-y border-border bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6 lg:divide-x">
          {/* Big number metrics */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col justify-center gap-1 px-6 py-6 lg:col-span-1"
            >
              <span className="text-4xl font-bold tracking-tight text-gradient leading-none">
                {m.value}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {m.label}
              </span>
            </motion.div>
          ))}

          {/* Text tags */}
          {tags.map((t, i) => (
            <motion.div
              key={t.value}
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: (metrics.length + i) * 0.07 }}
              className="flex flex-col justify-center gap-1 px-6 py-6 lg:col-span-1"
            >
              <span className="text-sm font-semibold text-foreground leading-snug">
                {t.value}
              </span>
              <span className="text-xs text-muted-foreground">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
