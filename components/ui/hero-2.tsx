"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { actionLinks, brandLine, compatibilityChips, navLinks, productImage4 } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type HeroTwoProps = {
  showHeader?: boolean;
};

const highlights = [
  "Tailored resumes and cover letters",
  "Faster application workflows",
  "Final review stays with you",
];

export const Component = ({ showHeader = true }: HeroTwoProps) => {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(224,150,67,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(212,60,51,0.12),transparent_26%),linear-gradient(180deg,#fffdf9_0%,#f8f5ef_58%,#f5f1ea_100%)]" />
      <div className="absolute left-[-7rem] top-24 -z-10 h-56 w-56 rounded-full bg-[#e09643]/12 blur-3xl" />
      <div className="absolute right-[-8rem] top-16 -z-10 h-72 w-72 rounded-full bg-[#d43c33]/8 blur-3xl" />

      {showHeader && (
        <header className="relative z-20 pt-5 sm:pt-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-full border border-[#24364c]/10 bg-white/82 px-4 py-3 shadow-[0_16px_40px_rgba(36,54,76,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <BrandLogo />

                <nav className="hidden items-center gap-1 lg:flex">
                  {navLinks.map((link) => (
                    <Link
                      className="rounded-full px-4 py-2 text-sm font-semibold text-[#5d6c80] transition-colors hover:bg-[#24364c]/5 hover:text-[#24364c]"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                  <Link
                    className="rounded-full border border-[#24364c]/12 bg-white px-5 py-3 text-sm font-semibold text-[#24364c] transition-transform hover:-translate-y-0.5"
                    href={actionLinks.downloadExtension}
                  >
                    Download Extension
                  </Link>
                  <Link
                    className="rounded-full bg-[linear-gradient(135deg,#d43c33,#e09643)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(212,60,51,0.22)] transition-transform hover:-translate-y-0.5"
                    href={actionLinks.earlyAccess}
                  >
                    Get Early Access
                  </Link>
                </div>

                <button
                  aria-expanded={mobileMenuExpanded}
                  aria-label="Toggle navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#24364c]/12 bg-white text-[#24364c] md:hidden"
                  onClick={() => setMobileMenuExpanded((open) => !open)}
                  type="button"
                >
                  {mobileMenuExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {mobileMenuExpanded && (
              <div className="mt-3 rounded-[28px] border border-[#24364c]/10 bg-white/94 p-4 shadow-[0_20px_50px_rgba(36,54,76,0.1)] backdrop-blur-xl md:hidden">
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-[#24364c] transition-colors hover:bg-[#24364c]/5"
                      href={link.href}
                      key={link.href}
                      onClick={() => setMobileMenuExpanded(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 grid gap-3">
                  <Link
                    className="rounded-2xl border border-[#24364c]/12 bg-white px-4 py-3 text-center text-sm font-semibold text-[#24364c]"
                    href={actionLinks.downloadExtension}
                    onClick={() => setMobileMenuExpanded(false)}
                  >
                    Download Extension
                  </Link>
                  <Link
                    className="rounded-2xl bg-[linear-gradient(135deg,#d43c33,#e09643)] px-4 py-3 text-center text-sm font-semibold text-white"
                    href={actionLinks.earlyAccess}
                    onClick={() => setMobileMenuExpanded(false)}
                  >
                    Get Early Access
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      )}

      <section
        className={cn(
          "relative z-10 pb-16 sm:pb-20 lg:pb-24",
          showHeader ? "pt-10 sm:pt-12" : "pt-14 sm:pt-16 lg:pt-20",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.92fr)] lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/82 px-4 py-2 text-sm font-semibold text-[#24364c] shadow-[0_12px_28px_rgba(36,54,76,0.06)] backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-[#e09643]" />
                Intentional internship platform
              </div>

              <h1 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#24364c] sm:text-6xl lg:text-[4.9rem] xl:text-[5.4rem] [font-family:var(--font-display)]">
                Turn applications into interviews.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d6c80] sm:text-[1.28rem]">
                Fewer applications. More interviews. Finch helps students apply with
                more strategy, less wasted effort, and better interview odds.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#7b8798] sm:text-lg">
                {brandLine}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#d43c33,#e09643)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_34px_rgba(212,60,51,0.24)] transition-transform hover:-translate-y-0.5"
                  href={actionLinks.earlyAccess}
                >
                  Get Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-[#24364c]/12 bg-white/88 px-7 py-4 text-base font-semibold text-[#24364c] shadow-[0_12px_24px_rgba(36,54,76,0.06)] transition-transform hover:-translate-y-0.5"
                  href="/product#workflow"
                >
                  See Product Flow
                </Link>
              </div>

              <div className="mt-8 space-y-3 border-t border-[#24364c]/10 pt-6">
                {highlights.map((item) => (
                  <div className="flex items-start gap-3 text-sm text-[#5d6c80] sm:text-base" key={item}>
                    <span className="mt-0.5 inline-flex rounded-full bg-[#24364c] p-1 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-10 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(224,150,67,0.16),transparent_62%)] blur-3xl" />

              <div className="relative rounded-[36px] border border-white/80 bg-white/76 p-4 shadow-[0_28px_72px_rgba(36,54,76,0.12)] backdrop-blur-xl">
                <div className="rounded-[28px] bg-[#24364c] p-4">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                      Finch workflow
                    </div>
                  </div>

                  <Image
                    alt="Finch interface showing role-specific resume tailoring"
                    className="w-full rounded-[20px] border border-white/10 shadow-2xl shadow-black/20"
                    priority
                    src={productImage4}
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[24px] border border-[#24364c]/10 bg-[#fcfbf8]/92 px-4 py-4">
                  <div className="text-sm font-semibold text-[#24364c]">
                    Under 60 seconds for repetitive application steps
                  </div>

                  <div className="flex flex-wrap gap-2 sm:ml-auto">
                    {compatibilityChips.slice(0, 3).map((chip) => (
                      <span
                        className="rounded-full bg-[#24364c]/6 px-3 py-1.5 text-xs font-semibold text-[#24364c]"
                        key={chip}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
