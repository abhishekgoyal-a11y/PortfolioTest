"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";
import { TechLogo } from "@/components/ui/TechLogo";

const categoryAccents: Record<string, string> = {
  automation:    "bg-violet-500",
  programming:   "bg-blue-500",
  api:           "bg-cyan-500",
  "backend-data":"bg-orange-500",
  cicd:          "bg-green-500",
  observability: "bg-yellow-500",
  "ai-qa":       "bg-indigo-500",
};

export function Skills() {
  const reduced = usePrefersReducedMotion();
  return (
    <section id="skills" className="section-padding bg-muted/30" aria-label="Skills">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools and disciplines I work with."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={reduced ? undefined : { opacity: 0, x: -10 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group flex flex-col gap-3 border-b border-border/70 px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6 hover:bg-muted/30 transition-colors"
            >
              {/* Category label with color dot */}
              <div className="flex w-40 shrink-0 items-center gap-2">
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${categoryAccents[cat.id] ?? "bg-primary"}`}
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                  {cat.title}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      <TechLogo name={skill} />
                      {skill}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
