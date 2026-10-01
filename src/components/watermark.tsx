import { cn } from "@/lib/utils";

/** Símbolo da Efycaz como marca d'água decorativa. O pai precisa ser `relative overflow-hidden`. */
export function Watermark({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <img
      src={tone === "light" ? "/simbolo-claro.png" : "/simbolo-grafite.png"}
      alt=""
      aria-hidden
      loading="lazy"
      className={cn(
        "pointer-events-none absolute -z-10 select-none",
        tone === "light" ? "opacity-[0.05]" : "opacity-[0.045]",
        className,
      )}
    />
  );
}
