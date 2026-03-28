export type ThemeMode = "dark" | "light";

export const THEME_COOKIE_NAME = "finch-theme";
export const THEME_STORAGE_KEY = "finch-theme";
export const THEME_CHANGE_EVENT = "finch-theme-change";

type ApplyThemeOptions = {
  notify?: boolean;
  persist?: boolean;
};

function writeThemeCookie(theme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax`;
}

export function normalizeTheme(value: string | null | undefined): ThemeMode {
  return value === "dark" ? "dark" : "light";
}

export function getDomTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  return normalizeTheme(document.documentElement.dataset.theme);
}

export function getStoredTheme(fallback: ThemeMode): ThemeMode {
  if (typeof window === "undefined") {
    return fallback;
  }

  return normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY) ?? fallback);
}

export function persistThemePreference(theme: ThemeMode) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  writeThemeCookie(theme);
}

export function applyTheme(theme: ThemeMode, options: ApplyThemeOptions = {}) {
  const { notify = true, persist = true } = options;

  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = theme;
  }

  if (persist) {
    persistThemePreference(theme);
  }

  if (notify && typeof window !== "undefined") {
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }
}
