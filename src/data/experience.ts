export type StackGroup = { label: string; items: string[] };

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  stackGroups: StackGroup[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software QA Engineer",
    company: "Acme Fintech Inc.",
    period: "Feb 2025 – Present",
    location: "Springfield, USA",
    summary:
      "Owning quality across high-traffic investment product workflows — from automation strategy and framework design to production debugging and AI-assisted quality engineering.",
    achievements: [
      "Improved automation coverage from ~20% to ~90% across critical product flows using Selenium and Playwright, enabling faster regression cycles.",
      "Debugged 100+ production issues by correlating Grafana and Kibana logs, API traces, database state, and downstream service behavior.",
      "Built Java and Python automation frameworks covering UI, API, mobile, and backend workflows — integrated with Jenkins CI/CD pipelines.",
      "Designed and maintained API test suites with RestAssured and Postman, covering functional, regression, and edge-case scenarios.",
      "Automated mobile flows with Appium across Android surfaces, covering buy, sell, and portfolio management journeys.",
      "Validated backend behavior across MySQL, Redis, and Kafka — including data integrity checks, cache state, and event-driven workflow validation.",
      "Performed end-to-end regression testing for complex, multi-service product workflows across checkout, portfolio, and fulfillment surfaces.",
    ],
    stackGroups: [
      { label: "Automation", items: ["Selenium", "Playwright", "Appium"] },
      { label: "Languages", items: ["Java", "Python"] },
      { label: "API", items: ["RestAssured", "Postman"] },
      { label: "Backend", items: ["MySQL", "Redis", "Kafka"] },
      { label: "Observability", items: ["Grafana", "Kibana"] },
      { label: "CI/CD", items: ["Jenkins", "Docker"] },
    ],
  },
];
