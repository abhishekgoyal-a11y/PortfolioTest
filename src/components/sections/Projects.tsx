"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-muted/30"
      aria-label="Projects"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I&rsquo;ve owned quality for."
          description="Sample project highlights — spanning UI, API, mobile, database, and backend validation."
        />

        <div
          className="grid gap-5 sm:grid-cols-2 sm:grid-rows-[auto_auto_1fr_auto_auto] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto_auto]"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
