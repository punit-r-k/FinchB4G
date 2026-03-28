"use client";

import Image from "next/image";
import { useState } from "react";

import type { ShowcaseTab } from "@/lib/site-content";

import styles from "./product-showcase.module.css";

type ProductShowcaseProps = {
  items: ShowcaseTab[];
};

export function ProductShowcase({ items }: ProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className={styles.shell}>
      <div className={styles.tabRow}>
        {items.map((item, index) => (
          <button
            className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ""}`}
            key={item.label}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Inside Finch</p>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.description}</p>
          <p className={styles.detail}>{activeItem.detail}</p>
        </div>

        <div className={styles.frame}>
          <div className={styles.windowBar}>
            <span />
            <span />
            <span />
          </div>
          <Image
            alt={activeItem.title}
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={activeItem.image}
          />
        </div>
      </div>
    </div>
  );
}
