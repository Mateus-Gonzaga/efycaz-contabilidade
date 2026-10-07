import { asset } from "@/lib/site";
import { Watermark } from "@/components/watermark";
import { Quote, Star } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { Marquee } from "@/components/magic/marquee";
import { Badge } from "@/components/ui/badge";

// Segmentos atendidos (troque por logos reais de clientes quando tiver autorização deles).
const segments = [
  "Clínicas e consultórios",
  "Comércio e varejo",
  "Prestadores de serviço",
  "Profissionais liberais",
  "E-commerce",
  "Restaurantes",
  "Tecnologia e startups",
  "MEI em crescimento",
];

// ATENÇÃO: textos de exemplo, ainda não são relatos de clientes.
// Antes de divulgar o site no domínio definitivo, troque por depoimentos reais (com autorização).
const testimonials = [
  {
    quote: "Eu nem sabia que estava no regime errado. Depois da revisão da Efycaz, sobrou dinheiro no caixa todo mês.",
    role: "Sócio, clínica odontológica",
  },
  {
    quote: "Troquei de contador em uma semana e não precisei correr atrás de nada. Hoje resolvo tudo pelo WhatsApp.",
    role: "Proprietária, loja de roupas",
  },
  {
    quote: "Abri minha empresa saindo do MEI sem dor de cabeça. Explicaram cada passo em português claro.",
    role: "Desenvolvedor, empresa de tecnologia",
  },
];

export function SocialProof() {
  return (
    <section id="depoimentos" aria-labelledby="proof-title" className="relative isolate overflow-hidden bg-paper py-24 sm:py-32">
      <Watermark className="-bottom-24 -left-56 w-[32rem]" duration={11} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-ink/80">
          Empresas de diversos segmentos confiam na Efycaz
        </p>
      </div>
      <Marquee className="mx-auto mt-6 max-w-6xl">
        {segments.map((s) => (
          <span key={s} className="whitespace-nowrap rounded-full border border-ink/10 bg-white px-5 py-2.5 font-display font-bold text-ink/85">
            {s}
          </span>
        ))}
      </Marquee>

      <div className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-10">
          <BlurFade className="max-w-2xl">
            <Badge>Quem já é cliente</Badge>
            <h2 id="proof-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Eles pararam de perder tempo com contabilidade. Você também pode.
            </h2>
          </BlurFade>
          <BlurFade delay={150} className="hidden shrink-0 md:block">
            <img src={asset("selo-efycaz.png")} alt="" aria-hidden width={160} height={157} className="spin-hover w-36 cursor-pointer lg:w-40" />
          </BlurFade>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={i} delay={i * 120} as="figure" className="flex flex-col rounded-3xl bg-ink p-8 text-mist transition-transform duration-300 hover:-translate-y-1">
              <Quote className="size-8 text-teal" aria-hidden />
              <div className="mt-4 flex gap-0.5 text-teal" role="img" aria-label="Avaliação 5 de 5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-4 fill-current" aria-hidden />)}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-mist/10 pt-5 font-bold">{t.role}</figcaption>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
