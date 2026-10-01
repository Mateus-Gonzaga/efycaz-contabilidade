import * as React from "react";
import { cn } from "@/lib/utils";

/** Faixa infinita (conteúdo duplicado para o loop; a cópia fica oculta para leitores de tela). */
export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]", className)}>
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
