import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "brand";
};

export function TechBadge({
  children,
  className,
  variant = "default",
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium transition-colors",
        variant === "default" &&
          "border-border bg-card text-foreground hover:border-primary/40",
        variant === "muted" &&
          "border-border bg-muted text-muted-foreground",
        variant === "brand" &&
          "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15",
        className
      )}
    >
      {children}
    </span>
  );
}
