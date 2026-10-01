import * as React from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ink/90 py-3 shadow-lg shadow-ink-deep/20 backdrop-blur-md" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" className="group/logo flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal" aria-label="Efycaz Contabilidade, voltar ao início">
          <img src="/simbolo-claro.png" alt="" width={44} height={44} className="size-11 transition-transform duration-300 group-hover/logo:-translate-y-0.5" />
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold tracking-wide text-teal">EFYCAZ</span>
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.32em] text-mist/80">Contabilidade</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-bold text-mist/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-teal after:transition-all hover:text-mist hover:after:w-full">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={whatsappLink()} target="_blank" rel="noopener" size="sm">
          <WhatsAppIcon />
          <span className="hidden sm:inline">Fale com um especialista</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </header>
  );
}
