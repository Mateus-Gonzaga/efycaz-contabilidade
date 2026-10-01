import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Watermark } from "@/components/watermark";
import { ADDRESS, HOURS, gmailComposeUrl, mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/site";

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="location-title" className="relative isolate overflow-hidden bg-paper py-24 sm:py-32">
      <Watermark className="-right-28 bottom-0 w-[26rem]" duration={9} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade className="max-w-2xl">
          <Badge>Onde estamos</Badge>
          <h2 id="location-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Atendimento digital, com escritório de verdade.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            Resolvemos quase tudo à distância, mas a porta está aberta para quem prefere conversar pessoalmente.
          </p>
        </BlurFade>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <BlurFade delay={100} as="address" className="flex flex-col rounded-3xl bg-ink p-8 not-italic text-mist sm:p-10">
            <ul className="space-y-7">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal/15 text-teal">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-bright">Endereço</p>
                  <p className="mt-1.5 leading-relaxed">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.district}
                    <br />
                    {ADDRESS.city} - {ADDRESS.state}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal/15 text-teal">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-bright">Telefone</p>
                  <a href="tel:+556136138796" className="mt-1.5 inline-block transition-colors hover:text-teal">(61) 3613-8796</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal/15 text-teal">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-bright">E-mail</p>
                  <a href={gmailComposeUrl} target="_blank" rel="noopener" className="mt-1.5 inline-block break-all transition-colors hover:text-teal">
                    efycaz.contabil@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal/15 text-teal">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-bright">Horário</p>
                  <p className="mt-1.5">{HOURS}</p>
                </div>
              </li>
            </ul>
            <Button href={mapsDirectionsUrl} target="_blank" rel="noopener" variant="outline" className="mt-10 self-start text-mist">
              Como chegar <ArrowUpRight className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Button>
          </BlurFade>

          <BlurFade delay={200} className="overflow-hidden rounded-3xl border border-ink/10 bg-mist">
            <iframe
              src={mapsEmbedUrl}
              title="Mapa com a localização da Efycaz Contabilidade"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0 sm:h-96 lg:h-full lg:min-h-[26rem]"
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
