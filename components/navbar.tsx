"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    {
      href: "#home",
      label: t("home"),
    },
    {
      href: "#services",
      label: t("services"),
    },
    {
      href: "#about",
      label: t("about"),
    },
    {
      href: "#contact",
      label: t("contact"),
    },
  ];

  function changeLocale(newLocale: "tr" | "en") {
    const segments = pathname.split("/");

    segments[1] = newLocale;

    router.push(segments.join("/") || `/${newLocale}`);

    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}#home`}
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative size-10 overflow-hidden rounded-lg border border-border bg-[#ffbc00] shadow-sm">
            <Image
              src="/logo-teknonet.jpg"
              alt="Teknonet Yazılım logosu"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight">
              TEKNO<span className="text-primary">NET</span>
            </span>

            <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
              YAZILIM
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Language */}
          <div className="flex items-center gap-1 rounded-lg border p-1">
            <Globe className="ml-2 size-4 text-muted-foreground" />

            <button
              type="button"
              onClick={() => changeLocale("tr")}
              className={`rounded-md px-2 py-1 text-xs font-medium ${
                locale === "tr"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              TR
            </button>

            <button
              type="button"
              onClick={() => changeLocale("en")}
              className={`rounded-md px-2 py-1 text-xs font-medium ${
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme */}
          <div className="flex items-center gap-1 rounded-lg border p-1">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-md p-2 ${
                mounted && theme === "light"
                  ? "bg-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Light theme"
            >
              <Sun className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-md p-2 ${
                mounted && theme === "dark"
                  ? "bg-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Dark theme"
            >
              <Moon className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => setTheme("system")}
              className={`rounded-md p-2 ${
                mounted && theme === "system"
                  ? "bg-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="System theme"
            >
              <Monitor className="size-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 hover:bg-accent md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-2 border-t pt-4">
              <Globe className="size-4 text-muted-foreground" />

              <button
                type="button"
                onClick={() => changeLocale("tr")}
                className={`rounded-md px-3 py-2 text-xs font-medium ${
                  locale === "tr"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent"
                }`}
              >
                Türkçe
              </button>

              <button
                type="button"
                onClick={() => changeLocale("en")}
                className={`rounded-md px-3 py-2 text-xs font-medium ${
                  locale === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent"
                }`}
              >
                English
              </button>

              <button
                type="button"
                onClick={() => setTheme("light")}
                className="ml-auto rounded-md p-2 hover:bg-accent"
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
          </nav>
        </div>
      )}
    </header>
  );
}

