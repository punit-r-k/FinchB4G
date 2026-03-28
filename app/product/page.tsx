import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { ProductShowcase } from "@/components/product-showcase";
import { WorkflowTimeline } from "@/components/workflow-timeline";
import {
  actionLinks,
  compatibilityChips,
  showcaseTabs,
  workflowSteps,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Product",
  description:
    "See how Finch moves from LinkedIn profile setup to ATS browsing, tailoring, autofill, and final review.",
};

const featureBlocks = [
  {
    body: "Finch begins by using the information students already maintain through LinkedIn to create a richer candidate profile. That means less repeated setup and a stronger foundation for more tailored applications.",
    title: "Start with the profile you already have",
  },
  {
    body: "Students should not have to change where they look for opportunities just to use a better workflow. Finch is designed to work alongside the platforms employers already use.",
    title: "Browse the jobs you actually want",
  },
  {
    body: "Instead of sending the same resume everywhere, Finch helps create materials that are better aligned to each role, making every application more relevant without multiplying the work.",
    title: "Tailor every application more intelligently",
  },
  {
    body: "The most frustrating part of applying is often the most repetitive. Finch helps reduce the drag of filling out the same information over and over again, so students can move faster without feeling rushed.",
    title: "Cut the repetitive form work",
  },
  {
    body: "Finch is built to support the application process, not hide it from the user. The final review step stays in your hands, so you can confirm everything before submitting.",
    title: "Stay in control at the end",
  },
];

export default function ProductPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroGrid}>
          <div className={styles.pageHeroBody} data-reveal>
            <p className={styles.pageEyebrow}>Product / How It Works</p>
            <h1 className={styles.pageTitle}>Apply faster without applying blindly.</h1>
            <p className={styles.pageLead}>
              Finch helps students move through internship applications with
              more speed and more strategy, while keeping quality high where it
              matters most.
            </p>
            <div className={styles.buttonRow}>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Get Early Access
              </Link>
              <Link className={styles.secondaryButton} href={actionLinks.downloadExtension}>
                Download Extension
              </Link>
            </div>
          </div>

          <div className={styles.pageHeroMedia} data-reveal>
            <div className={styles.wideMediaFrame}>
              <Image
                alt="Finch workflow mockup"
                className={styles.mediaImage}
                priority
                sizes="(max-width: 1100px) 100vw, 50vw"
                src={workflowSteps[2].image}
              />
            </div>
            <div className={styles.supportedGrid}>
              {compatibilityChips.map((chip) => (
                <span className={styles.supportChip} key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} data-reveal id="workflow">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Workflow</p>
          <h2 className={styles.sectionTitle}>
            The internship process does not need more chaos
          </h2>
          <p className={styles.sectionText}>
            Finch is designed to streamline the path from finding a role to
            submitting a stronger application, all while keeping the user in
            control.
          </p>
        </div>
        <WorkflowTimeline steps={workflowSteps} />
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Feature breakdown</p>
          <h2 className={styles.sectionTitle}>
            A front-end prototype that still feels product-ready
          </h2>
        </div>
        <div className={styles.cardsGrid}>
          {featureBlocks.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Showcase</p>
          <h2 className={styles.sectionTitle}>
            Product surfaces built around speed, strategy, and user control
          </h2>
          <p className={styles.sectionText}>
            The visual system focuses on clarity and confidence rather than
            dashboard clutter. The goal is to make every step feel guided and
            high-signal.
          </p>
        </div>
        <ProductShowcase items={showcaseTabs} />
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.quoteCard}>
            <strong>Finch is not an auto-apply tool.</strong>
            <p>
              The product narrative stays anchored to one promise: increase
              interview probability by improving the quality and relevance of
              each application, not by inflating submission count.
            </p>
          </article>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Final review</p>
            <h2 className={styles.sectionTitle}>Speed up the process without hiding it</h2>
            <p>
              Finch is built to support the application flow, not obscure it.
              The final review step stays visible so students can confirm
              everything before submitting.
            </p>
            <Link className={styles.secondaryButton} href="/pricing">
              View pricing direction
            </Link>
          </article>
        </div>
      </section>

      <section className={styles.ctaBand} data-reveal>
        <div className={styles.ctaBody}>
          <p className={styles.sectionLabel}>Product CTA</p>
          <h2 className={styles.ctaTitle}>
            Recruiting season is hard enough. The application process should not
            get in the way.
          </h2>
          <p className={styles.ctaText}>
            Finch is already scoped to demo the experience visually without
            depending on live auth, billing, or platform integrations.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
            Get Early Access
          </Link>
          <Link className={styles.secondaryButton} href="/contact">
            Talk partnerships
          </Link>
        </div>
      </section>
    </main>
  );
}
