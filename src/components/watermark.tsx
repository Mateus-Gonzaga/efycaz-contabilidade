import { LineSymbol } from "@/components/magic/line-symbol";
import { cn } from "@/lib/utils";

/**
 * Símbolo da Efycaz como marca d'água decorativa, desenhado em linhas animadas.
 * tone="dark": linhas escuras, para seções de fundo claro.
 * tone="light": linhas teal, para seções de fundo grafite.
 * O pai precisa ser `relative isolate overflow-hidden`.
 */
export function Watermark({
  tone = "dark",
  className,
  duration = 10,
}: {
  tone?: "dark" | "light";
  className?: string;
  duration?: number;
}) {
  return (
    <LineSymbol
      duration={duration}
      className={cn(tone === "light" ? "text-teal opacity-45" : "text-ink-deep opacity-30", className)}
    />
  );
}
