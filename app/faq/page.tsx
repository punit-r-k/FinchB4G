import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { FaqAccordion } from "@/components/faq-accordion";
import { WaitlistForm } from "@/components/waitlist-form";
import { actionLinks, faqItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Finch, from platform support to early access timing.",
};

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBody} data-reveal>
          <p className={styles.pageEyebrow}>Frequently asked questions</p>
          <h1 className={styles.pageTitle}>Questions students will ask before they try Finch</h1>
          <p className={styles.pageLead}>
            Finch should feel transparent from the first page load. The FAQ
            keeps the positioning sharp: stronger applications, less repetition,
            and no fake automation story.
          </p>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <FaqAccordion items={faqItems} />
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.quoteCard}>
            <strong>Stop mass applying. Start applying with strategy.</strong>
            <p>
              The FAQ exists to reinforce that Finch is a response-optimization
              platform, not a one-click spam engine.
            </p>
          </article>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Still curious?</p>
            <h2 className={styles.sectionTitle}>Talk to the team or join the waitlist</h2>
            <p>
              If the pricing, partnership, or rollout questions go beyond the
              current FAQ, the next best step is either a direct message to the
              team or an early access signup.
            </p>
            <div className={styles.inlineActions}>
              <Link className={styles.secondaryButton} href="/contact">
                Contact Finch
              </Link>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Get Early Access
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.waitlistShell} data-reveal>
        <div className={styles.waitlistBody}>
          <p className={styles.sectionLabel}>Waitlist</p>
          <h2 className={styles.sectionTitle}>Be first to try Finch</h2>
          <p>
            Join the waitlist for early access, product updates, and launch
            news.
          </p>
        </div>
        <WaitlistForm compact />
      </section>
    </main>
  );
}
