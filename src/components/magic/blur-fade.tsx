import * as React from "react";
import { cn } from "@/lib/utils";

/** Fade + blur ao entrar na viewport (estilo Magic UI, sem dependências). */
export function BlurFade({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement>(null);
  // ?noanim mostra tudo de imediato (útil para auditorias como o Lighthouse, que não rolam a página)
  const [visible, setVisible] = React.useState(
    () => typeof window !== "undefined" && new URLSearchParams(window.location.search).has("noanim"),
  );

  React.useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      // Com "reduzir movimento" ativo no sistema, mantém só o fade (sem deslocamento nem desfoque)
      className={cn(
        "reveal transition-[opacity,translate,filter] duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:translate-y-0 motion-reduce:blur-none",
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[6px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
