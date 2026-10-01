import * as React from "react";
import { ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#duvidas", label: "Dúvidas" },
];

/** Navbar flutuante em formato de pílula, com vidro fosco (estilo back4you). */
export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 ring-1 transition-all duration-500 sm:pl-7",
          "backdrop-blur-xl backdrop-saturate-150",
          scrolled
            ? "bg-ink/75 shadow-[0_18px_40px_-18px_rgba(20,18,30,.65)] ring-white/10"
            : "bg-ink/35 shadow-none ring-white/10",
        )}
      >
        <a
          href="#inicio"
          className="group/logo flex shrink-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          aria-label="Efycaz Contabilidade, voltar ao início"
        >
          <img src="/simbolo-claro.png" alt="" width={40} height={40} className="size-9 transition-transform duration-300 group-hover/logo:-translate-y-0.5 sm:size-10" />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-wide text-teal sm:text-xl">EFYCAZ</span>
            <span className="block text-[0.55rem] font-bold uppercase tracking-[0.32em] text-mist/80">Contabilidade</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-[0.95rem] text-mist/90">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
          className="group/cta inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-teal pl-4 pr-3 font-bold text-ink-deep transition-all duration-300 hover:bg-[#5fc4ba] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:pl-6 sm:pr-4"
        >
          <WhatsAppIcon className="size-5" />
          <span className="hidden sm:inline">Fale com um especialista</span>
          <span className="sm:hidden">WhatsApp</span>
          <ChevronRight className="size-5 transition-transform duration-300 group-hover/cta:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </header>
  );
}
