import type * as React from "react";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { ADDRESS_LINE, EMAIL, gmailComposeUrl } from "@/lib/site";

const UPDATED_AT = "1º de outubro de 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quem somos",
    body: (
      <p>
        Este site pertence à <strong>Efycaz Contabilidade</strong>, com endereço em {ADDRESS_LINE}. Somos responsáveis
        (controladores) pelos dados pessoais tratados por meio dele, nos termos da Lei Geral de Proteção de Dados (Lei nº
        13.709/2018, a LGPD).
      </p>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        <p>O site não exige cadastro. Tratamos apenas os dados que você decide nos enviar:</p>
        <ul>
          <li>
            <strong>Formulário de contato:</strong> nome, telefone (WhatsApp), cidade e atividade da empresa.
          </li>
          <li>
            <strong>Conversas pelo WhatsApp, e-mail ou telefone:</strong> as informações que você compartilhar ao falar com
            a nossa equipe.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como o formulário funciona",
    body: (
      <p>
        Os dados do formulário <strong>não são armazenados no site</strong>. Ao clicar em “Enviar”, eles são colocados numa
        mensagem que abre no seu próprio WhatsApp, e você decide se quer enviá-la. A partir daí, a conversa segue as regras
        de privacidade do WhatsApp (Meta).
      </p>
    ),
  },
  {
    title: "4. Para que usamos os dados",
    body: (
      <ul>
        <li>Responder ao seu contato e entender a necessidade da sua empresa;</li>
        <li>Elaborar propostas e prestar os serviços contábeis contratados;</li>
        <li>Cumprir obrigações legais e regulatórias da atividade contábil.</li>
      </ul>
    ),
  },
  {
    title: "5. Base legal",
    body: (
      <p>
        Tratamos os dados com base no seu consentimento ao entrar em contato, na execução de procedimentos preliminares a um
        contrato (como o envio de proposta) e no cumprimento de obrigações legais, conforme o art. 7º da LGPD.
      </p>
    ),
  },
  {
    title: "6. Compartilhamento",
    body: (
      <p>
        Não vendemos nem alugamos dados pessoais. Eles só são compartilhados quando necessário para prestar o serviço (por
        exemplo, com órgãos públicos em processos de abertura de empresa ou obrigações fiscais) ou por exigência legal.
      </p>
    ),
  },
  {
    title: "7. Cookies e serviços de terceiros",
    body: (
      <p>
        Este site não usa cookies de publicidade nem ferramentas de rastreamento. A seção de localização exibe um mapa do
        Google Maps, que pode coletar dados de navegação conforme a política de privacidade do Google. Os links de contato
        abrem o WhatsApp e o Gmail, que seguem as políticas de seus respectivos fornecedores.
      </p>
    ),
  },
  {
    title: "8. Por quanto tempo guardamos",
    body: (
      <p>
        Mantemos os dados pelo tempo necessário para atender ao seu contato e, no caso de clientes, pelo prazo exigido pela
        legislação contábil e fiscal.
      </p>
    ),
  },
  {
    title: "9. Seus direitos",
    body: (
      <p>
        Você pode, a qualquer momento, pedir confirmação de que tratamos seus dados, acesso, correção, anonimização,
        portabilidade ou exclusão, além de revogar o consentimento. Basta escrever para{" "}
        <a href={gmailComposeUrl} target="_blank" rel="noopener">
          {EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    title: "10. Alterações",
    body: <p>Esta política pode ser atualizada. A data da última revisão fica sempre no topo desta página.</p>,
  },
];

export function PrivacyPage() {
  return (
    <>
      <header className="bg-ink py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Efycaz Contabilidade, página inicial">
            <img src="/simbolo-claro.png" alt="" width={40} height={40} className="size-10" />
            <span className="leading-none">
              <span className="block font-display text-xl font-extrabold tracking-wide text-teal">EFYCAZ</span>
              <span className="block text-[0.55rem] font-bold uppercase tracking-[0.32em] text-mist/80">Contabilidade</span>
            </span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-mist/80 transition-colors hover:text-teal">
            <ArrowLeft className="size-4" aria-hidden /> Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-deep">Atualizada em {UPDATED_AT}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Explicamos aqui, em linguagem simples, como tratamos os dados pessoais de quem visita este site e entra em contato
          com a Efycaz.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink/80 [&_a]:font-bold [&_a]:text-teal-deep [&_a]:underline [&_a]:underline-offset-4 [&_li]:mt-2 [&_p+ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-ink">{s.title}</h2>
              {s.body}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
