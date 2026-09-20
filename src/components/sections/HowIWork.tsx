"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Eye,
  FlaskConical,
  Layers,
  Lightbulb,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    icon: BookOpen,
    label: "Understand",
    detail: "Requirements, architecture & acceptance criteria",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Lightbulb,
    label: "Design",
    detail: "Risk-based scenarios and test strategy",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Cpu,
    label: "Automate",
    detail: "UI, API and mobile automation",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: FlaskConical,
    label: "Validate",
    detail: "DB, Redis, Kafka and service integrations",
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Eye,
    label: "Observe",
    detail: "Grafana, Kibana and production signals",
    color: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-500/10",
  },
  {
    icon: Layers,
    label: "Improve",
    detail: "AI-assisted analysis and automation",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
];

export function HowIWork() {
  const reduced = usePrefersReducedMotion();

  return (
    <section aria-label="How I work" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Approach"
          title="Quality Engineering, not just test execution."
          description="How I think about and deliver quality across a product lifecycle."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={reduced ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={reduced ? undefined : { y: -3 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Step number watermark */}
                <span
                  aria-hidden
                  className="absolute right-3 top-1 select-none text-7xl font-black leading-none text-foreground/[0.04]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Top gradient strip */}
                <div
                  aria-hidden
                  className={`absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r ${step.color}`}
                />

                <div className="relative">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${step.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${step.iconColor}`} />
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {step.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
