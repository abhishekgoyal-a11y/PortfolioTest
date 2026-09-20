export type Article = {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
  placeholder?: boolean;
};

export const articleCategories = [
  "QA Automation",
  "Selenium",
  "Playwright",
  "API Testing",
  "AI in QA",
  "Testing Strategies",
  "Debugging",
  "Career/Interview Prep",
] as const;

export const articles: Article[] = [
  {
    id: "placeholder-1",
    title: "Building Resilient Playwright Suites for Real Product Workflows",
    description:
      "How to design Playwright suites that stay stable under real product change — locators, waits, and test data patterns that scale.",
    category: "Playwright",
    readTime: "8 min read",
    date: "Coming soon",
    href: "#",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    title: "AI-Assisted QA: A Practical Workflow with Claude Code and MCP",
    description:
      "A hands-on look at using AI coding agents to accelerate test case generation, automation development, and failure triage.",
    category: "AI in QA",
    readTime: "10 min read",
    date: "Coming soon",
    href: "#",
    placeholder: true,
  },
  {
    id: "placeholder-3",
    title: "Debugging Production Incidents with Grafana + Kibana as a QA",
    description:
      "How QA engineers can own production debugging — correlating metrics, logs, and API traces to isolate root cause quickly.",
    category: "Debugging",
    readTime: "7 min read",
    date: "Coming soon",
    href: "#",
    placeholder: true,
  },
];
