"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  index?: number;
};

export function MetricCard({
  value,
  suffix = "",
  label,
  description,
  icon: Icon,
  index = 0,
}: Props) {
  const [ref, current] = useCountUp(value);
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div>
        <div className="text-4xl font-bold tracking-tight sm:text-5xl">
          <span ref={ref} className="text-gradient">
            {current}
          </span>
          <span className="text-gradient">{suffix}</span>
        </div>
        <div className="mt-1 font-heading text-base font-semibold">{label}</div>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
