import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { WaitlistForm } from "@/components/waitlist-form";
import { actionLinks, earlyAccessSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Early Access",
  description:
    "Join the Finch waitlist and preview the early-access onboarding direction.",
};

export default function EarlyAccessPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroGrid}>
          <div className={styles.pageHeroBody} data-reveal>
            <p className={styles.pageEyebrow}>Get Early Access</p>
            <h1 className={styles.pageTitle}>Be first to try Finch</h1>
            <p className={styles.pageLead}>
              Join the waitlist for early access, product updates, and launch
              news. The product flow is still front-end-only, but the
              onboarding direction is already clear.
            </p>
          </div>

          <div className={styles.pageHeroMedia} data-reveal>
            <div className={styles.statsRow}>
              <article className={styles.statsCard}>
                <strong>1</strong>
                <p className={styles.statLabel}>waitlist form</p>
              </article>
              <article className={styles.statsCard}>
                <strong>3</strong>
                <p className={styles.statLabel}>onboarding steps</p>
              </article>
              <article className={styles.statsCard}>
                <strong>0</strong>
                <p className={styles.statLabel}>backend dependencies</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.waitlistShell} data-reveal>
        <div className={styles.waitlistBody}>
          <p className={styles.sectionLabel}>Join the Waitlist</p>
          <h2 className={styles.sectionTitle}>A polished entry point for the launch list</h2>
          <p>
            Finch should feel premium before the product is fully live. The
            early access page is where the brand promise turns into a tangible
            next step.
          </p>
        </div>
        <WaitlistForm />
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>What happens next</p>
            <h2 className={styles.sectionTitle}>A lightweight onboarding preview</h2>
            <ul className={styles.onboardingList}>
              {earlyAccessSteps.map((step, index) => (
                <li key={step}>
                  <span className={styles.onboardingStep}>{index + 1}</span>
                  <div>
                    <strong>{step}</strong>
                    <p className={styles.cardText}>
                      Prototype-stage onboarding keeps the next steps clear
                      without pretending the full account system is live.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.quoteCard}>
            <strong>Built for students who want better outcomes, not just more submissions.</strong>
            <p>
              The strongest version of Finch keeps returning to the same idea:
              fewer applications, more interviews.
            </p>
            <Link className={styles.secondaryButton} href={actionLinks.downloadExtension}>
              Preview the extension
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
