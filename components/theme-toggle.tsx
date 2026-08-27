"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-lg border p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="rounded-md p-2 hover:bg-accent"
        aria-label="Light theme"
      >
        <Sun className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="rounded-md p-2 hover:bg-accent"
        aria-label="Dark theme"
      >
        <Moon className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        className="rounded-md p-2 hover:bg-accent"
        aria-label="System theme"
      >
        <Monitor className="size-4" />
      </button>
    </div>
  );
}