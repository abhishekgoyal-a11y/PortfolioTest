"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";
import { cn, scrollToId } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16 sm:pb-20 lg:pb-24"
      aria-label="Introduction"
    >
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/60 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 opacity-40 blur-3xl"
      />
      {!reduced && (
        <>
          <FloatingDot className="left-[12%] top-[22%]" delay={0} />
          <FloatingDot className="left-[80%] top-[30%]" delay={1.6} />
          <FloatingDot className="left-[70%] top-[65%]" delay={2.8} />
          <FloatingDot className="left-[20%] top-[70%]" delay={0.8} />
        </>
      )}

      <div className="container-wide">
        <motion.div
          initial="hidden"
          animate="show"
          variants={reduced ? undefined : container}
          className="flex max-w-4xl flex-col gap-6"
        >
          <motion.div
            variants={reduced ? undefined : item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-500/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for QA / SDET roles
            <span className="mx-1 text-muted-foreground">·</span>
            <MapPin className="h-3 w-3" />
            {personal.location}
          </motion.div>

          <motion.h1
            variants={reduced ? undefined : item}
            className="heading-xl"
          >
            Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : item}
            className="font-heading text-lg text-muted-foreground sm:text-xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={reduced ? undefined : item}
            className="max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={reduced ? undefined : item}
            className="flex flex-wrap gap-2"
          >
            {personal.supportingTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-foreground/80"
              >
                <Sparkles
                  aria-hidden
                  className="h-3 w-3 text-primary/70"
                />
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={reduced ? undefined : item}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button
              size="lg"
              className="h-11 px-5"
              onClick={() => scrollToId("projects")}
              aria-label="View my work"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5"
              render={
                <a
                  href={personal.resumePath}
                  download
                  aria-label="Download resume PDF"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingDot({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-2 w-2 rounded-full bg-primary/60 shadow-[0_0_24px_6px_rgba(99,102,241,0.35)]",
        className
      )}
      initial={{ y: 0, opacity: 0.4 }}
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
