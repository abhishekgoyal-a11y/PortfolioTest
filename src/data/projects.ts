export type Project = {
  id: string;
  name: string;
  description: string;
  approach: string[];
  impact?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "checkout-enhancement",
    name: "Checkout Enhancement QA",
    description:
      "End-to-end validation of the checkout workflow — pricing, order execution, settlement, and edge-case scenarios across UI and backend.",
    approach: [
      "UI workflow validation across checkout scenarios",
      "API validation for pricing and execution endpoints",
      "Database state verification post-execution",
      "Regression automation for critical checkout paths",
      "Cross-browser and cross-device validation",
    ],
    impact:
      "Automated critical regression scenarios and improved release confidence across the checkout workflow.",
    tech: ["Selenium", "Playwright", "RestAssured", "Postman", "MySQL"],
  },
  {
    id: "portfolio-workflows",
    name: "Portfolio Management Workflows",
    description:
      "QA for portfolio buy flows, holdings management, and backend orchestration workflows.",
    approach: [
      "Buy workflow validation via UI and API",
      "Portfolio data verification with database checks",
      "API and backend validation for pricing and holdings",
    ],
    impact:
      "Enabled clean launch of portfolio surfaces with full regression coverage.",
    tech: ["Playwright", "RestAssured", "MySQL", "Redis", "Kafka"],
  },
  {
    id: "fulfillment-delivery",
    name: "Order Fulfillment QA",
    description:
      "End-to-end validation of the fulfillment pipeline — from checkout to delivery.",
    approach: [
      "Checkout flow validation across payment paths",
      "API testing for order, address, and fulfilment services",
      "Backend delivery state transition validation",
      "Regression coverage for fulfillment workflows",
    ],
    impact:
      "Ensured reliable fulfillment workflows across a distributed delivery pipeline.",
    tech: ["Selenium", "Playwright", "RestAssured", "MySQL", "Kafka"],
  },
];
