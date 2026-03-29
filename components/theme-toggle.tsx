"use client";

import Image from "next/image";
import styles from "./theme-toggle.module.css";
import type { ThemeMode } from "@/lib/theme";
import lightIcon from "../output-onlinepngtools.png";
import darkIcon from "../output-onlinepngtools (1).png";

type ThemeToggleProps = {
  onToggle: () => void;
  theme: ThemeMode;
};

export function ThemeToggle({ onToggle, theme }: ThemeToggleProps) {
  const icon = theme === "dark" ? darkIcon : lightIcon;
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      aria-label={label}
      className={styles.toggle}
      onClick={onToggle}
      type="button"
    >
      <Image src={icon} alt={theme === "dark" ? "Dark mode icon" : "Light mode icon"} width={24} height={24} />
    </button>
  );
}
