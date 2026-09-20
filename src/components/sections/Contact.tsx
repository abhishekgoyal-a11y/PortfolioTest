"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactBrandIcon } from "@/components/ui/ContactBrandIcon";
import { ContactForm } from "@/components/ui/ContactForm";
import { personal } from "@/data/personal";

export function Contact() {
  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let&rsquo;s build reliable software together."
          description="Open to QA / SDET / automation roles and collaborations. Reach out anytime."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="group flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <ContactBrandIcon name="Email" />
              <div>
                <div className="font-heading text-sm font-semibold">
                  Email
                </div>
                <div className="text-sm text-muted-foreground">
                  {personal.email}
                </div>
              </div>
            </a>

            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <ContactBrandIcon name="LinkedIn" />
              <div>
                <div className="font-heading text-sm font-semibold">
                  LinkedIn
                </div>
                <div className="text-sm text-muted-foreground">
                  {personal.links.linkedin.replace("https://", "")}
                </div>
              </div>
            </a>

            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <ContactBrandIcon name="GitHub" />
              <div>
                <div className="font-heading text-sm font-semibold">
                  GitHub
                </div>
                <div className="text-sm text-muted-foreground">
                  {personal.links.github.replace("https://", "")}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <ContactBrandIcon name="Location" />
              <div>
                <div className="font-heading text-sm font-semibold">
                  Location
                </div>
                <div className="text-sm text-muted-foreground">
                  {personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
