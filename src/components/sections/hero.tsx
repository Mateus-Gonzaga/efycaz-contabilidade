import { LineSymbol } from "@/components/magic/line-symbol";
import type * as React from "react";
import { ArrowRight, Check, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magic/blur-fade";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { HOURS, whatsappLink } from "@/lib/site";

const promises = ["Zero papelada para você", "Troca de contador sem burocracia", "Contador de verdade no WhatsApp"];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="grain relative isolate overflow-hidden bg-ink pb-24 pt-32 text-mist sm:pb-32 sm:pt-40">
      <LineSymbol className="-bottom-72 -left-48 w-[30rem] text-teal opacity-35" duration={11} />
      <LineSymbol className="-right-24 -top-16 hidden w-[32rem] text-teal opacity-60 lg:block" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <BlurFade>
            <Badge className="border-teal/40 bg-teal/15 text-teal-bright">Contabilidade completa para empresas</Badge>
          </BlurFade>
          <BlurFade delay={100}>
            <h1 id="hero-title" className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4rem]">
              Esqueça a{" "}
              <span className="relative whitespace-nowrap text-teal">
                contabilidade
                <svg aria-hidden viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-teal/60">
                  <path d="M2 9C50 3 150 3 198 7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              . <span className="text-mist/90">A gente resolve tudo.</span>
            </h1>
          </BlurFade>
          <BlurFade delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist/75 sm:text-xl">
              Impostos, guias, folha, prazos e burocracia passam a ser problema nosso. Você volta a fazer o que dá dinheiro: vender, atender e crescer. E ainda paga só o imposto que a lei exige.
            </p>
          </BlurFade>
          <BlurFade delay={300} className="mt-10 flex flex-col sm:flex-row">
            <Button href={whatsappLink("Olá! Quero tirar a contabilidade das minhas costas. Como funciona?")} target="_blank" rel="noopener" size="lg">
              <WhatsAppIcon /> Quero me livrar da burocracia
              <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </BlurFade>
          <BlurFade delay={400}>
            <ul className="mt-10 flex flex-col gap-3 text-sm text-mist/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="size-4 text-teal" aria-hidden /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 border-t border-mist/10 pt-5 text-sm text-mist/75">
              <Clock className="size-4 text-teal" aria-hidden /> Atendimento de {HOURS.charAt(0).toLowerCase() + HOURS.slice(1)}
            </p>
          </BlurFade>
        </div>

        {/* iPhone em proporção real (15 Pro: 70,6 x 146,6 mm). Medidas em cqw = % da largura do aparelho. */}
        <BlurFade delay={250} className="relative mx-auto w-full max-w-[17rem] pb-4 sm:max-w-[19rem]">
          <div className="relative [container-type:inline-size]">
            {/* Botões laterais: ação, volume +/-, power */}
            <span aria-hidden className="absolute -left-[0.9cqw] top-[18%] h-[4.5%] w-[1.1cqw] rounded-l-sm bg-[#a8a39a]" />
            <span aria-hidden className="absolute -left-[0.9cqw] top-[26%] h-[8.5%] w-[1.1cqw] rounded-l-sm bg-[#a8a39a]" />
            <span aria-hidden className="absolute -left-[0.9cqw] top-[37%] h-[8.5%] w-[1.1cqw] rounded-l-sm bg-[#a8a39a]" />
            <span aria-hidden className="absolute -right-[0.9cqw] top-[28%] h-[13%] w-[1.1cqw] rounded-r-sm bg-[#a8a39a]" />
            {/* Moldura de titânio > borda preta > tela */}
            <div className="aspect-[706/1466] rounded-[17.7cqw] bg-gradient-to-br from-[#e4e0d8] via-[#a9a49b] to-[#d6d1c8] p-[1.3cqw] shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)]">
            <div className="h-full rounded-[16.4cqw] bg-black p-[2.1cqw]">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[14.3cqw] bg-[#efeae2] text-[3.7cqw] text-[#111b21]">
                {/* Status bar do iOS + Dynamic Island */}
                <div className="relative flex h-[13cqw] shrink-0 items-center justify-between bg-[#008069] px-[8cqw] pt-[1cqw] text-[1.05em] font-bold text-white" aria-hidden>
                  <span>9:41</span>
                  <span className="absolute left-1/2 top-[2.6cqw] h-[8.6cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-black">
                    <span className="absolute right-[3cqw] top-1/2 size-[3cqw] -translate-y-1/2 rounded-full bg-[#14141c] ring-1 ring-[#24243a]" />
                  </span>
                  <span className="flex items-center gap-[1.4cqw]">
                    <svg viewBox="0 0 18 12" className="h-[0.8em] w-[1.2em] fill-current"><path d="M0 9h3v3H0zm5-3h3v6H5zm5-3h3v9h-3zm5-3h3v12h-3z" /></svg>
                    <svg viewBox="0 0 16 12" className="h-[0.8em] w-[1.1em] fill-current"><path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .7 3.2L2 4.6a8.7 8.7 0 0 1 6-2.4zm0 3.8c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.8 6.8 0 0 0 8 4.1c-1.8 0-3.5.7-4.7 1.8l1.3 1.4C5.5 6.5 6.7 6 8 6zm0 3.8a1.6 1.6 0 1 0 0 2.2 1.6 1.6 0 0 0 0-2.2z" /></svg>
                    <span className="relative h-[0.95em] w-[1.9em] rounded-[0.3em] border border-white/60 p-px"><span className="block h-full w-4/5 rounded-[0.15em] bg-white" /><span className="absolute -right-[0.2em] top-1/2 h-[0.35em] w-[0.12em] -translate-y-1/2 rounded-r bg-white/60" /></span>
                  </span>
                </div>
                {/* Cabeçalho do WhatsApp */}
                <div className="flex shrink-0 items-center gap-[0.6em] bg-[#008069] px-[0.8em] pb-[0.8em] pt-[0.2em] text-white">
                  <svg viewBox="0 0 24 24" className="size-[1.4em] shrink-0 fill-current" aria-hidden><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20z" /></svg>
                  <span className="grid size-[2.6em] shrink-0 place-items-center rounded-full bg-ink"><img src="/simbolo-claro.png" alt="" className="size-[1.7em]" /></span>
                  <div className="min-w-0 flex-1 leading-tight">
                    <p className="truncate text-[1.12em] font-bold">Efycaz Contabilidade</p>
                    <p className="text-[0.85em] text-white/80">online</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="size-[1.4em] shrink-0 fill-current" aria-hidden><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z" /></svg>
                  <svg viewBox="0 0 24 24" className="size-[1.25em] shrink-0 fill-current" aria-hidden><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
                </div>
                {/* Conversa, ancorada embaixo como no app */}
                <div
                  className="flex min-h-0 flex-1 flex-col justify-end gap-[0.55em] overflow-hidden px-[0.7em] py-[0.9em] leading-snug"
                  style={{ backgroundImage: "radial-gradient(rgba(0,0,0,.04) 1px, transparent 1px)", backgroundSize: "12px 12px" }}
                  role="img"
                  aria-label="Exemplo de conversa com a Efycaz pelo WhatsApp"
                >
                  <p className="mx-auto w-fit shrink-0 rounded-[0.5em] bg-white/90 px-[0.8em] py-[0.25em] text-[0.8em] uppercase text-[#54656f] shadow-sm">Hoje</p>
                  <Bubble side="out" time="09:12">Bom dia! Tenho uma clínica no Simples e sinto que pago imposto demais. Vocês fazem uma análise?</Bubble>
                  <Bubble side="in" time="09:14">Bom dia! Fazemos sim. 😊 Me envia o extrato do Simples dos últimos 12 meses e o valor da sua folha de pagamento?</Bubble>
                  <Bubble side="out" time="09:31">Enviei por e-mail! Faturamos uns R$ 60 mil por mês.</Bubble>
                  <Bubble side="in" time="09:33">Recebido! Vou analisar o Fator R e comparar com o Lucro Presumido. Te retorno ainda hoje.</Bubble>
                  <Bubble side="in" time="16:05">
                    <span className="mb-[0.5em] flex items-center gap-[0.6em] rounded-[0.4em] bg-[#f5f6f6] p-[0.5em]">
                      <span className="grid size-[2.3em] shrink-0 place-items-center rounded-[0.3em] bg-[#e2574c] text-[0.7em] font-bold text-white">PDF</span>
                      <span className="min-w-0">
                        <span className="block font-bold">Diagnóstico tributário.pdf</span>
                        <span className="block text-[0.85em] text-[#667781]">Comparativo + próximos passos</span>
                      </span>
                    </span>
                    Pronto! Sua clínica pode pagar menos imposto, tudo dentro da lei. Posso te ligar para explicar?
                  </Bubble>
                  <Bubble side="out" time="16:07">Pode sim! Estou livre agora. 🙌</Bubble>
                </div>
                {/* Barra de digitação */}
                <div className="flex shrink-0 items-center gap-[0.5em] px-[0.7em] pb-[0.3em]" aria-hidden>
                  <span className="flex-1 rounded-full bg-white px-[1em] py-[0.55em] text-[#8696a0] shadow-sm">Mensagem</span>
                  <span className="grid size-[2.5em] place-items-center rounded-full bg-[#00a884] text-white">
                    <svg viewBox="0 0 24 24" className="size-[1.1em] fill-current"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
                  </span>
                </div>
                {/* Home indicator do iOS */}
                <div className="flex h-[7cqw] shrink-0 items-center justify-center" aria-hidden>
                  <span className="h-[1.4cqw] w-[36cqw] rounded-full bg-black/85" />
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* Selo flutuante, no estilo do card ao lado do celular na referência */}
          <div className="relative mx-auto mt-8 flex w-fit items-center gap-3 rounded-2xl bg-mist px-4 py-3 text-ink shadow-xl">
            <ShieldCheck className="size-8 text-teal-deep" aria-hidden />
            <div className="text-sm leading-tight">
              <p className="font-bold">Atendimento 100% humano</p>
              <p className="text-ink/80">Sigilo total dos seus dados</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function Bubble({ side, time, children }: { side: "in" | "out"; time: string; children: React.ReactNode }) {
  const out = side === "out";
  return (
    <div
      className={
        "relative w-fit max-w-[85%] shrink-0 rounded-[0.6em] px-[0.65em] pb-[0.35em] pt-[0.4em] shadow-[0_1px_0.5px_rgba(11,20,26,.13)] " +
        (out ? "ml-auto rounded-tr-none bg-[#d9fdd3]" : "rounded-tl-none bg-white")
      }
    >
      <p>{children}</p>
      <p className="mt-[0.1em] flex items-center justify-end gap-[0.3em] text-[0.8em] text-[#667781]">
        {time}
        {out && (
          <svg viewBox="0 0 16 11" className="h-[0.8em] w-[1.2em] fill-[#53bdeb]" aria-hidden>
            <path d="M11.07.65 4.5 7.2 1.93 4.64.5 6.06l4 4 8-8zM15.5 2.07l-1.42-1.42L7.5 7.2l-.7-.7-1.42 1.42 2.12 2.12z" />
          </svg>
        )}
      </p>
    </div>
  );
}
