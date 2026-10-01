import { Watermark } from "@/components/watermark";
import { BlurFade } from "@/components/magic/blur-fade";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    n: "01",
    title: "Você chama no WhatsApp",
    desc: "Conta rapidamente sobre a sua empresa: segmento, faturamento e o que está te incomodando.",
  },
  {
    n: "02",
    title: "Recebe a análise da sua empresa",
    desc: "Analisamos regime tributário e pendências e mostramos com clareza onde dá para economizar.",
  },
  {
    n: "03",
    title: "A gente cuida do resto",
    desc: "Se fizer sentido, assumimos a contabilidade, inclusive a transição com o contador anterior.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="how-title" className="relative isolate overflow-hidden bg-paper py-24 sm:py-32">
      <Watermark className="left-1/2 top-0 w-[26rem] -translate-x-1/2 -translate-y-1/4" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade className="mx-auto max-w-2xl text-center">
          <Badge>Como funciona</Badge>
          <h2 id="how-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Você manda uma mensagem. A gente faz o resto.
          </h2>
        </BlurFade>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Linha conectando os passos (desktop) */}
          <span aria-hidden className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <BlurFade key={s.n} as="li" delay={i * 150} className="group relative text-center">
              <span className="relative mx-auto grid size-16 place-items-center rounded-full border-2 border-teal bg-paper font-display text-xl font-extrabold text-teal-deep transition-all duration-300 group-hover:bg-teal group-hover:text-ink-deep">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink/80">{s.desc}</p>
            </BlurFade>
          ))}
        </ol>
      </div>
    </section>
  );
}
