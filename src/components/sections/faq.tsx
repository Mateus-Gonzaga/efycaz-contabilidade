import { Watermark } from "@/components/watermark";
import { BlurFade } from "@/components/magic/blur-fade";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Trocar de contador dá muito trabalho?",
    a: "Não para você. Nós pedimos os documentos ao contador anterior, conferimos o que foi entregue e assumimos sem interromper nenhuma obrigação. Você só assina a autorização.",
  },
  {
    q: "Atendimento pelo WhatsApp é seguro e profissional?",
    a: "Sim. O atendimento é feito por contadores, sob sigilo profissional. Documentos sensíveis podem ser enviados por canal criptografado, e tudo fica registrado.",
  },
  {
    q: "Quanto custa? Vou pagar mais caro do que hoje?",
    a: "O honorário depende do porte e do regime da empresa, e você recebe a proposta antes de decidir. Na maioria dos casos o planejamento tributário economiza mais do que custa a mensalidade.",
  },
  {
    q: "Atendem empresas de qualquer cidade?",
    a: "Sim. Como o atendimento é digital, atendemos empresas de todo o Brasil.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="relative isolate overflow-hidden bg-mist py-24 sm:py-32">
      <Watermark className="-bottom-24 -left-28 w-[28rem]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <BlurFade className="lg:sticky lg:top-28 lg:self-start">
          <Badge>Dúvidas frequentes</Badge>
          <h2 id="faq-title" className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Antes de chamar, talvez você queira saber.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">As respostas para o que mais ouvimos de quem está pensando em trocar de contador.</p>
        </BlurFade>
        <BlurFade delay={100}>
          <Accordion>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} question={f.q} defaultOpen={i === 0}>
                {f.a}
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
