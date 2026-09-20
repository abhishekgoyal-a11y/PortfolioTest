"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechBadge } from "./TechBadge";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  title: string;
  description: string;
  skills: string[];
  icon?: LucideIcon;
  index?: number;
  className?: string;
};

export function SkillCard({
  title,
  description,
  skills,
  icon: Icon,
  index = 0,
  className,
}: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={reduced ? undefined : { y: -3 }}
      className={cn(
        "group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div>
          <h3 className="font-heading text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {skills.map((skill) => (
          <TechBadge key={skill}>{skill}</TechBadge>
        ))}
      </div>
    </motion.div>
  );
}
