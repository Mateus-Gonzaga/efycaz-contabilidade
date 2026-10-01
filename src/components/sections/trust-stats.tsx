import { BlurFade } from "@/components/magic/blur-fade";
import { FOUNDED_YEAR } from "@/lib/site";

// Só fatos verificáveis. Quando tiver o número real de empresas atendidas, vale incluir aqui.
const stats = [
  { value: `Desde ${FOUNDED_YEAR}`, label: "cuidando da contabilidade de empresas" },
  { value: "+13 serviços", label: "da abertura do CNPJ à gestão financeira" },
  { value: "100% humano", label: "quem responde é o seu contador" },
  { value: "Todo o Brasil", label: "com atendimento digital" },
];

export function TrustStats() {
  return (
    <section aria-label="A Efycaz em números" className="border-b border-ink/10 bg-paper">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <BlurFade
            key={s.value}
            delay={i * 100}
            className="flex flex-col gap-1.5 border-ink/10 py-10 pr-4 odd:border-r even:pl-6 max-lg:[&:nth-child(-n+2)]:border-b lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
          >
            <dt className="order-2 text-sm leading-snug text-ink/80">{s.label}</dt>
            <dd className="order-1 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.value}</dd>
          </BlurFade>
        ))}
      </dl>
    </section>
  );
}
