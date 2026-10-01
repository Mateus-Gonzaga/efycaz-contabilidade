import { Watermark } from "@/components/watermark";
import { ArrowRight, Clock } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { HOURS, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <BlurFade className="grain relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-mist sm:px-16 sm:py-24">
        <Watermark tone="light" className="-bottom-20 -left-24 w-[22rem]" duration={12} />
        <Watermark tone="light" className="-right-24 -top-16 w-[22rem]" duration={12} />
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full bg-mist/10 px-4 py-2 text-sm font-bold text-teal-bright">
            <Clock className="size-4" aria-hidden /> Cada mês no regime errado é dinheiro que não volta
          </p>
          <h2 id="cta-title" className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Descubra em 5 minutos quanto sua empresa pode economizar.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mist/75">
            Mande uma mensagem agora e converse direto com um contador da Efycaz.
          </p>
          <Button href={whatsappLink("Olá! Quero descobrir quanto posso economizar.")} target="_blank" rel="noopener" size="lg" className="mt-10">
            <WhatsAppIcon /> Começar pelo WhatsApp
            <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
          </Button>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-mist/75">
            <Clock className="size-4 text-teal" aria-hidden /> Atendimento de {HOURS.charAt(0).toLowerCase() + HOURS.slice(1)}
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
