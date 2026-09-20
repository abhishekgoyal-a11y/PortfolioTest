import { getTechLogo } from "@/lib/techLogos";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
};

export function TechLogo({ name, className }: Props) {
  const logo = getTechLogo(name);
  if (!logo) return null;

  if (logo.kind === "image") {
    return (
      <img
        src={logo.src}
        alt=""
        className={cn("h-3 w-3 shrink-0 object-contain", className)}
        aria-hidden
        loading="lazy"
        decoding="async"
      />
    );
  }

  const useCurrentColor = logo.color === "currentColor";

  return (
    <svg
      role="img"
      viewBox={logo.viewBox ?? "0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-3 w-3 shrink-0",
        useCurrentColor && "text-foreground/80",
        className
      )}
      style={useCurrentColor ? undefined : { color: logo.color }}
      aria-hidden
    >
      <path d={logo.path} fill="currentColor" />
    </svg>
  );
}
