import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Carrossel leve com scroll-snap nativo (arrastar no celular/trackpad funciona sem JS),
 * setas, barra de progresso e avanço automático que pausa ao passar o mouse, focar ou tocar.
 */
export function Carousel({
  children,
  label,
  autoplay = 4500,
  className,
}: {
  children: React.ReactNode;
  label: string;
  autoplay?: number | false;
  className?: string;
}) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const [progress, setProgress] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [range, setRange] = React.useState({ from: 1, to: 1, total: 0 });
  const [scrollable, setScrollable] = React.useState(true);

  const update = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setScrollable(max > 4);
    // Quais cards estão visíveis (ex.: "1–3 de 12")
    const cards = el.children;
    const first = cards[0] as HTMLElement | undefined;
    if (first) {
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const stepW = first.offsetWidth + gap;
      const from = Math.min(cards.length, Math.round(el.scrollLeft / stepW) + 1);
      const perView = Math.max(1, Math.floor((el.clientWidth + gap) / stepW));
      setRange({ from, to: Math.min(cards.length, from + perView - 1), total: cards.length });
    }
  }, []);

  // Avança um card (ou volta ao início quando chega ao fim)
  const step = React.useCallback((dir: 1 | -1, loop = false) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = (card?.offsetWidth ?? el.clientWidth) + gap;
    const max = el.scrollWidth - el.clientWidth;
    if (loop && dir === 1 && el.scrollLeft >= max - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  }, []);

  React.useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  React.useEffect(() => {
    if (!autoplay || paused || !scrollable) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") step(1, true);
    }, autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, paused, scrollable, step]);

  const arrow =
    "grid size-11 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-all duration-300 hover:border-teal hover:bg-teal hover:text-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal disabled:pointer-events-none disabled:opacity-35";

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-8 pt-2 [scrollbar-width:none] focus-visible:outline-none sm:-mx-8 sm:scroll-px-8 sm:px-8 sm:[mask-image:linear-gradient(90deg,transparent,#000_2rem,#000_calc(100%-2rem),transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div className={cn("mt-2 flex items-center gap-6", !scrollable && "hidden")}>
        <p className="min-w-[5.5rem] font-display text-sm font-bold tabular-nums text-ink/80" aria-live="polite">
          {range.from === range.to ? range.from : `${range.from}–${range.to}`} <span className="font-sans font-normal text-ink/80">de {range.total}</span>
        </p>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10" aria-hidden>
          <div className="h-full rounded-full bg-teal transition-[width] duration-300" style={{ width: `${Math.max(12, progress * 100)}%` }} />
        </div>
        <div className="flex gap-3">
          <button type="button" className={arrow} onClick={() => step(-1)} disabled={atStart} aria-label="Serviços anteriores">
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button type="button" className={arrow} onClick={() => step(1)} disabled={atEnd} aria-label="Próximos serviços">
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

/** Item do carrossel: largura responsiva (1,15 no celular, 2 no tablet, 3 no desktop). */
export function CarouselItem({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn(
        "w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]",
        className,
      )}
      {...props}
    />
  );
}
