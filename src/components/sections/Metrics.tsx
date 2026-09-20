"use client";

import { Bug, Layers, Percent, Timer } from "lucide-react";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const metrics = [
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
    description: "Hands-on QA across web, API, mobile, and backend.",
    icon: Timer,
  },
  {
    value: 90,
    suffix: "%",
    label: "Automation Coverage",
    description: "Lifted from ~20% to 90% on critical flows.",
    icon: Percent,
  },
  {
    value: 100,
    suffix: "+",
    label: "Production Issues Debugged",
    description: "Root-caused using logs, metrics, and API traces.",
    icon: Bug,
  },
  {
    value: 5,
    suffix: "+",
    label: "Testing Layers",
    description: "UI, API, mobile, DB, and event-driven backend.",
    icon: Layers,
  },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="section-padding"
      aria-label="Impact metrics"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Impact"
          title="Numbers that matter."
          description="Concrete outcomes from owning quality across large, distributed product surfaces."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              description={m.description}
              icon={m.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
