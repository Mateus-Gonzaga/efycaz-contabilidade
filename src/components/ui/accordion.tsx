import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accordion acessível baseado em <details>/<summary> (funciona sem JS, teclado nativo). */
export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("divide-y divide-ink/10 border-y border-ink/10", className)} {...props} />;
}

export function AccordionItem({
  question,
  children,
  defaultOpen,
}: {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group py-2" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-5 text-left font-display text-lg font-bold tracking-tight transition-colors hover:text-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:text-xl [&::-webkit-details-marker]:hidden">
        {question}
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-open:rotate-45 group-open:border-teal group-open:bg-teal group-open:text-ink-deep">
          <Plus className="size-4" aria-hidden />
        </span>
      </summary>
      <div className="max-w-2xl pb-6 leading-relaxed text-ink/80">{children}</div>
    </details>
  );
}
