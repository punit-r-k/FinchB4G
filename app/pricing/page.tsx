import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { FaqAccordion } from "@/components/faq-accordion";
import { actionLinks, faqItems, pricingStrategy, pricingTiers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Preview the Finch pricing direction for students and university partnerships.",
};

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroGrid}>
          <div className={styles.pageHeroBody} data-reveal>
            <p className={styles.pageEyebrow}>Pricing</p>
            <h1 className={styles.pageTitle}>
              Simple options for students now. Scalable options for campuses
              later.
            </h1>
            <p className={styles.pageLead}>
              Finch is being built for both individual users and university
              partnerships, with plans designed to support students at
              different stages of recruiting.
            </p>
            <div className={styles.buttonRow}>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Join the Waitlist
              </Link>
              <Link className={styles.secondaryButton} href="/contact">
                Contact for partnerships
              </Link>
            </div>
          </div>

          <div className={styles.pageHeroMedia} data-reveal>
            <div className={styles.wideMediaFrame}>
              <Image
                alt="Pricing strategy visual"
                className={styles.mediaImage}
                priority
                sizes="(max-width: 1100px) 100vw, 48vw"
                src={pricingStrategy}
              />
            </div>
            <p className={styles.metaLine}>
              Pricing details are still evolving. The frontend is ready for the
              structure without pretending the billing system exists yet.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.pricingGrid}>
          {pricingTiers.map((tier) => (
            <article
              className={`${styles.pricingCard} ${tier.featured ? styles.pricingFeatured : ""}`}
              key={tier.name}
            >
              {tier.tag ? <span className={styles.pricingTag}>{tier.tag}</span> : null}
              <div className={styles.pricingHeader}>
                <h2 className={styles.pricingName}>{tier.name}</h2>
                <p>{tier.description}</p>
              </div>
              <ul className={styles.pricingList}>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className={styles.pricingButton} href={tier.href}>
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Start with strategy</h2>
            <p className={styles.cardText}>
              The free tier is meant to let students experience a more
              intentional workflow before pricing details are fully finalized.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Move faster with more support</h2>
            <p className={styles.cardText}>
              Premium is positioned for students who are deep in internship
              season and want to reduce more friction across the process.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Support students at scale</h2>
            <p className={styles.cardText}>
              University partnerships create space for programs, schools, and
              organizations that want a campus-level rollout conversation.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>FAQ</p>
          <h2 className={styles.sectionTitle}>Common pricing questions</h2>
        </div>
        <FaqAccordion items={faqItems.slice(5)} />
      </section>

      <section className={styles.ctaBand} data-reveal>
        <div className={styles.ctaBody}>
          <p className={styles.sectionLabel}>Pricing CTA</p>
          <h2 className={styles.ctaTitle}>Join the waitlist to hear when access opens.</h2>
          <p className={styles.ctaText}>
            Finch already communicates the plan structure clearly, even before
            the real billing flow exists.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
            Get Early Access
          </Link>
          <Link className={styles.secondaryButton} href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
