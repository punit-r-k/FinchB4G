"use client";

import { useState } from "react";

import styles from "./forms.module.css";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <strong>Thanks for reaching out.</strong>
        <p>We&apos;ll be in touch soon. This is a front-end-only success state for the Finch prototype.</p>
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
      <div className={styles.gridCompact}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" placeholder="Your name" required type="text" />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-topic">What are you reaching out about?</label>
        <select defaultValue="" id="contact-topic" name="topic" required>
          <option disabled value="">
            Select a topic
          </option>
          <option value="student">Student questions</option>
          <option value="partnership">University partnership</option>
          <option value="product">Product feedback</option>
          <option value="press">Press or sponsorship</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell the Finch team how we can help."
          required
        />
      </div>

      <div className={styles.submitRow}>
        <p className={styles.submitNote}>This form simulates the finished contact flow without a backend.</p>
        <button className={styles.submitButton} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
