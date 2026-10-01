import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Botão flutuante que aparece no fim da página e leva ao topo. */
export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  // Só aparece quando o rodapé entra na tela, ou seja, no fim da página
  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-teal text-ink-deep shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5fc4ba] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 sm:bottom-8 sm:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
    </button>
  );
}
