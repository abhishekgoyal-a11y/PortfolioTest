"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactBrandIcon } from "@/components/ui/ContactBrandIcon";
import { TechLogo } from "@/components/ui/TechLogo";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const repos = [
  {
    name: "playwright-automation-framework",
    description:
      "End-to-end test automation framework using Playwright and TypeScript, with CI/CD integration and HTML reporting.",
    tags: ["TypeScript", "Playwright", "GitHub Actions"],
    href: personal.links.github,
  },
  {
    name: "api-automation-framework",
    description:
      "Java-based API test automation suite using RestAssured and TestNG, with data-driven testing and schema validation.",
    tags: ["Java", "RestAssured", "TestNG"],
    href: personal.links.github,
  },
  {
    name: "ai-qa-workflows",
    description:
      "AI-assisted QA workflow experiments using MCP, Claude Code, and n8n for test generation, failure triage, and automation.",
    tags: ["MCP", "Claude Code", "n8n"],
    href: personal.links.github,
  },
];

export function GitHubSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="github" className="section-padding bg-muted/30" aria-label="GitHub">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Open source"
          title="On GitHub"
          description="Automation frameworks, API testing utilities, and experiments in AI-assisted QA."
        />

        {/* Profile bar */}
        <div className="mb-8 flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <ContactBrandIcon name="GitHub" />
            <div>
              <div className="text-sm font-semibold">
                {personal.links.github.replace("https://", "")}
              </div>
              <p className="text-xs text-muted-foreground">
                Automation frameworks and QA tooling
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="default"
            render={
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                View profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            }
          />
        </div>

        {/* Repo cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={reduced ? undefined : { y: -3 }}
              className="flex cursor-pointer flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <TechLogo name="GitHub" className="h-4 w-4 shrink-0" />
                  {repo.name}
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
