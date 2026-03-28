import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/app/marketing.module.css";
import { actionLinks, trustChips } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Prototype sign-in surface for Finch. This is a front-end-only placeholder experience.",
};

export default function SignInPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.authShell}>
          <article className={styles.authCard} data-reveal>
            <p className={styles.sectionLabel}>Sign in to Finch</p>
            <h1 className={styles.sectionTitle}>Access your Finch workspace</h1>
            <p className={styles.pageLead}>
              Continue your application flow from a clean placeholder auth
              surface designed for demos and early product storytelling.
            </p>

            <form className={styles.authForm}>
              <div className={styles.authFieldGroup}>
                <label htmlFor="signin-email">Email</label>
                <input
                  className={styles.authField}
                  id="signin-email"
                  placeholder="you@school.edu"
                  type="email"
                />
              </div>
              <div className={styles.authFieldGroup}>
                <label htmlFor="signin-password">Password</label>
                <input
                  className={styles.authField}
                  id="signin-password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
            </form>

            <div className={styles.authActions}>
              <Link className={styles.primaryButton} href={actionLinks.earlyAccess}>
                Sign In
              </Link>
              <Link className={styles.secondaryButton} href={actionLinks.earlyAccess}>
                Continue with Google
              </Link>
              <p className={styles.prototypeNote}>Early prototype interface</p>
            </div>
          </article>

          <article className={styles.placeholderCard} data-reveal>
            <p className={styles.sectionLabel}>What this unlocks later</p>
            <h2 className={styles.sectionTitle}>A workspace built around the application flow</h2>
            <p>
              This route is intentionally visual-only for now. In the full
              product, sign-in would return students to their current roles,
              tailored materials, and final review queue.
            </p>
            <ul className={styles.checkList}>
              {trustChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
