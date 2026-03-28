"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import { actionLinks, navLinks } from "@/lib/site-content";
import {
  THEME_CHANGE_EVENT,
  THEME_COOKIE_NAME,
  THEME_STORAGE_KEY,
  applyTheme,
  getDomTheme,
  getStoredTheme,
  normalizeTheme,
  persistThemePreference,
  type ThemeMode,
} from "@/lib/theme";

import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import styles from "./site-header.module.css";

function isPathActive(pathname: string, href: string) {
  const [baseHref] = href.split("#");

  if (baseHref === "/") {
    return pathname === "/";
  }

  return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
}

function subscribeToTheme(onStoreChange: () => void) {
  const onThemeChange = () => onStoreChange();
  const onStorageChange = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    const nextTheme = normalizeTheme(event.newValue);

    document.documentElement.dataset.theme = nextTheme;
    document.cookie = `${THEME_COOKIE_NAME}=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
    onStoreChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  window.addEventListener("storage", onStorageChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    window.removeEventListener("storage", onStorageChange);
  };
}

type SiteHeaderProps = {
  initialTheme: ThemeMode;
};

export function SiteHeader({ initialTheme }: SiteHeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getDomTheme, () => initialTheme);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const storedTheme = getStoredTheme(initialTheme);

    if (storedTheme !== theme) {
      applyTheme(storedTheme);
      return;
    }

    persistThemePreference(theme);
  }, [initialTheme, theme]);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
  };

  const wrapperClassName = `${styles.wrapper} ${isHome ? styles.homeWrapper : ""}`;
  const headerClassName = `${styles.header} ${isScrolled ? styles.scrolled : ""} ${
    isHome && !isScrolled ? styles.homeHeader : ""
  }`;

  return (
    <div className={wrapperClassName}>
      <header className={headerClassName}>
        <div className={styles.inner}>
          <div className={styles.leftRail}>
            <BrandLogo />
          </div>

          <nav aria-label="Primary" className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                className={`${styles.navLink} ${isPathActive(pathname, link.href) ? styles.navLinkActive : ""}`}
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.desktopActions}>
            <ThemeToggle onToggle={toggleTheme} theme={theme} />
            <Link className={styles.ghostAction} href={actionLinks.signIn}>
              Sign In
            </Link>
            <Link className={styles.secondaryAction} href={actionLinks.downloadExtension}>
              Download Extension
            </Link>
            <Link className={styles.primaryAction} href={actionLinks.earlyAccess}>
              Get Early Access
            </Link>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.drawerInner}>
          <div className={styles.drawerTop}>
            <BrandLogo />
            <ThemeToggle onToggle={toggleTheme} theme={theme} />
          </div>

          <nav aria-label="Mobile" className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                className={`${styles.mobileLink} ${isPathActive(pathname, link.href) ? styles.mobileLinkActive : ""}`}
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileActions}>
            <Link className={styles.ghostAction} href={actionLinks.signIn} onClick={closeMenu}>
              Sign In
            </Link>
            <Link
              className={styles.secondaryAction}
              href={actionLinks.downloadExtension}
              onClick={closeMenu}
            >
              Download Extension
            </Link>
            <Link
              className={styles.primaryAction}
              href={actionLinks.earlyAccess}
              onClick={closeMenu}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
