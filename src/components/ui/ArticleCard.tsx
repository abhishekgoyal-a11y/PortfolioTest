"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  article: Article;
  index?: number;
};

export function ArticleCard({ article, index = 0 }: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.a
      href={article.href}
      target={article.href.startsWith("http") ? "_blank" : undefined}
      rel={article.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={reduced ? undefined : { y: -3 }}
      className={cn(
        "group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        article.placeholder && "border-dashed"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {article.category}
        </span>
        {article.placeholder && (
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Placeholder
          </span>
        )}
      </div>

      <h3 className="font-heading text-lg font-semibold leading-snug group-hover:text-primary">
        {article.title}
      </h3>

      <p className="text-sm text-muted-foreground">{article.description}</p>

      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {article.readTime}
        </span>
        <span className="inline-flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {article.date}
      </div>
    </motion.a>
  );
}
