"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/site-content";

import styles from "./faq-accordion.module.css";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`} key={item.question}>
            <button
              aria-controls={`faq-panel-${index}`}
              aria-expanded={isOpen}
              className={styles.trigger}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
            </button>
            <div
              className={`${styles.panelWrap} ${isOpen ? styles.panelWrapOpen : ""}`}
              id={`faq-panel-${index}`}
            >
              <div className={styles.panel}>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
