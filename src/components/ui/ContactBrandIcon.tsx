import { TechLogo } from "@/components/ui/TechLogo";

type Props = {
  name: string;
};

export function ContactBrandIcon({ name }: Props) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/80 transition-colors group-hover:bg-muted"
      aria-hidden
    >
      <TechLogo name={name} className="h-5 w-5" />
    </div>
  );
}
