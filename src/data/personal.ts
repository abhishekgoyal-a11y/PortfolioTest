export const personal = {
  name: "Jane Doe",
  title: "Software QA Engineer | SDET | Automation & AI-Assisted Quality Engineering",
  shortTitle: "Software QA Engineer & SDET",
  location: "Springfield, USA",
  experience: "4+ years",
  email: "jane.doe@example.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jane-doe-example/",
    github: "https://github.com/janedoe-example",
  },
  tagline:
    "QA Engineer with 4+ years of experience building automation, testing APIs and mobile applications, validating distributed backend systems, and debugging production issues. Experienced with Selenium, Playwright, Appium, RestAssured, and AI-assisted QA workflows.",
  about:
    "QA Engineer with 4+ years of experience designing and building automation frameworks, testing APIs and mobile applications, validating distributed backend systems, and debugging production issues at scale. I work across the full quality stack — from writing Selenium and Playwright automation to validating Kafka event flows, correlating Grafana/Kibana logs, and using AI-assisted workflows to accelerate test design, failure triage, and code review.",
  supportingTags: [
    "Manual Testing",
    "Automation Testing",
    "API Testing",
    "Mobile Testing",
    "Backend Testing",
    "CI/CD",
    "Production Debugging",
    "AI-assisted QA",
  ],
  resumePath: "/resume/Jane-Doe-Resume.pdf",
} as const;

export type Personal = typeof personal;
