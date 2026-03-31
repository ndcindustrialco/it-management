"use client";

import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-8 w-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#0F1059] opacity-50">
        <Monitor className="h-4 w-4" />
      </button>
    );
  }

  // Cycle through themes: light -> dark -> system -> light
  const cycleTheme = () => {
     if (theme === 'light') setTheme('dark');
     else if (theme === 'dark') setTheme('system');
     else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="h-8 w-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#0F1059] hover:bg-zinc-100 transition-all active:scale-95"
      title={theme === "dark" ? "Dark Mode" : theme === "light" ? "Light Mode" : "System Mode"}
    >
      {theme === "dark" && <Moon className="h-4 w-4" />}
      {theme === "light" && <Sun className="h-4 w-4" />}
      {theme === "system" && <Monitor className="h-4 w-4" />}
    </button>
  );
}
