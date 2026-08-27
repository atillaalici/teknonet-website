import { Navbar } from "@/components/navbar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Hero");

  return (
    <>
      <Navbar />

      <main id="home">
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium text-primary">
              {t("badge")}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t("title")}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("description")}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}