import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { actionLinks, extensionHighlights, workflowSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Extension",
  description:
    "Preview the Finch Chrome extension concept and how it fits into the application workflow.",
};

export default function ExtensionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroGrid}>
          <div className={styles.pageHeroBody} data-reveal>
            <p className={styles.pageEyebrow}>Chrome Extension</p>
            <h1 className={styles.pageTitle}>
              The extension that helps recruiting move faster
            </h1>
            <p className={styles.pageLead}>
              Finch is designed to work where students already apply, helping
              reduce repeated effort across major internship application
              platforms.
            </p>
            <div className={styles.buttonRow}>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Get Early Access
              </Link>
              <Link className={styles.secondaryButton} href="/product">
                See the full workflow
              </Link>
            </div>
          </div>

          <div className={styles.pageHeroMedia} data-reveal>
            <div className={styles.wideMediaFrame}>
              <Image
                alt="Finch extension preview"
                className={styles.mediaImage}
                priority
                sizes="(max-width: 1100px) 100vw, 50vw"
                src={workflowSteps[3].image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Built around speed and strategy</p>
            <h2 className={styles.sectionTitle}>A believable placeholder surface for demos</h2>
            <ul className={styles.checkList}>
              {extensionHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className={styles.quoteCard}>
            <strong>Supporting line</strong>
            <p>
              Built around speed, strategy, and stronger application quality.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
