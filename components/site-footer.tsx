import Link from "next/link";

import { brandLine, footerLinks, founders } from "@/lib/site-content";

import { BrandLogo } from "./brand-logo";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <BrandLogo />
          <p>{brandLine}</p>
          <Link className={styles.primaryAction} href="/early-access">
            Get Early Access
          </Link>
          <p className={styles.copyright}>&copy; 2026 Finch. Built for intentional recruiting.</p>
        </div>

        <div className={styles.metaColumns}>
          <div className={styles.linkColumn}>
            <h2>Explore</h2>
            <div className={styles.linkList}>
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkColumn}>
            <h2>Founding Team</h2>
            <div className={styles.metaList}>
              {founders.map((founder) => (
                <div key={founder.name}>
                  <strong>{founder.name}</strong>
                  <span>{founder.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
