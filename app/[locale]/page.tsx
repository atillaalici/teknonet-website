import { Navbar } from "@/components/navbar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const hero = useTranslations("Hero");
  const about = useTranslations("About");

  return (
    <>
      <Navbar />

      <main id="home">
        <section
          id="home"
          className="border-t bg-muted/30 px-4 py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2>{hero("title")}</h2>

            <p>{hero("description")}</p>
          </div>
        </section>
        <section
          id="about"
          className="border-t bg-muted/30 px-4 py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2>{about("title")}</h2>

            <p>{about("description")}</p>
          </div>
        </section>
      </main>
    </>
  );
}