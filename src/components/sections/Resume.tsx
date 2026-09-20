"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

/**
 * Resume section
 *
 * The resume PDF should be placed at:
 *   /public/resume/Jane-Doe-Resume.pdf
 *
 * Buttons render regardless — if the file is missing, download and view will
 * fail gracefully (404). Add the file and everything just works.
 */
export function Resume() {
  return (
    <section
      id="resume"
      className="section-padding bg-muted/30"
      aria-label="Resume"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Resume"
          title="Download my resume."
          description="4+ years of experience across UI, API, mobile, backend testing, automation, and AI-assisted quality engineering."
        />

        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-6 w-6" />
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-5"
              render={
                <a
                  href={personal.resumePath}
                  download
                  aria-label="Download resume PDF"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5"
              render={
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume in a new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </a>
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
}
