import { cn } from "@/lib/utils";
import { SYMBOL_PATHS } from "./symbol-paths";

/**
 * Símbolo da Efycaz desenhado em linhas que percorrem o contorno (efeito "line drawing").
 * Um traço de base bem suave fica sempre visível; por cima, as linhas são desenhadas,
 * seguram e se apagam em loop, cada parte com um pequeno atraso.
 */
export function LineSymbol({ className, duration = 9 }: { className?: string; duration?: number }) {
  return (
    <svg
      viewBox="0 0 444 444"
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 select-none", className)}
      style={{ "--draw-duration": `${duration}s` } as React.CSSProperties}
    >
      <g fill="none" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        {/* Base: contorno quase invisível, dá a "pista" do desenho */}
        {SYMBOL_PATHS.map((d, i) => (
          <path key={`b${i}`} d={d} stroke="currentColor" strokeOpacity={0.12} strokeWidth={1.2} />
        ))}
        {/* Linhas animadas */}
        {SYMBOL_PATHS.map((d, i) => (
          <path
            key={`a${i}`}
            d={d}
            pathLength={1}
            className="line-draw"
            stroke="currentColor"
            strokeWidth={1.6}
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
