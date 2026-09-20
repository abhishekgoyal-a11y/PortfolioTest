"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Container,
  Database,
  MonitorSmartphone,
  Waypoints,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
};

const capabilities: Capability[] = [
  {
    title: "UI Automation",
    description:
      "Reliable end-to-end web automation across critical product flows.",
    icon: MonitorSmartphone,
    tools: ["Selenium", "Playwright"],
  },
  {
    title: "API Automation",
    description:
      "Functional, regression, and contract testing across services.",
    icon: Waypoints,
    tools: ["RestAssured", "Postman"],
  },
  {
    title: "Mobile Automation",
    description: "Native and hybrid mobile automation on Android surfaces.",
    icon: MonitorSmartphone,
    tools: ["Appium"],
  },
  {
    title: "Test Frameworks",
    description:
      "Structured, maintainable frameworks with parameterized runs.",
    icon: Wrench,
    tools: ["TestNG", "Pytest"],
  },
  {
    title: "CI/CD",
    description: "Automated test execution on every commit and pipeline stage.",
    icon: Container,
    tools: ["Jenkins", "Git", "Docker"],
  },
  {
    title: "Observability",
    description: "Metrics, logs, and dashboards to isolate root cause fast.",
    icon: Activity,
    tools: ["Grafana", "Kibana"],
  },
  {
    title: "Backend Validation",
    description: "Data integrity and event validation across the stack.",
    icon: Database,
    tools: ["MySQL", "Redis", "Kafka"],
  },
];


export function AutomationShowcase() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="automation"
      className="section-padding"
      aria-label="Automation showcase"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Capabilities"
          title="Automation & Quality Engineering"
          description="From test design to observability — the layers I automate and validate to keep quality high."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={reduced ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={reduced ? undefined : { y: -3 }}
                className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-heading text-base font-semibold">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {cap.tools.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
