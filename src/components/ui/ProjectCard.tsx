"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";
import { TechLogo } from "@/components/ui/TechLogo";

type Props = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index = 0, className }: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={reduced ? undefined : { y: -3 }}
      className={cn(
        "group relative grid h-full grid-rows-[auto_auto_1fr_auto_auto] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/30 sm:row-span-5 sm:grid-rows-subgrid",
        className
      )}
    >
      {/* Gradient top border */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-5 pb-0">
        <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
          {project.name}
        </h3>
        <span
          aria-hidden
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform group-hover:rotate-6"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Scope */}
      <div className="px-5 pt-3 pb-4">
        <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
          Scope
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Testing — 1fr row keeps Impact aligned across cards in the same grid row */}
      <div className="flex min-h-0 flex-col border-t border-border/60 px-5 py-4">
        <h4 className="mb-2.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-foreground/60">
          <CheckCircle2 className="h-3 w-3 text-primary" />
          Testing
        </h4>
        <ul className="space-y-1.5">
          {project.approach.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/50" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.impact && (
        <div className="border-t border-border/60 bg-primary/[0.04] px-5 py-3.5">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
            <TrendingUp className="h-3 w-3" />
            Impact
          </div>
          <p className="text-sm leading-relaxed text-foreground/85">{project.impact}</p>
        </div>
      )}

      <div className="flex flex-wrap content-start gap-1.5 border-t border-border/60 px-5 py-3.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
          >
            <TechLogo name={t} className="h-2.5 w-2.5" />
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
