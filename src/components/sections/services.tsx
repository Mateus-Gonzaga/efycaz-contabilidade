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
import { BorderBeam } from "@/components/magic/border-beam";
import { Badge } from "@/components/ui/badge";
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
  return (
    <section id="servicos" aria-labelledby="services-title" className="relative isolate overflow-hidden bg-mist py-24 sm:py-32">
      <Watermark className="-right-32 -top-16 w-[30rem]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <BlurFade>
            <Badge>O que fazemos por você</Badge>
            <h2 id="services-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Tudo o que a sua empresa precisa, num só lugar.
            </h2>
          </BlurFade>
          <BlurFade delay={100}>
            <p className="text-lg leading-relaxed text-ink/80 lg:pb-2">
              Da abertura do CNPJ à gestão financeira, a Efycaz cuida da parte técnica e entrega o que interessa: impostos corretos, prazos cumpridos e números que ajudam a decidir.
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
              <ul className="flex flex-wrap gap-2 lg:max-w-[15rem] lg:justify-end" aria-label="Regimes analisados">
                {regimes.map((r) => (
                  <li key={r} className="rounded-full border border-mist/15 px-3.5 py-1.5 text-sm font-bold text-mist/85">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </BlurFade>

        {/* Áreas de atuação */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {areas.map((area, i) => (
            <BlurFade key={area.title} delay={200 + i * 100} as="article" className="flex flex-col rounded-3xl border border-ink/10 bg-white p-3 sm:p-4">
              <header className="flex items-baseline gap-3 px-4 pb-4 pt-4">
                <span className="font-display text-sm font-extrabold text-teal-deep">{area.label}</span>
                <h3 className="font-display text-xl font-bold tracking-tight">{area.title}</h3>
              </header>
              <ul className="flex flex-1 flex-col gap-1">
                {area.items.map((s) => (
                  <li key={s.title} className="group flex gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-mist">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal-deep transition-all duration-300 group-hover:bg-teal group-hover:text-ink-deep">
                      <s.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-bold leading-snug">{s.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/80">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
