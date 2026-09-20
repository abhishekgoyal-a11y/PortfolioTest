"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { personal } from "@/data/personal";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  label?: string;
};

export function ResumeButton({
  variant = "default",
  size = "lg",
  className,
  label = "Download Resume",
}: Props) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      aria-label="Download resume PDF"
      render={
        <a href={personal.resumePath} download>
          <Download className="h-4 w-4" />
          {label}
        </a>
      }
    />
  );
}
