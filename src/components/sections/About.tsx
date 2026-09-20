"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Database,
  GitBranch,
  Radio,
  Smartphone,
  Sparkles,
  Webhook,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactBrandIcon } from "@/components/ui/ContactBrandIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type ExpertiseArea = {
  icon: LucideIcon;
  title: string;
  detail: string;
  iconBg: string;
  iconColor: string;
  gradient: string;
};

const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Sparkles,
    title: "UI Automation",
    detail: "Selenium, Playwright",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Webhook,
    title: "API Automation",
    detail: "RestAssured, Postman",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Smartphone,
    title: "Mobile Automation",
    detail: "Appium",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
    gradient: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    icon: Database,
    title: "Database Validation",
    detail: "MySQL, Redis",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Radio,
    title: "Backend Validation",
    detail: "Kafka event flows",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-500",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
  {
    icon: Activity,
    title: "Production Debugging",
    detail: "Grafana, Kibana",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    detail: "Jenkins, Docker",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Bot,
    title: "AI-Assisted QA",
    detail: "Claude Code, Cursor AI",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    gradient: "from-rose-500/20 to-rose-500/5",
  },
];

export function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="about" className="section-padding" aria-label="About me">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Quality engineering, end-to-end."
          description="Building automation, validating distributed systems, and keeping production reliable — from test design to live observability."
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.article
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-3 lg:p-8"
          >
            <div
              aria-hidden
              className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40"
            />
            <p className="text-base leading-relaxed text-foreground/90">
              {personal.about}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {personal.supportingTags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/80">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.aside
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Experience
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gradient leading-none">
                {personal.experience}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Across web, API, mobile, and backend quality engineering.
              </p>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="group flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <ContactBrandIcon name="Email" />
              <div className="min-w-0">
                <div className="font-heading text-sm font-semibold">Email</div>
                <div className="truncate text-sm text-muted-foreground">
                  {personal.email}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <ContactBrandIcon name="Location" />
              <div>
                <div className="font-heading text-sm font-semibold">Location</div>
                <div className="text-sm text-muted-foreground">
                  {personal.location}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Core expertise
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={reduced ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={reduced ? undefined : { y: -2 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md hover:border-primary/25"
                >
                  <div
                    aria-hidden
                    className={`absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r ${area.gradient}`}
                  />
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${area.iconBg}`}
                  >
                    <Icon className={`h-4 w-4 ${area.iconColor}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {area.title}
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {area.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
