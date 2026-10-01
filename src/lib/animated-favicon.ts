import { SYMBOL_PATHS } from "@/components/magic/symbol-paths";

/**
 * Favicon animado: o símbolo da Efycaz é desenhado em linhas brancas sobre fundo grafite,
 * no mesmo ritmo das marcas d'água do site (desenha, segura e apaga).
 * Usa canvas e troca o <link rel="icon"> a cada quadro, então funciona em todos os navegadores
 * (Chrome e Edge não animam favicons SVG). Em abas em segundo plano o navegador reduz a frequência.
 */
const SIZE = 64;
const CYCLE = 9000; // ms, igual à animação das linhas no site
const STAGGER = 350; // ms entre cada parte do símbolo
const FPS = 20;

function ease(t: number) {
  // aproximação da curva cubic-bezier(.45,.05,.35,1)
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Progresso do traço (0 = invisível, 1 = completo) e opacidade num instante do ciclo. */
function frameAt(ms: number) {
  const p = ((ms % CYCLE) + CYCLE) % CYCLE / CYCLE;
  if (p < 0.4) return { draw: ease(p / 0.4), start: 0, alpha: Math.min(1, p / 0.06) };
  if (p < 0.7) return { draw: 1, start: 0, alpha: 1 };
  const k = ease((p - 0.7) / 0.3);
  return { draw: 1, start: k, alpha: 1 - k };
}

export function startAnimatedFavicon() {
  if (typeof document === "undefined") return () => {};
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) return () => {};

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  // Comprimento de cada contorno (para animar o traço proporcionalmente)
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  document.body.appendChild(svg);
  const parts = SYMBOL_PATHS.map((d) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", d);
    svg.appendChild(el);
    return { path: new Path2D(d), length: el.getTotalLength() };
  });
  svg.remove();

  const pad = 8;
  const scale = (SIZE - pad * 2) / 444;
  const t0 = performance.now();

  const draw = () => {
    const now = performance.now() - t0;
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Fundo grafite com cantos arredondados
    ctx.fillStyle = "#484655";
    ctx.beginPath();
    ctx.roundRect(0, 0, SIZE, SIZE, 14);
    ctx.fill();

    ctx.save();
    ctx.translate(pad, pad);
    ctx.scale(scale, scale);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Trilha suave sempre visível (o ícone nunca fica vazio)
    ctx.strokeStyle = "rgba(255,255,255,.28)";
    ctx.lineWidth = 9;
    parts.forEach(({ path }) => ctx.stroke(path));

    // Linhas brancas animadas
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 16;
    parts.forEach(({ path, length }, i) => {
      const f = frameAt(now - i * STAGGER);
      const visible = (f.draw - f.start) * length;
      if (visible <= 0 || f.alpha <= 0) return;
      ctx.globalAlpha = f.alpha;
      ctx.setLineDash([visible, length]);
      ctx.lineDashOffset = -f.start * length;
      ctx.stroke(path);
    });
    ctx.restore();

    link.href = canvas.toDataURL("image/png");
  };

  draw();
  const id = window.setInterval(draw, 1000 / FPS);
  return () => window.clearInterval(id);
}
