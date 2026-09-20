import { TechLogo } from "@/components/ui/TechLogo";

type Props = {
  name: string;
};

export function ContactBrandIcon({ name }: Props) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 shadow-sm transition-colors group-hover:border-primary/30 dark:bg-muted/60"
      aria-hidden
    >
      <TechLogo name={name} className="h-5 w-5" />
    </div>
  );
}
