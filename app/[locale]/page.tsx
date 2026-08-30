import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Headphones,
  MonitorCog,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";

const serviceIcons = [Code2, MonitorCog, Wrench, Smartphone, Cpu];

export default function HomePage() {
  const hero = useTranslations("Hero");
  const services = useTranslations("Services");
  const about = useTranslations("About");
  const contact = useTranslations("Contact");

  const serviceItems = [
    services("software"),
    services("computer"),
    services("technicalService"),
    services("mobile"),
    services("accessories"),
  ];

  return (
    <>
      <Navbar />

      <main id="home" className="overflow-hidden">
        <section className="relative isolate border-b bg-muted/30 px-4 py-20 sm:py-28 lg:py-36">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[8%] top-[-20%] size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-25%] right-[5%] size-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,transparent_0%,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,black,transparent)]" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
                <Sparkles className="size-4 text-primary" />
                <span>{hero("badge")}</span>
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {hero("title")}
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                {hero("description")}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
                  {hero("primaryButton")} <ArrowRight className="size-4" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border bg-background/75 px-6 py-3.5 text-sm font-semibold shadow-sm transition-colors hover:bg-accent">
                  {hero("secondaryButton")}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {["Profesyonel ekip", "Hızlı destek", "Uçtan uca çözüm"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-2xl shadow-primary/10 sm:p-7">
                <div className="flex items-center justify-between border-b pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Cpu className="size-5" /></div>
                    <div><p className="font-semibold">TEKNO<span className="text-primary">NET</span></p><p className="text-xs text-muted-foreground">Digital solutions</p></div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Online</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-primary p-5 text-primary-foreground sm:col-span-2">
                    <p className="text-sm opacity-80">Teknoloji altyapınız</p><p className="mt-2 text-2xl font-semibold tracking-tight">Güçlü, güvenli ve hazır.</p>
                    <div className="mt-6 flex items-end gap-2">
                      {[42, 65, 51, 80, 67, 94, 76].map((height, index) => <span key={index} className="w-full rounded-t bg-primary-foreground/25" style={{ height }} />)}
                    </div>
                  </div>
                  <div className="rounded-2xl border bg-background p-4"><ShieldCheck className="size-5 text-primary" /><p className="mt-5 text-sm font-medium">Güvenilir hizmet</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Her aşamada şeffaf ve özenli yaklaşım.</p></div>
                  <div className="rounded-2xl border bg-background p-4"><Headphones className="size-5 text-primary" /><p className="mt-5 text-sm font-medium">Çözüm odaklı destek</p><p className="mt-1 text-xs leading-5 text-muted-foreground">İhtiyacınıza göre doğru teknoloji.</p></div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-7 -z-10 size-40 rounded-full border bg-background/50" />
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl"><p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Teknonet</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{services("title")}</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">{services("description")}</p></div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {serviceItems.map((service, index) => {
                const Icon = serviceIcons[index];
                return <article key={service} className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"><div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-5" /></div><h3 className="mt-6 text-base font-semibold leading-6">{service}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">İşinize değer katan, güvenilir teknoloji desteği.</p><span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Detaylar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></article>;
              })}
            </div>
          </div>
        </section>

        <section id="about" className="border-y bg-muted/35 px-4 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-3xl border bg-card p-7 shadow-sm sm:p-10"><div className="grid grid-cols-2 gap-4"><div className="rounded-2xl bg-primary p-5 text-primary-foreground sm:p-7"><p className="text-4xl font-bold">360°</p><p className="mt-2 text-sm opacity-80">Teknoloji yaklaşımı</p></div><div className="rounded-2xl border bg-background p-5 sm:p-7"><p className="text-4xl font-bold">7/24</p><p className="mt-2 text-sm text-muted-foreground">Güvenilir destek</p></div><div className="col-span-2 rounded-2xl border bg-background p-5 sm:p-7"><div className="flex items-center gap-4"><div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Sparkles className="size-5" /></div><p className="text-sm leading-6 text-muted-foreground">İşletmenizin ihtiyaçlarını anlayan, sürdürülebilir çözümler tasarlıyoruz.</p></div></div></div></div>
            <div className="max-w-xl"><p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Teknoloji ortağınız</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{about("title")}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{about("description")}</p><div className="mt-8 space-y-4">{["İhtiyaca özel teknoloji stratejisi", "Deneyimli ve ulaşılabilir ekip", "Uzun vadeli iş ortaklığı"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="size-5 text-primary" />{item}</div>)}</div></div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:py-28"><div className="mx-auto max-w-7xl rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12 sm:py-16"><p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-75">Birlikte büyüyelim</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{contact("title")}</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 opacity-80">{contact("description")}</p><a href="tel:+905325665899" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"><Phone className="size-4" />{contact("button")}</a></div></section>
      </main>
    </>
  );
}
