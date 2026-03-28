"use client";

import { useState } from "react";

import styles from "./forms.module.css";

type WaitlistFormProps = {
  buttonLabel?: string;
  compact?: boolean;
};

export function WaitlistForm({
  buttonLabel = "Join the Waitlist",
  compact = false,
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <strong>You&apos;re on the list.</strong>
        <p>We&apos;ll keep you posted with early access, product updates, and launch news.</p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={`${styles.grid} ${compact ? styles.gridCompact : ""}`}>
        <div className={styles.field}>
          <label htmlFor="waitlist-email">Email address</label>
          <input
            id="waitlist-email"
            name="email"
            placeholder="you@school.edu"
            required
            type="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="waitlist-school">School</label>
          <input id="waitlist-school" name="school" placeholder="Texas A&M" type="text" />
        </div>

        <div className={styles.field}>
          <label htmlFor="waitlist-major">Major</label>
          <input
            id="waitlist-major"
            name="major"
            placeholder="Computer Science"
            type="text"
          />
        </div>
      </div>

      <div className={styles.submitRow}>
        <p className={styles.submitNote}>Front-end-only waitlist flow for the current prototype.</p>
        <button className={styles.submitButton} type="submit">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
