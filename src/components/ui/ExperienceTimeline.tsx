"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type Props = { items: ExperienceItem[] };

export function ExperienceTimeline({ items }: Props) {
  const reduced = usePrefersReducedMotion();
  return (
    <ol className="relative border-l-2 border-primary/20 pl-8">
      {items.map((item, i) => (
        <motion.li
          key={`${item.company}-${item.role}`}
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="mb-10 last:mb-0"
        >
          {/* Timeline dot */}
          <span
            aria-hidden
            className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-sm"
          >
            <Briefcase className="h-3 w-3" />
          </span>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {/* Gradient top bar */}
            <div
              aria-hidden
              className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-transparent"
            />

            <div className="p-6">
              {/* Header */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary/80">
                    {item.company}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end">
                  <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Summary */}
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>

              {/* Achievements */}
              <ul className="mb-6 space-y-2.5">
                {item.achievements.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span className="leading-relaxed text-foreground/85">{a}</span>
                  </li>
                ))}
              </ul>

              {/* Grouped tech stack */}
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <h4 className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  <span aria-hidden className="h-1 w-3 rounded-full bg-primary/50" />
                  Tech Stack
                </h4>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {item.stackGroups.map((group) => (
                    <div key={group.label} className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.label}
                      </span>
                      <span className="text-sm text-foreground/80">
                        {group.items.join(" · ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
