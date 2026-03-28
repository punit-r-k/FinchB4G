import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { ContactForm } from "@/components/contact-form";
import { actionLinks, placeholderContactOptions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to the Finch team with student questions, partnership ideas, or campus opportunities.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBody} data-reveal>
          <p className={styles.pageEyebrow}>Let&apos;s talk</p>
          <h1 className={styles.pageTitle}>
            Have a question, partnership idea, or campus opportunity?
          </h1>
          <p className={styles.pageLead}>
            Reach out and the Finch team will get back to you. This page keeps
            both a clean form path and direct founder contact routes visible,
            while staying honest about the current front-end-only scope.
          </p>
        </div>
      </section>

      <section className={styles.sectionMuted} data-reveal>
        <div className={styles.contactGrid}>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Send us a message</p>
            <h2 className={styles.sectionTitle}>A simple contact surface for the prototype stage</h2>
            <ContactForm />
          </article>

          <div className={styles.directGrid}>
            {placeholderContactOptions.map((person) => (
              <article className={styles.directCard} key={person.name}>
                <p className={styles.sectionLabel}>Direct contact</p>
                <h2 className={styles.cardTitle}>{person.name}</h2>
                <p>{person.label}</p>
                <Link className={styles.secondaryButton} href={actionLinks.earlyAccess}>
                  Request intro
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.contentGrid}>
          <article className={styles.quoteCard}>
            <strong>Prefer a direct route?</strong>
            <p>
              During early access, the cleanest path is still founder-led
              outreach. The product is being built close to the users on
              purpose.
            </p>
          </article>
          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Need the product story first?</p>
            <h2 className={styles.sectionTitle}>Start with the workflow, then reach out.</h2>
            <p>
              If you are evaluating Finch for a student group, campus program,
              or partnership conversation, the product page is the best first
              stop.
            </p>
            <Link className={styles.primaryButton} href="/product">
              Explore Product
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
