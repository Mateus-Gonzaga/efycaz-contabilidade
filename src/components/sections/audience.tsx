import { ArrowRight, Laptop, Stethoscope, Store, TrendingUp, type LucideIcon } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Watermark } from "@/components/watermark";
import { whatsappLink } from "@/lib/site";

type Profile = { icon: LucideIcon; title: string; pain: string; how: string; message: string };

const profiles: Profile[] = [
  {
    icon: Stethoscope,
    title: "Clínicas e consultórios",
    pain: "Imposto alto no Simples e dúvida entre pessoa física e jurídica.",
    how: "Fator R, pró-labore e comparação com o Lucro Presumido para pagar só o necessário.",
    message: "Olá! Tenho uma clínica/consultório e quero revisar meus impostos.",
  },
  {
    icon: TrendingUp,
    title: "MEI que cresceu",
    pain: "O faturamento passou do limite e o medo é cair numa conta alta.",
    how: "Migração planejada para ME, no regime certo, sem multa e sem susto.",
    message: "Olá! Sou MEI e meu faturamento passou do limite. Preciso migrar.",
  },
  {
    icon: Store,
    title: "Comércio e varejo",
    pain: "ICMS, substituição tributária e estoque que ninguém explica direito.",
    how: "Apuração correta, créditos aproveitados e números claros para precificar.",
    message: "Olá! Tenho um comércio e quero organizar a parte fiscal.",
  },
  {
    icon: Laptop,
    title: "Serviços e tecnologia",
    pain: "ISS, retenções e notas para clientes de outras cidades.",
    how: "Enquadramento pelo Fator R, retenções em dia e distribuição de lucros isenta.",
    message: "Olá! Tenho uma empresa de serviços/tecnologia e quero falar com um contador.",
  },
];

export function Audience() {
  return (
    <section id="para-quem" aria-labelledby="audience-title" className="grain relative isolate overflow-hidden bg-ink py-24 text-mist sm:py-32">
      <Watermark tone="light" className="-right-32 -top-12 w-[28rem]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade className="max-w-2xl">
          <Badge className="border-teal/40 bg-teal/15 text-teal-bright">Para quem é</Badge>
          <h2 id="audience-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Cada negócio tem uma dor diferente. A gente conhece a sua.
          </h2>
        </BlurFade>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {profiles.map((p, i) => (
            <BlurFade key={p.title} as="li" delay={i * 100}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 text-ink transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_48px_-24px_rgba(72,70,85,.35)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-teal transition-transform duration-300 group-hover:-rotate-6">
                    <p.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{p.title}</h3>
                </div>
                <p className="mt-6 text-ink/80">
                  <span className="font-bold text-ink/80">A dor: </span>
                  {p.pain}
                </p>
                <p className="mt-3 flex-1 text-ink/80">
                  <span className="font-bold text-teal-deep">Como resolvemos: </span>
                  {p.how}
                </p>
                <a
                  href={whatsappLink(p.message)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 self-start font-bold text-teal-deep underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Falar sobre o meu caso
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
              </article>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
}
