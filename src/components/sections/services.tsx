import * as React from "react";
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  FileCheck2,
  FilePen,
  FileX,
  Landmark,
  Receipt,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magic/border-beam";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Watermark } from "@/components/watermark";

type Service = { icon: LucideIcon; title: string; desc: string };

const regimes = ["Simples Nacional", "Lucro Presumido", "Lucro Real", "Fator R"];

const areas: { label: string; title: string; items: Service[] }[] = [
  {
    label: "01",
    title: "Abertura e legalização",
    items: [
      { icon: Building2, title: "Abertura de empresa", desc: "CNPJ, contrato social, alvarás e inscrições, com o CNAE e o regime certos desde o primeiro dia." },
      { icon: TrendingUp, title: "Transformação de MEI em ME", desc: "Migração planejada quando o faturamento passa do limite, sem multa e sem susto no imposto." },
      { icon: FilePen, title: "Alterações contratuais", desc: "Entrada e saída de sócios, mudança de endereço, capital social ou atividade." },
      { icon: FileX, title: "Baixa de empresa", desc: "Encerramento completo do CNPJ, com as pendências fiscais resolvidas antes." },
    ],
  },
  {
    label: "02",
    title: "Rotina contábil e fiscal",
    items: [
      { icon: BookOpen, title: "Contabilidade mensal", desc: "Escrituração, balancetes, balanço patrimonial e DRE, entregues no prazo." },
      { icon: FileCheck2, title: "Impostos e obrigações", desc: "Apuração de tributos, SPED, DCTFWeb, EFD e DEFIS com calendário acompanhado por nós." },
      { icon: Users, title: "Folha e eSocial", desc: "Pró-labore, admissões, férias, rescisões e encargos calculados sem erro." },
      { icon: Landmark, title: "Regularização fiscal", desc: "Débitos, parcelamentos, CNPJ inapto e certidões negativas: levantamos tudo e resolvemos." },
    ],
  },
  {
    label: "03",
    title: "Gestão e consultoria",
    items: [
      { icon: Wallet, title: "BPO financeiro", desc: "Contas a pagar e a receber, conciliação bancária e fluxo de caixa organizados." },
      { icon: BarChart3, title: "Relatórios gerenciais", desc: "Indicadores mensais em linguagem simples para decidir preço, custo e crescimento." },
      { icon: Receipt, title: "IR dos sócios", desc: "Declaração de Imposto de Renda Pessoa Física dos sócios e distribuição de lucros isenta." },
      { icon: BriefcaseBusiness, title: "Consultoria por segmento", desc: "Atenção especial a clínicas, comércio, prestadores de serviço e tecnologia." },
    ],
  },
];

export function Services() {
  // Filtro por área: -1 mostra todos os serviços
  const [area, setArea] = React.useState(-1);
  const items = areas.flatMap((a, ai) => a.items.map((s) => ({ ...s, area: a, ai })));
  const visible = area === -1 ? items : items.filter((it) => it.ai === area);
  const tabs = [{ label: "Todos", value: -1 }, ...areas.map((a, i) => ({ label: a.title, value: i }))];

  return (
    <section id="servicos" aria-labelledby="services-title" className="relative isolate overflow-hidden bg-mist py-24 sm:py-32">
      <Watermark className="-right-32 -top-16 w-[30rem]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <BlurFade>
            <Badge>O que fazemos por você</Badge>
            <h2 id="services-title" className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Burocracia? <span className="text-teal-deep">Deixa com a gente.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={100}>
            <p className="text-lg leading-relaxed text-ink/80 lg:pb-2">
              Você não precisa entender de imposto, guia ou eSocial. Essa é a nossa parte. Da abertura do CNPJ à gestão financeira, a Efycaz assume tudo e te entrega só o que importa: <strong className="font-bold text-ink">números claros e prazos em dia.</strong>
            </p>
          </BlurFade>
        </div>

        {/* Serviço principal em destaque */}
        <BlurFade delay={150} className="mt-14">
          <article className="group relative overflow-hidden rounded-3xl bg-ink p-7 text-mist sm:p-10">
            <BorderBeam duration={12} size={240} />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
              <span className="grid size-16 place-items-center rounded-2xl bg-teal/15 text-teal transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <Calculator className="size-8" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-bright">Serviço principal</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">Planejamento tributário</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-mist/70">
                  Comparamos os regimes com os números reais da sua empresa e indicamos o enquadramento que custa menos, sempre dentro da lei. Revisamos de novo a cada ano ou quando o faturamento muda.
                </p>
              </div>
              <ul className="grid w-full grid-cols-2 gap-2 sm:max-w-sm lg:w-[19rem]" aria-label="Regimes analisados">
                {regimes.map((r) => (
                  <li key={r} className="whitespace-nowrap rounded-full border border-mist/15 px-3 py-2 text-center text-sm font-bold text-mist/85">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </BlurFade>

        {/* Filtros por área + carrossel */}
        <BlurFade delay={200} className="mt-12">
          <div role="tablist" aria-label="Filtrar serviços por área" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => {
              const active = area === t.value;
              const count = t.value === -1 ? items.length : areas[t.value].items.length;
              return (
                <button
                  key={t.value}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setArea(t.value)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                    active ? "border-ink bg-ink text-mist" : "border-ink/15 bg-white text-ink/80 hover:border-ink/40 hover:text-ink",
                  )}
                >
                  {t.label}
                  <span className={cn("rounded-full px-1.5 text-xs", active ? "bg-teal text-ink-deep" : "bg-mist text-ink/80")}>{count}</span>
                </button>
              );
            })}
          </div>

          <Carousel key={area} label="Serviços da Efycaz" className="mt-6">
            {visible.map((s, i) => (
              <CarouselItem key={s.title}>
                <article className="group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_48px_-24px_rgba(72,70,85,.35)]">
                  {/* Número grande e discreto no canto */}
                  <span aria-hidden className="pointer-events-none absolute -bottom-7 -right-1 font-display text-[6.5rem] font-extrabold leading-none text-ink/[0.05] transition-colors duration-300 group-hover:text-teal/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-deep">
                    <span className="font-display">{s.area.label}</span>
                    <span aria-hidden className="h-px w-4 bg-teal-deep/40" />
                    {s.area.title}
                  </p>
                  <span className="relative mt-6 grid size-12 place-items-center rounded-2xl bg-teal-soft text-teal-deep transition-all duration-300 group-hover:-rotate-6 group-hover:bg-teal group-hover:text-ink-deep">
                    <s.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="relative mt-2 leading-relaxed text-ink/80">{s.desc}</p>
                </article>
              </CarouselItem>
            ))}
          </Carousel>
        </BlurFade>
      </div>
    </section>
  );
}
