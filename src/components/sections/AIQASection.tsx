"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ClipboardList,
  Code2,
  GitPullRequest,
  SearchX,
  Terminal,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const phases = [
  {
    icon: ClipboardList,
    phase: "Requirements",
    activity: "Test case generation",
    description:
      "Use AI to generate comprehensive test scenarios from requirements, user stories, and acceptance criteria — covering happy paths, edge cases, and negative flows.",
  },
  {
    icon: BrainCircuit,
    phase: "Test Design",
    activity: "Coverage strategy",
    description:
      "Refine test coverage, identify risk areas, and prioritize scenarios based on business impact and system complexity.",
  },
  {
    icon: Code2,
    phase: "Automation",
    activity: "Automation development",
    description:
      "Use AI coding agents to accelerate framework development — generating boilerplate, page objects, and test utilities, then reviewing and refining the output.",
  },
  {
    icon: GitPullRequest,
    phase: "Code Review",
    activity: "PR review",
    description:
      "Analyze automation PRs for test design issues, maintainability gaps, missing assertions, and framework consistency — before they reach CI.",
  },
  {
    icon: SearchX,
    phase: "Failure Analysis",
    activity: "Failed-test triage",
    description:
      "Feed stack traces, API responses, and logs into AI workflows to identify root cause faster — distinguishing genuine defects from environment or data issues.",
  },
  {
    icon: Terminal,
    phase: "Production Debugging",
    activity: "Log analysis",
    description:
      "Correlate Grafana metrics, Kibana logs, API traces, and service state to investigate production incidents and identify the point of failure.",
  },
];

const tools = ["Claude Code", "Cursor AI", "MCP", "LangChain", "CrewAI", "n8n"];

export function AIQASection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="ai-qa" className="section-padding" aria-label="AI-Assisted QA">
      <div className="container-wide">
        <SectionHeading
          eyebrow="AI & QA"
          title="AI-Assisted Quality Engineering"
          description="How I use AI tools across the full QA lifecycle — from requirements to production."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={reduced ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={reduced ? undefined : { y: -3 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md hover:border-primary/30"
              >
                {/* Step number watermark */}
                <span
                  aria-hidden
                  className="absolute right-3 top-1 select-none text-7xl font-black leading-none text-foreground/[0.04]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Left accent bar */}
                <div
                  aria-hidden
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-primary/80 to-primary/20"
                />

                <div className="relative pl-3">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary/70">
                        {phase.phase}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {phase.activity}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools strip */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4"
        >
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            <Workflow className="h-3.5 w-3.5" />
            Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-card px-2.5 py-1 text-xs font-medium text-foreground/85"
              >
                <TechLogo name={t} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
