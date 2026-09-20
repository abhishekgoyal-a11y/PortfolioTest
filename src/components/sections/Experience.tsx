"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-label="Experience"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building quality."
          description="Roles focused on high-impact QA ownership across web, mobile, and backend systems."
        />
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
