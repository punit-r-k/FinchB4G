import Image from "next/image";
import Link from "next/link";

import { brandAssets } from "@/lib/site-content";

import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  href?: string;
};

export function BrandLogo({ href = "/" }: BrandLogoProps) {
  return (
    <Link aria-label="Finch home" className={styles.link} href={href}>
      <Image
        alt="Finch wordmark"
        className={`${styles.logo} ${styles.logoLight}`}
        priority
        src={brandAssets.light}
      />
      <Image
        alt="Finch wordmark"
        className={`${styles.logo} ${styles.logoDark}`}
        priority
        src={brandAssets.dark}
      />
    </Link>
  );
}
