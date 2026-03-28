import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { actionLinks, founders } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Finch started, what the team is building, and why intentional recruiting matters.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroGrid}>
          <div className={styles.pageHeroBody} data-reveal>
            <p className={styles.pageEyebrow}>About Finch</p>
            <h1 className={styles.pageTitle}>Built to make recruiting more intentional</h1>
            <p className={styles.pageLead}>
              Finch was created for students who are done treating internship
              applications like a guessing game.
            </p>
            <div className={styles.buttonRow}>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Get Early Access
              </Link>
              <Link className={styles.secondaryButton} href="/contact">
                Talk to the team
              </Link>
            </div>
          </div>

          <div className={styles.pageHeroMedia} data-reveal>
            <div className={styles.mediaFrame}>
              <Image
                alt={founders[0].name}
                className={styles.mediaImage}
                priority
                sizes="(max-width: 1100px) 100vw, 48vw"
                src={founders[0].image}
              />
            </div>
            <div className={styles.quoteCard}>
              <strong>Student-centered, not recruiter-centered.</strong>
              <p>
                Finch is being built to turn a frustrating numbers game into a
                workflow that feels more strategic, more transparent, and more
                outcome-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.card}>
            <p className={styles.sectionLabel}>Our mission</p>
            <h2 className={styles.cardTitle}>
              Transform internship recruiting from a numbers game into a strategy
            </h2>
            <p className={styles.cardText}>
              To transform the internship application process from a frustrating
              numbers game into an intentional, data-driven strategy that helps
              students earn the opportunities they deserve.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.sectionLabel}>Our vision</p>
            <h2 className={styles.cardTitle}>
              Replace cold, volume-based systems with better outcomes
            </h2>
            <p className={styles.cardText}>
              We believe the future of early-career recruiting should be
              smarter, more transparent, and more outcome-driven. Finch is being
              built to help replace cold, volume-based systems with a process
              that gives students a clearer path from education to opportunity.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.aboutGrid}>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>How Finch started</p>
            <h2 className={styles.sectionTitle}>From lived frustration to a clearer workflow</h2>
            <p>
              Finch started with a question that came from lived experience: why
              were students spending so much time applying, yet getting so
              little back? After feeling the pain of mass applications
              firsthand, the team began building a better workflow, one that
              reduced wasted effort and improved the path to interviews.
            </p>
            <p>
              Finch grew from that frustration into a product built around
              better outcomes, stronger application quality, and more strategic
              recruiting habits.
            </p>
          </article>

          <div className={styles.teamGrid}>
            {founders.map((founder) => (
              <article className={styles.founderCard} key={founder.name}>
                <div className={styles.founderMedia}>
                  <Image
                    alt={founder.name}
                    className={styles.founderImage}
                    sizes="(max-width: 960px) 100vw, 30vw"
                    src={founder.image}
                  />
                </div>
                <div className={styles.founderMeta}>
                  <span className={styles.founderLabel}>{founder.label}</span>
                  <h3 className={styles.founderName}>{founder.name}</h3>
                  <p className={styles.founderBio}>{founder.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} data-reveal>
        <div className={styles.ctaBody}>
          <p className={styles.sectionLabel}>Founder-led and product-first</p>
          <h2 className={styles.ctaTitle}>
            Recruiting season is hard enough. The application process should not
            slow students down.
          </h2>
          <p className={styles.ctaText}>
            Finch is being designed to feel credible, approachable, and useful
            from the first interaction.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
            Get Early Access
          </Link>
          <Link className={styles.secondaryButton} href="/product">
            Explore the product
          </Link>
        </div>
      </section>
    </main>
  );
}
