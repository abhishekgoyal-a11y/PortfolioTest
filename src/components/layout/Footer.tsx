import { TechLogo } from "@/components/ui/TechLogo";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-background/80"
    >
      <div className="container-wide flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-heading text-lg font-semibold">
            {personal.name}
          </div>
          <p className="text-sm text-muted-foreground">{personal.title}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub profile"
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
          >
            <TechLogo name="GitHub" className="h-4 w-4" />
          </a>
          <a
            aria-label="LinkedIn profile"
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
          >
            <TechLogo name="LinkedIn" className="h-4 w-4" />
          </a>
          <a
            aria-label={`Send email to ${personal.email}`}
            href={`mailto:${personal.email}`}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
          >
            <TechLogo name="Email" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
