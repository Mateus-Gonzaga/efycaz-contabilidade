# Efycaz Contabilidade — Landing page

Landing page da Efycaz Contabilidade. React + TypeScript + Tailwind CSS v4 (Vite), componentes no padrão shadcn/ui e efeitos no estilo Magic UI.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ (index.html + privacidade.html)
npm run preview  # serve o build
```

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, endereço, telefone, e-mail, horário, ano de fundação | `src/lib/site.ts` |
| Domínio, SEO, dados estruturados (JSON-LD) | `index.html`, `public/robots.txt`, `public/sitemap.xml` |
| Seções da página | `src/components/sections/` |
| Cores e fontes | `src/index.css` (`@theme`) |
| Política de Privacidade | `src/pages/privacy.tsx` |

## Pendências antes de publicar

- Número real do WhatsApp (`WHATSAPP_NUMBER`).
- Confirmar endereço, horário e ano de fundação.
- Depoimentos reais (`social-proof.tsx`).
- Trocar `https://www.efycaz.com.br` pelo domínio definitivo.

## Parâmetros úteis

- `?nopopup` desliga o pop-up de contato.
- `?noanim` mostra tudo sem animação de entrada (para auditorias como o Lighthouse).
