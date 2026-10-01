import { Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, asset, gmailComposeUrl, mapsDirectionsUrl } from "@/lib/site";
import { Watermark } from "@/components/watermark";

const nav = [
  { href: asset("#servicos"), label: "Serviços" },
  { href: asset("#como-funciona"), label: "Como funciona" },
  { href: asset("#depoimentos"), label: "Clientes" },
  { href: asset("#duvidas"), label: "Dúvidas frequentes" },
  { href: asset("#localizacao"), label: "Onde estamos" },
];

const servicos = [
  "Planejamento tributário",
  "Abertura de empresa",
  "Contabilidade mensal",
  "Folha e eSocial",
  "BPO financeiro",
];

const linkClass = "transition-colors hover:text-teal focus-visible:outline-none focus-visible:text-teal";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-deep text-sm text-mist/70">
      <Watermark tone="light" className="-right-16 -top-10 w-80 opacity-25" duration={12} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Marca */}
        <div>
          <a href={asset("#inicio")} className="inline-flex items-center gap-3" aria-label="Efycaz Contabilidade, voltar ao início">
            <img src={asset("simbolo-claro.png")} alt="" width={44} height={44} className="size-11" />
            <span className="leading-none">
              <span className="block font-display text-xl font-extrabold tracking-wide text-teal">EFYCAZ</span>
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.32em] text-mist/80">Contabilidade</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs leading-relaxed">
            Contabilidade consultiva para empresas que querem pagar o imposto certo e crescer com segurança.
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé">
          <h2 className="font-display text-base font-bold text-mist">Navegação</h2>
          <ul className="mt-4 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Serviços */}
        <div>
          <h2 className="font-display text-base font-bold text-mist">Serviços</h2>
          <ul className="mt-4 space-y-3">
            {servicos.map((s) => (
              <li key={s}>
                <a href={asset("#servicos")} className={linkClass}>{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-display text-base font-bold text-mist">Contato</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="tel:+556136138796" className={`inline-flex items-center gap-2.5 ${linkClass}`}>
                <Phone className="size-4 text-teal" aria-hidden /> (61) 3613-8796
              </a>
            </li>
            <li>
              <a href={gmailComposeUrl} target="_blank" rel="noopener" className={`inline-flex items-center gap-2.5 break-all ${linkClass}`}>
                <Mail className="size-4 shrink-0 text-teal" aria-hidden /> efycaz.contabil@gmail.com
              </a>
            </li>
            <li>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener" className={`inline-flex gap-2.5 ${linkClass}`}>
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <span>
                  {ADDRESS.street}, {ADDRESS.district}
                  <br />
                  {ADDRESS.city} - {ADDRESS.state}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-mist/10">
        <div className="mx-auto flex max-w-6xl justify-center px-5 py-6 text-center text-xs text-mist/75 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} Efycaz Contabilidade. Todos os direitos reservados.
            <span aria-hidden className="mx-2">·</span>
            <a href={asset("privacidade.html")} className={linkClass}>Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
