"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { getTechLogo, type LogoTheme } from "@/lib/techLogos";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
};

function subscribe() {
  return () => {};
}

export function TechLogo({ name, className }: Props) {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isLight = mounted && resolvedTheme === "light";
  const theme: LogoTheme = isLight ? "light" : "dark";

  const logo = getTechLogo(name, theme);
  if (!logo) return null;

  if (logo.kind === "themed-image") {
    return (
      <img
        src={logo.dark}
        alt=""
        className={cn(
          "h-3 w-3 shrink-0 object-contain",
          isLight && "invert",
          className
        )}
        aria-hidden
        loading="lazy"
        decoding="async"
      />
    );
  }

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
