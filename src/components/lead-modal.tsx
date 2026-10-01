import * as React from "react";
import { ArrowRight, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { asset, HOURS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "efycaz-lead-modal-visto";

const atividades = [
  "Prestação de serviços",
  "Comércio / varejo",
  "Saúde (clínica, consultório)",
  "Tecnologia",
  "Alimentação",
  "Sou MEI",
  "Ainda vou abrir empresa",
  "Outra",
];

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/^(\d{2})(\d+)/, "($1) $2");
  if (d.length <= 10) return d.replace(/^(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
  return d.replace(/^(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
}

const field =
  "h-12 w-full rounded-xl border border-ink/10 bg-mist px-4 text-ink placeholder:text-ink/40 transition-colors focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/30";

/** Abre uma vez por sessão quando o visitante chega ao fim da página. O envio abre o WhatsApp com os dados. */
export function LeadModal() {
  const ref = React.useRef<HTMLDialogElement>(null);
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    // ?nopopup desativa o pop-up (útil para capturas de tela e testes)
    if (seen || new URLSearchParams(location.search).has("nopopup")) return;

    const target = document.querySelector("footer");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}
        ref.current?.showModal();
      },
      { threshold: 0.3 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  function close() {
    ref.current?.close();
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Olá! Vim pelo site e quero falar com um especialista da Efycaz.",
      "",
      `*Nome:* ${f.get("nome")}`,
      `*Telefone:* ${f.get("telefone")}`,
      `*Atividade:* ${f.get("atividade")}`,
      `*Cidade:* ${f.get("cidade")}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
    close();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby="lead-title"
      onClick={(e) => e.target === ref.current && close()}
      className={cn(
        "m-auto w-[calc(100%-2rem)] max-w-4xl overflow-visible rounded-3xl bg-white p-0 text-ink shadow-2xl",
        "backdrop:bg-ink-deep/80 backdrop:backdrop-blur-sm",
        "open:animate-[modal-in_.45s_cubic-bezier(.2,.8,.2,1)]",
      )}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Fechar"
        className="absolute -top-3 -right-3 z-10 grid size-10 place-items-center rounded-full bg-ink text-mist shadow-lg transition-transform hover:rotate-90 hover:bg-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:-top-4 sm:-right-4"
      >
        <X className="size-5" />
      </button>

      <div className="grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-[0.9fr_1.1fr]">
        {/* Lado da marca */}
        <div className="grain relative overflow-hidden rounded-t-3xl bg-ink px-8 py-10 text-mist md:rounded-l-3xl md:rounded-tr-none md:px-10 md:py-12 max-md:flex max-md:items-center max-md:px-6 max-md:py-6">
          <div className="relative flex items-center gap-5 md:block">
            <div className="relative grid size-16 shrink-0 place-items-center md:size-40">
              <span aria-hidden className="absolute inset-0 rotate-6 rounded-2xl bg-teal md:rounded-[2rem]" />
              <span aria-hidden className="absolute inset-0 -rotate-3 rounded-2xl bg-ink-soft md:rounded-[2rem]" />
              <img src={asset("simbolo-claro.png")} alt="Efycaz Contabilidade" className="relative w-11 md:w-28" />
            </div>
            <h2 id="lead-title" className="font-display text-xl font-extrabold leading-tight tracking-tight md:mt-8 md:text-4xl">
              Fale com um <span className="text-teal">especialista</span>
            </h2>
            <p className="mt-4 hidden text-mist/75 md:block">
              Preencha em 20 segundos e continue a conversa no WhatsApp com um contador.
            </p>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={onSubmit} className="grid content-center gap-4 px-6 py-6 md:gap-5 sm:grid-cols-2 md:px-10 md:py-12">
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">
            Nome *
            <input name="nome" required autoComplete="name" placeholder="Seu nome completo" className={field} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            WhatsApp *
            <input
              name="telefone"
              required
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="(61) 90000-0000"
              pattern="\(\d{2}\) \d{4,5}-\d{4}"
              title="Informe DDD e número"
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              className={field}
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Cidade *
            <input name="cidade" required autoComplete="address-level2" placeholder="Ex.: Brasília" className={field} />
          </label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">
            Atividade *
            <select name="atividade" required defaultValue="" className={cn(field, "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23484655%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}>
              <option value="" disabled>Selecione</option>
              {atividades.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>
          <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-ink/80 sm:max-w-[15rem]">
              Atendimento de {HOURS.charAt(0).toLowerCase() + HOURS.slice(1)}. Seus dados vão direto para o WhatsApp e não ficam armazenados no site. <a href={asset("privacidade.html")} target="_blank" className="underline underline-offset-2 hover:text-teal-deep">Política de Privacidade</a>.
            </p>
            <button
              type="submit"
              className="group/btn inline-flex h-13 items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-ink-deep shadow-[0_8px_24px_-8px_rgba(77,182,172,.7)] transition-all hover:-translate-y-0.5 hover:bg-[#5fc4ba] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="size-5" /> Enviar
              <ArrowRight className="size-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
