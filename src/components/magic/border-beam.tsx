/** Feixe de luz percorrendo a borda do card pai (que precisa ser `relative overflow-hidden`). */
export function BorderBeam({ size = 160, duration = 8, delay = 0 }: { size?: number; duration?: number; delay?: number }) {
  return (
    <div
      aria-hidden
      style={{ "--duration": duration } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <div
        className="absolute aspect-square animate-border-beam bg-gradient-to-l from-teal via-teal/60 to-transparent"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          animationDelay: `-${delay}s`,
        }}
      />
    </div>
  );
}
