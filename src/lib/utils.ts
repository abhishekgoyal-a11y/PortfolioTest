export { cn } from "cn";

/**
 * Smoothly scroll to a section by id, respecting sticky navbar offset.
 */
export function scrollToId(id: string, offset = 72) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
