import * as React from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { LineSymbol } from "@/components/magic/line-symbol";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { id: "servicos", label: "Serviços" },
  { id: "para-quem", label: "Para quem é" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "localizacao", label: "Contato" },
];

/** Seção visível no momento (para destacar o link correspondente). */
function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string | null>(null);
  React.useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      // "Ativa" a seção que ocupa a faixa central da tela
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [ids]);
  return active;
}

const ids = nav.map((n) => n.id);

/** Navbar flutuante em pílula com vidro fosco; encolhe ao rolar e destaca a seção atual. */
export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(ids);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu do celular com Esc
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "relative mx-auto rounded-[1.75rem] ring-1 ring-inset backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ease-out",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.08)]",
          open
            ? "max-w-6xl bg-ink-deep/95 ring-white/12"
            : scrolled
            ? "max-w-5xl bg-ink-deep/80 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_20px_44px_-20px_rgba(20,18,30,.7)] ring-white/12"
            : "max-w-6xl bg-white/[0.06] ring-white/15",
        )}
      >
        <div className={cn("flex items-center justify-between gap-4 pl-5 pr-2 transition-all duration-500 sm:pl-6", scrolled ? "py-1.5" : "py-2")}>
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="group/logo flex shrink-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Efycaz Contabilidade, voltar ao início"
          >
            {/* Símbolo desenhado em linhas brancas, sempre animado */}
            <LineSymbol
              strokeWidth={14}
              trail={0.35}
              className="relative z-0 size-10 overflow-visible text-white transition-transform duration-300 group-hover/logo:-rotate-6"
            />
            <span className="leading-none">
              <span className="block font-display text-lg font-extrabold tracking-wide text-teal">EFYCAZ</span>
              <span className="block text-[0.55rem] font-bold uppercase tracking-[0.32em] text-mist/80">Contabilidade</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 text-[0.92rem]">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                        isActive ? "bg-white/10 text-white" : "text-mist/80 hover:bg-white/[0.06] hover:text-white",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn("size-1.5 rounded-full bg-teal transition-all duration-300", isActive ? "scale-100 opacity-100" : "w-0 scale-0 opacity-0")}
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              aria-label="Falar com especialista no WhatsApp"
              className="group/cta inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-teal max-sm:w-11 sm:pl-5 sm:pr-3.5 text-[0.92rem] font-bold text-ink-deep shadow-[0_8px_20px_-8px_rgba(77,182,172,.8)] transition-all duration-300 hover:bg-[#5fc4ba] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <WhatsAppIcon className="size-5" />
              <span className="hidden sm:inline">Falar com especialista</span>
              <ChevronRight className="hidden size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 sm:block" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-celular"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center rounded-full text-mist transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Menu do celular/tablet */}
        <nav
          id="menu-celular"
          aria-label="Menu"
          className={cn("grid transition-all duration-300 ease-out lg:hidden", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
        >
          <div className="overflow-hidden">
            <ul className="mx-3 border-t border-white/10 pb-3 pt-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors",
                      active === item.id ? "bg-white/10 text-white" : "text-mist/85 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    {item.label}
                    <ChevronRight className="size-4 text-teal" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
