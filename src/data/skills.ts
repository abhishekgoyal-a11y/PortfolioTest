export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "automation",
    title: "Automation",
    skills: ["Selenium", "Playwright", "Appium", "TestNG", "Pytest"],
  },
  {
    id: "programming",
    title: "Programming",
    skills: ["Java", "Python", "JavaScript / TypeScript"],
  },
  {
    id: "api",
    title: "API",
    skills: ["RestAssured", "Postman", "Swagger"],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    skills: ["MySQL", "Redis", "Kafka"],
  },
  {
    id: "cicd",
    title: "CI/CD & DevOps",
    skills: ["Jenkins", "Docker", "Git", "GitHub", "GitLab"],
  },
  {
    id: "observability",
    title: "Observability",
    skills: ["Grafana", "Kibana", "Charles"],
  },
  {
    id: "ai-qa",
    title: "AI-Assisted QA",
    skills: ["Claude Code", "Cursor AI", "MCP", "LangChain", "CrewAI", "n8n"],
  },
];
