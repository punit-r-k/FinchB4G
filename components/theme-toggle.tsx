"use client";

import styles from "./theme-toggle.module.css";
import type { ThemeMode } from "@/lib/theme";

type ThemeToggleProps = {
  onToggle: () => void;
  theme: ThemeMode;
};

export function ThemeToggle({ onToggle, theme }: ThemeToggleProps) {

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={styles.toggle}
      onClick={onToggle}
      type="button"
    >
      <span className={styles.track}>
        <span className={theme === "dark" ? styles.knobDark : styles.knobLight} />
      </span>
      <span className={styles.label}>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
