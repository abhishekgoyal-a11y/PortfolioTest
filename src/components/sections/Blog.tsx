"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { articleCategories, articles } from "@/data/articles";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

export function Blog() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="blog" className="section-padding" aria-label="Blog and writing">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on QA, automation, and AI in testing."
          description="Long-form pieces coming soon. Edit src/data/articles.ts to publish real articles."
        />

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" /> Topics
          </span>
          {articleCategories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80"
            >
              {c}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
