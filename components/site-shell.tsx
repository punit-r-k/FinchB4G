"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { type ThemeMode } from "@/lib/theme";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: ReactNode;
  initialTheme: ThemeMode;
};

export function SiteShell({ children, initialTheme }: SiteShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/" || pathname.endsWith("-demo");

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader initialTheme={initialTheme} />
      <div className="siteMain">{children}</div>
      <SiteFooter />
    </>
  );
}
