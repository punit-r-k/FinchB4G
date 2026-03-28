"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Download,
  Focus,
  LineChart,
  Menu,
  Package,
  Pencil,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type LandingDemoMedia = {
  posterSrc: string | null;
  videoSrc: string | null;
};

type PricingPlan = {
  accent: "amber" | "blue";
  billingLabel: string;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  name: string;
  popular?: boolean;
  priceLabel: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#customization", label: "Customization" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

const SOCIAL_PROOF = [
  "AAcuisine",
  "Houston Bee Rescue",
  "East Bay Robotics",
  "Sunset Creative",
  "Brimstone Events",
] as const;

const DASHBOARD_TABS = ["Overview", "Linkets", "Profiles", "Leads"] as const;

const DASHBOARD_STATS = [
  { delta: "+32 vs last quarter", label: "Leads collected", value: "128" },
  { delta: "+19% vs last quarter", label: "Scans", value: "842" },
  { delta: "Leads ÷ scans in this range", label: "Conversion rate", value: "15.2%" },
  { delta: "Linkets that got at least one scan", label: "Active Linkets", value: "7" },
] as const;

const DASHBOARD_BARS = [
  { label: "Jan", value: 72 },
  { label: "Feb", value: 35 },
  { label: "Mar", value: 58 },
  { label: "Apr", value: 82 },
  { label: "May", value: 22 },
  { label: "Jun", value: 48 },
  { label: "Jul", value: 64 },
  { label: "Aug", value: 38 },
  { label: "Sep", value: 52 },
  { label: "Oct", value: 44 },
  { label: "Nov", value: 70 },
  { label: "Dec", value: 86 },
] as const;

const DASHBOARD_TREND = [28, 34, 39, 46, 53, 61, 69, 76, 82, 88, 94, 98] as const;

const RECENT_LEADS = [
  { amount: "New", email: "olivia.martin@email.com", name: "Olivia Martin" },
  { amount: "Yesterday", email: "jackson.lee@email.com", name: "Jackson Lee" },
  { amount: "3 days ago", email: "isabella.nguyen@email.com", name: "Isabella Nguyen" },
  { amount: "Followed up", email: "will.kim@email.com", name: "William Kim" },
  { amount: "1 week ago", email: "sofia.davis@email.com", name: "Sofia Davis" },
] as const;

const JOURNEY_STEPS = [
  {
    description: "Tap Linket on their phone or let them scan the QR fallback.",
    detail: "No app to receive. Everything opens in their browser instantly.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    label: "Step 1",
    title: "Invite with a tap",
  },
  {
    description: "Your hero links, galleries, and saved contact card appear at once.",
    detail: "Decide which blocks lead and guide every viewer to the next action.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    label: "Step 2",
    title: "Show the essentials",
  },
  {
    description: "Linket keeps analytics so you know which intros stick.",
    detail: "Rescan-ready hardware means every follow-up uses the newest info.",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80",
    label: "Step 3",
    title: "Stay remembered",
  },
] as const;

const CUSTOM_FEATURES = [
  "UV-resistant plastic that holds up to daily wear",
  "Custom models shaped around your logo or brand mark",
  "Customizable public pages that stay on brand",
  "Lead capture tools with analytics for follow-ups",
] as const;

const INDIVIDUAL_PLANS: PricingPlan[] = [
  {
    accent: "amber",
    billingLabel: "Free forever",
    ctaHref: "/early-access",
    ctaLabel: "Start free",
    description: "Individual web-only starter",
    features: [
      "Share one web profile and your core links",
      "No hardware required",
      "Best for trying Linket at no cost",
      "Upgrade anytime when you need more",
    ],
    icon: Pencil,
    name: "Free Web-Only",
    priceLabel: "$0",
  },
  {
    accent: "blue",
    billingLabel: "One-time bundle",
    ctaHref: "/sign-in",
    ctaLabel: "Buy bundle",
    description: "Linket + 12 month pro access",
    features: [
      "Get 1 standard Linket",
      "12 months of paid web-only access included",
      "Priority shipping on starter orders",
      "Best first purchase for one person",
    ],
    icon: Star,
    name: "Web + Linket Bundle",
    popular: true,
    priceLabel: "$79",
  },
  {
    accent: "amber",
    billingLabel: "Monthly or yearly",
    ctaHref: "/sign-in",
    ctaLabel: "Start monthly",
    description: "Individual software plan",
    features: [
      "Publish your profile and links with no hardware required",
      "Capture unlimited leads",
      "Remove Linket branding",
      "Pick monthly or yearly billing",
    ],
    icon: Pencil,
    name: "Paid Web-Only (Pro)",
    priceLabel: "$9 / month",
    secondaryCtaHref: "/sign-in",
    secondaryCtaLabel: "Start yearly",
  },
];

const BUSINESS_PLANS: PricingPlan[] = [
  {
    accent: "blue",
    billingLabel: "One-time hardware pricing",
    ctaHref: "/contact",
    ctaLabel: "Contact sales",
    description: "Standard team rollout",
    features: [
      "Standard Linkets for your team",
      "Built for business rollout",
      "Bulk pricing available",
      "Fast brand setup for events and field teams",
    ],
    icon: Package,
    name: "Business Generic",
    priceLabel: "From $29 / unit",
  },
  {
    accent: "amber",
    billingLabel: "Custom design engagement",
    ctaHref: "/contact",
    ctaLabel: "Book a consult",
    description: "Custom branded Linkets",
    features: [
      "Consult with our 3D design specialists",
      "Custom branded designs",
      "Prototype and sourcing support",
      "Lead capture tools with analytics for follow-ups",
    ],
    icon: Sparkles,
    name: "Custom Design Add-On",
    popular: true,
    priceLabel: "Custom quote",
  },
];

const FAQ_ITEMS = [
  {
    answer:
      "Yes. Modern phones tap via NFC and older devices can scan the etched QR. No downloads needed for either option.",
    question: "Does Linket work with both iPhone and Android?",
  },
  {
    answer:
      "No. Your Linket opens in the recipient's browser right away. They can save your contact, follow links, or book time instantly.",
    question: "Do recipients need a Linket or an app?",
  },
  {
    answer:
      "Absolutely. Change your headline, links, colors, or media anytime. Every tap uses the latest version automatically.",
    question: "Can I update my profile after printing?",
  },
  {
    answer:
      "Single Linkets ship within 48 hours. Team and event kits include a dedicated concierge for rush coordination.",
    question: "How fast do orders ship?",
  },
  {
    answer:
      "The best-value starter is the web + Linket bundle because it pairs the hardware with a year of pro access from day one.",
    question: "What is the best-value starter option?",
  },
  {
    answer:
      "We track what matters: tap counts, link clicks, and lead submissions. No invasive retargeting or bloated ad pixels.",
    question: "Is data collection privacy-centered?",
  },
] as const;

const FOOTER_LINK_GROUPS = [
  {
    links: [
      { href: "#how-it-works", label: "How it Works" },
      { href: "#demo", label: "Demo" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    title: "Explore",
  },
  {
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/early-access", label: "Early Access" },
      { href: "/sign-in", label: "Sign In" },
    ],
    title: "Get Started",
  },
] as const;

const FOOTER_SOCIALS = [
  { href: "https://twitter.com/linket", icon: Sparkles, label: "Twitter" },
  { href: "https://instagram.com/linket", icon: Focus, label: "Instagram" },
  { href: "https://youtube.com/@linket", icon: LineChart, label: "YouTube" },
] as const;

const PROFILE_LINKS = [
  "Photography Website",
  "LinkedIn",
  "Instagram",
  "Linket Connect",
] as const;

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[#ffe8d7] bg-[linear-gradient(135deg,#ff9f7b_0%,#ffbc6c_52%,#ffd98a_100%)] px-5 py-3 text-sm font-semibold text-[#2b1609] shadow-[0_20px_44px_-26px_rgba(236,132,78,0.46)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(236,132,78,0.48)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[rgba(238,184,142,0.72)] bg-[linear-gradient(180deg,rgba(255,251,247,0.96)_0%,rgba(255,244,233,0.92)_100%)] px-5 py-3 text-sm font-semibold text-[#73411d] shadow-[0_16px_34px_-28px_rgba(188,116,74,0.32)] transition duration-300 hover:-translate-y-1 hover:text-[#5e3216]";

type LinketLandingProps = {
  currentYear: number;
  dateRange: string;
  media: LandingDemoMedia;
};

export function LinketLanding({
  currentYear,
  dateRange,
  media,
}: LinketLandingProps) {
  const [audience, setAudience] = useState<"business" | "individual">("individual");
  const [mobileOpen, setMobileOpen] = useState(false);

  const plans = audience === "individual" ? INDIVIDUAL_PLANS : BUSINESS_PLANS;
  const pricingTitle =
    audience === "individual" ? "Individual options" : "Business options";
  const pricingDescription =
    audience === "individual"
      ? "Choose free web-only, paid web-only, or the web + Linket bundle."
      : "Choose standard business Linkets or book a consult to customize a design.";

  return (
    <div className="relative overflow-hidden bg-[#fff7ed] text-slate-900">
      <a
        className="srOnly focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        href="#main"
      >
        Skip to content
      </a>

      <LandingHeader mobileOpen={mobileOpen} onToggleMenu={() => setMobileOpen((open) => !open)} />

      {mobileOpen ? (
        <div className="sticky top-[5.25rem] z-40 px-3 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-white/60 bg-white/90 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur">
            <nav className="grid gap-2" aria-label="Mobile primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  className="rounded-2xl border border-[#f4d7bf] bg-[#fffaf5] px-4 py-3 text-sm font-semibold text-[#7a3f18] transition hover:-translate-y-0.5"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link className={secondaryButtonClass} href="/sign-in" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
              <Link className={primaryButtonClass} href="/early-access" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <main id="main">
        <section className="relative isolate px-3 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center text-center">
            <div className="max-w-4xl py-10 sm:py-12">
              <span className="landing-fade-in inline-flex items-center gap-2 rounded-full border border-[#f4d7bf] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#ffb48a]" />
                NFC + QR profiles
              </span>
              <h1 className="landing-fade-up landing-delay-1 mt-8 text-[2.2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[4.5rem] lg:leading-[1.08]">
                <span className="landing-alt-font">Don&apos;t just share it...</span>{" "}
                <span className="block bg-[linear-gradient(100deg,_#ff9776_0%,_#ffd27f_40%,_#7dd3fc_70%,_#2f80ed_100%)] bg-clip-text text-6xl font-black italic leading-[0.92] tracking-tight text-transparent sm:text-8xl lg:text-[5.25rem]">
                  LINKET!
                </span>
              </h1>
              <p className="landing-fade-up landing-delay-2 mx-auto mt-6 max-w-2xl text-sm text-slate-600 sm:text-lg">
                One NFC tap opens your live public profile, lets people save your
                contact, and drives qualified leads into your dashboard. Update
                once, and every future scan shares your latest info.
              </p>
              <div className="landing-fade-up landing-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link className={primaryButtonClass} href="/early-access">
                  Get Started
                </Link>
                <Link className={secondaryButtonClass} href="#demo">
                  View Demo
                </Link>
              </div>
            </div>
            <HeroDashboardPreview dateRange={dateRange} />
          </div>
        </section>

        <section className="landing-alt-font mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="landing-fade-up rounded-[28px] border border-slate-200/80 bg-white/80 p-4 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:tracking-[0.35em]">
              Trusted By
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Sales pods, university teams, and creators keep Linket on their
              keychains to turn every intro into a saved contact.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-800 sm:gap-3 sm:text-sm">
              {SOCIAL_PROOF.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(15,23,42,0.12)]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <JourneySection />
        <ExperienceSection />
        <LiveDemoSection media={media} />
        <ProfilePreviewSection />

        <section
          className="landing-alt-font relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
          id="pricing"
        >
          <div className="landing-fade-up rounded-[32px] border border-[#ffd7c0] bg-white/90 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f5d7b0] bg-[#fff7ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Linket plans
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {pricingTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                  {pricingDescription}
                </p>
              </div>
              <div className="relative grid grid-cols-2 rounded-full border border-[#ffd7c0] bg-white p-1 shadow-[0_12px_30px_rgba(188,116,74,0.12)]">
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full transition duration-300 ease-out",
                    audience === "individual"
                      ? "translate-x-0 bg-[#fff2e6] shadow-[0_6px_18px_rgba(180,83,9,0.18)]"
                      : "translate-x-full bg-[#ecf6ff] shadow-[0_6px_18px_rgba(29,78,216,0.2)]"
                  )}
                />
                <button
                  aria-pressed={audience === "individual"}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm",
                    audience === "individual"
                      ? "text-[#b45309]"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                  onClick={() => setAudience("individual")}
                  type="button"
                >
                  Individual
                </button>
                <button
                  aria-pressed={audience === "business"}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm",
                    audience === "business"
                      ? "text-[#1d4ed8]"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                  onClick={() => setAudience("business")}
                  type="button"
                >
                  Business
                </button>
              </div>
            </div>

            <div
              className={cn(
                "mt-8 grid gap-5",
                plans.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2"
              )}
            >
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="landing-alt-font mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24"
          id="faq"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:tracking-[0.35em]">
              FAQ
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Answers before you tap
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Everything you need to know about Linket hardware, profiles, and
              analytics.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={item.question}
                className="landing-fade-up overflow-hidden rounded-3xl border border-slate-200 bg-white/80 px-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 sm:px-5"
                open={index === 0}
              >
                <summary className="list-none cursor-pointer py-5 text-left text-sm font-semibold text-slate-900 sm:text-base">
                  {item.question}
                </summary>
                <p className="pb-5 text-sm text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <LandingFooter currentYear={currentYear} />
    </div>
  );
}

function LandingHeader({
  mobileOpen,
  onToggleMenu,
}: {
  mobileOpen: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.1)] backdrop-blur sm:px-6">
        <Link className="flex shrink-0 items-center" href="/">
          <Image
            alt="Linket Connect"
            className="h-10 w-auto object-contain sm:h-11"
            height={48}
            priority
            src="/linket/brand/logo-full.png"
            width={178}
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-[#fff4ea] hover:text-[#9a3412]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link className={secondaryButtonClass} href="/sign-in">
            Sign In
          </Link>
          <Link className={primaryButtonClass} href="/early-access">
            Get Started
          </Link>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f4d7bf] bg-[#fffaf5] text-[#7a3f18] transition hover:-translate-y-0.5 lg:hidden"
          onClick={onToggleMenu}
          type="button"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
    </header>
  );
}

function HeroDashboardPreview({ dateRange }: { dateRange: string }) {
  const trendPoints = DASHBOARD_TREND.map((value, index) => {
    const x = 10 + (index / (DASHBOARD_TREND.length - 1)) * 300;
    const y = 92 - (value / 100) * 70;

    return { x, y };
  });
  const trendPath = `M ${trendPoints.map((point) => `${point.x} ${point.y}`).join(" L ")}`;
  const trendArea = `${trendPath} L ${trendPoints[trendPoints.length - 1].x} 110 L ${trendPoints[0].x} 110 Z`;

  return (
    <div className="landing-fade-up landing-delay-4 landing-float relative w-full max-w-6xl rounded-[24px] border border-[#f5d7b0]/80 bg-white/85 p-4 text-left text-slate-900 shadow-[0_45px_120px_rgba(254,215,170,0.45)] backdrop-blur transition duration-500 hover:-translate-y-2 sm:rounded-[32px] sm:p-6">
      <div className="flex flex-col gap-4 border-b border-orange-100 pb-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-full items-center gap-3 rounded-full border border-[#ffd4c2] bg-[#fff6ef] px-3 py-2 sm:px-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff9776_0%,#ffd27f_100%)] text-sm font-semibold text-slate-900">
            PK
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
              Punit Kothakonda
            </p>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {DASHBOARD_TABS.map((tab, index) => (
              <span
                key={tab}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition duration-300 hover:-translate-y-0.5 sm:px-4 sm:text-sm",
                  index === 0
                    ? "border-[#ff9776] bg-[#ff9776] text-[#0f172a]"
                    : "border-slate-200 text-slate-700"
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
            <div className="relative w-full flex-1 sm:max-w-xs">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
              />
              <input
                className="w-full rounded-full border border-slate-200 bg-white py-2 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-300 focus:border-[#ff9776] focus:outline-none focus:ring-2 focus:ring-[#ff9776]/30"
                placeholder="Search..."
              />
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 sm:flex">
              <Calendar className="h-4 w-4 text-slate-400" aria-hidden />
              <span>{dateRange}</span>
            </div>
            <button className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 sm:inline-flex">
              <Download className="h-4 w-4" aria-hidden />
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {DASHBOARD_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-[#fff9f3] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600 sm:tracking-[0.35em]">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p className="text-xs text-emerald-700">{stat.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="relative hidden justify-center overflow-hidden rounded-3xl border border-slate-200 bg-[#fff7ef] p-3 transition duration-500 hover:-translate-y-1 md:flex">
            <div className="grid w-full max-w-[640px] gap-4">
              <div className="flex min-h-[320px] flex-col rounded-2xl border border-slate-100 bg-white/90 p-5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="uppercase tracking-[0.35em]">Scans trend</span>
                  <span className="font-semibold text-slate-700">Last 12 months</span>
                </div>
                <svg aria-hidden className="mt-4 h-56 w-full flex-1" viewBox="0 0 320 120">
                  <defs>
                    <linearGradient id="scan-trend-line" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffb27a" />
                      <stop offset="55%" stopColor="#ffd6a3" />
                      <stop offset="100%" stopColor="#7dd3fc" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 24 H320 M0 52 H320 M0 80 H320"
                    fill="none"
                    stroke="#e8eef6"
                    strokeDasharray="4 6"
                    strokeWidth="1"
                  />
                  <path d={trendArea} fill="url(#scan-trend-line)" opacity="0.16" />
                  <path
                    d={trendPath}
                    fill="none"
                    stroke="url(#scan-trend-line)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <circle
                    cx={trendPoints[trendPoints.length - 1].x}
                    cy={trendPoints[trendPoints.length - 1].y}
                    fill="#22c55e"
                    r="5"
                  />
                </svg>
                <div className="mt-3 grid grid-cols-6 gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-300 sm:grid-cols-12">
                  {DASHBOARD_BARS.map((bar) => (
                    <span key={bar.label} className="text-center">
                      {bar.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 transition duration-500 hover:-translate-y-1 sm:p-5">
            <p className="text-lg font-semibold text-slate-900">Recent leads</p>
            <p className="text-xs text-slate-600">
              You made {RECENT_LEADS.length} new connections this period.
            </p>
            <div className="mt-6 space-y-4">
              {RECENT_LEADS.map((lead) => {
                const initials = lead.name
                  .split(" ")
                  .map((segment) => segment[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={lead.email}
                    className="flex min-w-0 items-center justify-between gap-2 transition duration-300 hover:-translate-y-0.5 sm:gap-3"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1db] text-base font-semibold text-slate-800">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {lead.name}
                        </p>
                        <p className="truncate text-xs text-slate-600">{lead.email}</p>
                      </div>
                    </div>
                    <p className="shrink-0 text-xs font-semibold text-emerald-700 sm:text-sm">
                      {lead.amount}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneySection() {
  return (
    <section
      className="landing-alt-font mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6"
      id="how-it-works"
    >
      <div className="landing-fade-up mt-8 rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.08)] sm:rounded-[36px] sm:p-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f5d7b0] bg-[#fff7ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            How Linket flows
          </span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A warmer intro in three moves
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Linket turns a physical tap into a polished public profile, saved
            contact details, and follow-up data you can actually use.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            {JOURNEY_STEPS.map((step, index) => {
              const Icon = [Sparkles, Focus, LineChart][index] ?? Sparkles;

              return (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-slate-200 bg-[#fff9f3] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {step.label}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                      <p className="mt-2 text-sm text-slate-500">{step.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "relative min-h-[220px] overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1",
                  index === 0 ? "md:col-span-2 md:min-h-[300px]" : ""
                )}
              >
                <Image
                  alt={step.title}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={step.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,29,0.02)_0%,rgba(10,17,29,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    {step.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl">{step.title}</p>
                  <p className="mt-2 max-w-md text-sm text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      className="landing-alt-font relative overflow-hidden bg-[#050816] py-20 text-white sm:py-24"
      id="customization"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,151,118,0.18),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(93,188,255,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] via-[#0a0f1e]/40 to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="landing-fade-up space-y-6 lg:w-3/5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60 sm:tracking-[0.4em]">
            Custom orders
          </p>
          <div>
            <p className="text-2xl font-semibold sm:text-4xl">
              <span className="text-white/80">
                Generate, tweak, and deploy Linket hardware{" "}
              </span>
              <span className="bg-gradient-to-r from-[#ff9776] via-[#ffd27f] to-[#7dd3fc] bg-clip-text text-transparent">
                10x faster
              </span>
            </p>
            <p className="mt-4 text-base text-white/70">
              Work directly with our hardware team to design custom models that
              match your brand. We handle prototyping, sourcing, and rollout so
              you can stay focused on demos.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
            {CUSTOM_FEATURES.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="landing-fade-up landing-delay-2 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(5,5,20,0.45)] backdrop-blur transition duration-500 hover:-translate-y-2 sm:p-8">
          <div className="flex items-center gap-3">
            <Image
              alt="Linket mark"
              className="h-14 w-14"
              height={56}
              src="/linket/brand/logo-mark.png"
              width={56}
            />
            <div>
              <p className="text-lg font-semibold text-white">Get in touch</p>
              <p className="text-xs text-white/60">
                Unlock the full Linket experience with our custom team.
              </p>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,151,118,0.18),transparent_55%)]" />
            <div className="relative flex items-center justify-center">
              <Image
                alt="Custom Linket mockup"
                className="h-auto w-full max-w-[240px] object-contain"
                height={340}
                src="/linket/mockups/keychain.svg"
                width={240}
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                Prototype
              </p>
              <p className="mt-2 text-sm text-white/80">
                Fast concepting for campus teams, creators, and branded events.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                Rollout
              </p>
              <p className="mt-2 text-sm text-white/80">
                Align physical hardware, live profile pages, and analytics in one launch.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className={primaryButtonClass} href="/contact">
              Book a consult
            </Link>
            <Link className={secondaryButtonClass} href="#pricing">
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveDemoSection({ media }: { media: LandingDemoMedia }) {
  const hasVideo = Boolean(media.videoSrc);

  return (
    <section className="landing-alt-font relative py-20 sm:py-24" id="demo">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="landing-fade-up mx-auto max-w-3xl text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.35em]">
            <span className="h-2 w-2 rounded-full bg-[#ffb48a]" />
            Product demo
          </span>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See Linket in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Watch how a tap turns into a clean public profile, a saved contact,
            and a new lead in under 30 seconds.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="landing-fade-up landing-delay-2 relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#111317] shadow-[0_45px_120px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-1">
            {hasVideo ? (
              <video
                className="aspect-video w-full"
                controls
                playsInline
                poster={media.posterSrc ?? undefined}
                preload="metadata"
              >
                <source src={media.videoSrc ?? undefined} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="aspect-video grid place-content-center px-6 text-center">
                <p className="text-lg font-semibold text-white">
                  Demo video is being updated
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Use the interactive preview below to test the flow.
                </p>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500 sm:gap-3 sm:text-xs">
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-center transition duration-300 hover:-translate-y-0.5">
              {hasVideo ? "0:30 walkthrough" : "Interactive preview available"}
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-center transition duration-300 hover:-translate-y-0.5">
              Public profile + lead capture
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-center transition duration-300 hover:-translate-y-0.5">
              Real-time analytics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePreviewSection() {
  return (
    <section
      className="landing-alt-font relative overflow-hidden py-20 sm:py-24"
      id="public-preview"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="landing-fade-up space-y-6 text-slate-900 sm:space-y-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-[0_10px_25px_rgba(15,23,42,0.08)] backdrop-blur sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.35em]">
              <span className="h-2 w-2 rounded-full bg-[#1e3a8a]" />
              Public profile preview
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                A premium page that looks ready for the spotlight
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Your live profile shows the exact layout clients see: polished
                visuals, clean links, and a frictionless contact save.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  description: "vCard with photo and verified details.",
                  title: "Instant contact save",
                },
                {
                  description: "Your most important links, always current.",
                  title: "Branded link hub",
                },
                {
                  description: "Prospects share their info in seconds.",
                  title: "Lead capture ready",
                },
                {
                  description: "Match your logo and brand mood.",
                  title: "Theme customization",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/70 bg-white/80 px-4 py-4 text-sm text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 sm:px-5"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 sm:gap-3 sm:text-xs">
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                Live theme sync
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                Dynamic link updates
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                Instant contact save
              </span>
            </div>
          </div>

          <div className="landing-fade-up landing-delay-2 relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-[0_45px_90px_rgba(15,23,42,0.25)] backdrop-blur transition duration-500 hover:-translate-y-2 sm:rounded-[36px]">
              <div className="mx-auto w-full max-w-[320px] rounded-[32px] border border-white/10 bg-[#0b1220] p-3 shadow-[0_20px_50px_rgba(5,8,22,0.45)]">
                <div className="overflow-hidden rounded-[28px] bg-[#08111f]">
                  <div className="relative min-h-[140px]">
                    <Image
                      alt="Profile header"
                      className="object-cover"
                      fill
                      sizes="320px"
                      src="/linket/mockups/profile-header.jpg"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.05)_0%,rgba(8,17,31,0.72)_100%)]" />
                  </div>

                  <div className="-mt-10 px-5 pb-5">
                    <div className="relative h-20 w-20 overflow-hidden rounded-[24px] border-4 border-[#08111f] bg-white">
                      <Image
                        alt="Profile avatar"
                        className="object-cover"
                        fill
                        sizes="80px"
                        src="/linket/mockups/profile-avatar.jpg"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Image
                        alt="Profile logo"
                        className="h-10 w-10 rounded-full bg-white p-1"
                        height={40}
                        src="/linket/logos/logo-1.svg"
                        width={40}
                      />
                      <div>
                        <p className="text-lg font-semibold text-white">Punit Kothakonda</p>
                        <p className="text-xs text-white/60">Engineer | Founder | Digital Media</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-white/70">
                      Linket keeps your intro polished on the first tap and your
                      follow-up frictionless after it.
                    </p>

                    <div className="mt-5 space-y-3">
                      {PROFILE_LINKS.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                        Save contact
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button
                          className="rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5"
                          type="button"
                        >
                          Add to contacts
                        </button>
                        <button
                          className="rounded-2xl border border-white/15 px-3 py-2 text-xs font-semibold text-white/80 transition hover:-translate-y-0.5"
                          type="button"
                        >
                          Open links
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-semibold text-slate-900">Live preview</span>
              <span className="inline-flex items-center gap-2 text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Synced to your profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const Icon = plan.icon;
  const accentClasses =
    plan.accent === "blue"
      ? {
          badge: "bg-[#edf5ff] text-[#1d4ed8]",
          border: "border-[#dbeafe]",
          glow: "shadow-[0_24px_60px_rgba(59,130,246,0.12)]",
          icon: "bg-[#eff6ff] text-[#1d4ed8]",
          popular: "border-[#93c5fd]",
        }
      : {
          badge: "bg-[#fff4e8] text-[#b45309]",
          border: "border-[#fde7c7]",
          glow: "shadow-[0_24px_60px_rgba(245,158,11,0.12)]",
          icon: "bg-[#fff7ed] text-[#b45309]",
          popular: "border-[#fdba74]",
        };

  return (
    <article
      className={cn(
        "rounded-[28px] border bg-[#fffaf5] p-6 transition duration-300 hover:-translate-y-1",
        accentClasses.border,
        accentClasses.glow,
        plan.popular ? accentClasses.popular : ""
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
              accentClasses.badge
            )}
          >
            {plan.popular ? "Most popular" : "Plan"}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
          </div>
        </div>
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
            accentClasses.icon
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-3xl font-semibold tracking-tight text-slate-900">{plan.priceLabel}</p>
        <p className="mt-2 text-sm text-slate-500">{plan.billingLabel}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden
              className={cn(
                "mt-1 h-2.5 w-2.5 rounded-full",
                plan.accent === "blue" ? "bg-[#60a5fa]" : "bg-[#fb923c]"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link className={primaryButtonClass} href={plan.ctaHref}>
          {plan.ctaLabel}
        </Link>
        {plan.secondaryCtaHref && plan.secondaryCtaLabel ? (
          <Link className={secondaryButtonClass} href={plan.secondaryCtaHref}>
            {plan.secondaryCtaLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function LandingFooter({ currentYear }: { currentYear: number }) {
  return (
    <footer className="landing-alt-font relative overflow-hidden border-t border-white/40 bg-[#050816] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_rgba(5,8,22,0))]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-3 text-lg font-semibold sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Image
                  alt="Linket mark"
                  className="h-8 w-8"
                  height={32}
                  src="/linket/brand/logo-mark.png"
                  width={32}
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/70 sm:text-sm sm:tracking-[0.4em]">
                  Linket Connect
                </p>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  Stay Connected.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70">
              Linket turns every tap into a live microsite, lead capture, and
              follow-up customers actually remember. Built for students,
              creators, and field teams who want intros that stick.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {FOOTER_SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:text-white"
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60 sm:tracking-[0.35em]">
                {group.title}
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="transition hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00a9"} {currentYear} Linket Connect. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="transition hover:text-white" href="#pricing">
              Pricing
            </Link>
            <Link className="transition hover:text-white" href="#faq">
              FAQ
            </Link>
            <Link className="transition hover:text-white" href="/contact">
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
