"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn, getInitials, scrollToId } from "@/lib/utils";
import { personal } from "@/data/personal";

type NavLink = { id: string; label: string };

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "ai-qa", label: "AI & QA" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.id), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(id: string) {
    setMobileOpen(false);
    scrollToId(id);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-wide flex h-16 items-center justify-between"
      >
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("home");
          }}
          className="flex items-center gap-2 font-heading text-base font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            {getInitials(personal.name)}
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <ResumeButton size="sm" label="Resume" />
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                  <SheetDescription className="sr-only">
                    Portfolio sections
                  </SheetDescription>
                </SheetHeader>
                <ul className="flex flex-col gap-1 px-4">
                  {NAV_LINKS.map((link) => {
                    const isActive = active === link.id;
                    return (
                      <li key={link.id}>
                        <SheetClose
                          render={
                            <a
                              href={`#${link.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNav(link.id);
                              }}
                              className={cn(
                                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground hover:bg-muted"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              {link.label}
                            </a>
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 border-t border-border px-4 pt-4">
                  <ResumeButton className="w-full" size="default" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
