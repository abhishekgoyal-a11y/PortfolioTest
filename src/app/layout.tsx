import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { personal } from "@/data/personal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://portfolio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Jane Doe | Software QA Engineer | SDET | QA Automation",
    template: "%s | Jane Doe",
  },
  description:
    "Portfolio of Jane Doe, Software QA Engineer and SDET specializing in QA automation, API testing, mobile testing, production debugging and AI-assisted quality engineering.",
  keywords: [
    "Jane Doe",
    "QA Engineer",
    "SDET",
    "QA Automation",
    "Software Testing",
    "Selenium",
    "Playwright",
    "Appium",
    "RestAssured",
    "API Testing",
    "Mobile Testing",
    "AI in QA",
    "Claude Code",
    "Production Debugging",
    "Kafka",
    "MySQL",
    "Redis",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title:
      "Jane Doe | Software QA Engineer | SDET | QA Automation",
    description:
      "Portfolio of Jane Doe, Software QA Engineer and SDET specializing in QA automation, API testing, mobile testing, production debugging and AI-assisted quality engineering.",
    siteName: `${personal.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jane Doe | Software QA Engineer | SDET | QA Automation",
    description:
      "Portfolio of Jane Doe, Software QA Engineer and SDET.",
    creator: "@janedoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Software QA Engineer",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  sameAs: [personal.links.linkedin, personal.links.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Springfield",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Software Testing",
    "QA Automation",
    "Selenium",
    "Playwright",
    "Appium",
    "RestAssured",
    "API Testing",
    "Mobile Testing",
    "Production Debugging",
    "AI-assisted Quality Engineering",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
