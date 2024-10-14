"use client";

import { Button } from "@/components/core/button/Button";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, type FunctionComponent } from "react";
import { useTheme } from "next-themes";

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FunctionComponent<ThemeToggleProps> = (props) => {
  const { className } = props;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // prevent hydration issues: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const icon = isDark ? faMoon : faSun;

  return (
    <Button
      icon={icon}
      variant="icon"
      aria-label={`Toggles the theme. Current theme: ${resolvedTheme}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    />
  );
};
