import {
  siApachekafka,
  siAppium,
  siCharles,
  siClaudecode,
  siCrewai,
  siCursor,
  siDocker,
  siGit,
  siGitlab,
  siGmail,
  siGooglemaps,
  siGrafana,
  siJavascript,
  siJenkins,
  siKibana,
  siLangchain,
  siModelcontextprotocol,
  siMysql,
  siN8n,
  siOpenjdk,
  siPostman,
  siPython,
  siPytest,
  siRedis,
  siSelenium,
  siSwagger,
  siTypescript,
} from "simple-icons";

type IconEntry = { path: string; hex: string };

export type TechLogo =
  | { kind: "svg"; path: string; color: string; viewBox?: string }
  | { kind: "image"; src: string }
  | { kind: "themed-image"; light: string; dark: string };

const map: Record<string, IconEntry> = {
  Selenium: siSelenium,
  Appium: siAppium,
  Pytest: siPytest,
  Java: siOpenjdk,
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Postman: siPostman,
  Swagger: siSwagger,
  MySQL: siMysql,
  Redis: siRedis,
  Kafka: siApachekafka,
  Jenkins: siJenkins,
  Docker: siDocker,
  Git: siGit,
  GitLab: siGitlab,
  Gmail: siGmail,
  Email: siGmail,
  "Google Maps": siGooglemaps,
  Location: siGooglemaps,
  Grafana: siGrafana,
  Kibana: siKibana,
  Charles: siCharles,
  "Claude Code": siClaudecode,
  Cursor: siCursor,
  MCP: siModelcontextprotocol,
  LangChain: siLangchain,
  CrewAI: siCrewai,
  n8n: siN8n,
};

/** Skill / tag labels that differ from map keys */
const aliases: Record<string, string> = {
  "JavaScript / TypeScript": "TypeScript",
  "Cursor AI": "Cursor",
};

const imageLogos: Record<string, string> = {
  Playwright: "/tech/playwright.svg",
  TestNG: "/tech/testng.svg",
  RestAssured: "/tech/restassured.svg",
  LinkedIn: "/tech/linkedin.svg",
};

const themeImageLogos: Record<string, { light: string; dark: string }> = {
  GitHub: {
    light: "/tech/github-light.svg",
    dark: "/tech/github.svg",
  },
};

export type LogoTheme = "light" | "dark";

const neutralOverrides = new Set([
  "Kafka",
  "JavaScript",
  "Charles",
  "Cursor AI",
]);

/** Simple Icons uses black for some brands — swap to readable on-dark tints */
const onDarkBrandColors: Record<string, string> = {
  Java: "#F89820",
  Cursor: "#E5E5E5",
  MCP: "#E5E5E5",
};

function relativeLuminance(hex: string): number {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function resolveKey(name: string): string {
  return aliases[name] ?? name;
}

function resolveSvgColor(
  key: string,
  name: string,
  hex: string,
  theme: LogoTheme
): string {
  if (theme === "light") {
    if (neutralOverrides.has(key) || neutralOverrides.has(name)) return "currentColor";
    if (relativeLuminance(hex) < 0.35) return "currentColor";
    return `#${hex}`;
  }

  if (onDarkBrandColors[key]) return onDarkBrandColors[key];
  if (neutralOverrides.has(key) || neutralOverrides.has(name)) return "currentColor";
  if (relativeLuminance(hex) < 0.35) return "currentColor";
  return `#${hex}`;
}

export function getTechLogo(
  name: string,
  theme: LogoTheme = "dark"
): TechLogo | null {
  const key = resolveKey(name);

  const themed = themeImageLogos[key];
  if (themed) {
    return { kind: "themed-image", light: themed.light, dark: themed.dark };
  }

  const imageSrc = imageLogos[key] ?? imageLogos[name];
  if (imageSrc) {
    return { kind: "image", src: imageSrc };
  }

  const entry = map[key];
  if (!entry) return null;

  return {
    kind: "svg",
    path: entry.path,
    color: resolveSvgColor(key, name, entry.hex, theme),
  };
}
