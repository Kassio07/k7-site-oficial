# Site comercial — K7 Sites

Landing page original criada para apresentar e vender landing pages, sites institucionais, páginas de vendas e projetos digitais da K7 Sites.

## Rodar localmente

Requisitos: Node.js 22.13 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

Verificação de produção:

```bash
pnpm lint
pnpm build
```

## Onde editar

- Conteúdo, serviços, projetos, FAQ e planos: `app/page.tsx`.
- Cores, espaçamentos, animações e responsividade: `app/globals.css`.
- Título, descrição e compartilhamento social: `app/layout.tsx`.
- Logo oficial: `public/k7-logo.png`.
- Arte de compartilhamento: `public/og.png`.

## Tecnologias utilizadas

- React 19 para os componentes e interações da página.
- TypeScript para tipagem e organização do código.
- Vinext e Vite 8 para desenvolvimento e compilação.
- APIs compatíveis com Next.js, incluindo o componente de imagens otimizadas.
- HTML5 e CSS3 para estrutura, identidade visual, responsividade e animações.
- Tailwind CSS 4 e PostCSS disponíveis na base do projeto.
- Intersection Observer e Request Animation Frame para animações de entrada e contadores.
- ESLint para validação da qualidade do código.
- Node.js 22 com pnpm ou npm para instalar e executar o projeto.
- Cloudflare Workers e OpenAI Sites para hospedagem da versão publicada.
- WhatsApp `wa.me` para os botões de orçamento e contato.

O formulário valida as três etapas no navegador e direciona o atendimento para o WhatsApp. Ele não grava os dados em banco de dados.

## Estrutura entregue

- ticker e cabeçalho fixos;
- hero com CTAs e mockup animado;
- seção “O que entregamos” com seis diferenciais;
- serviços;
- processo em quatro etapas;
- galeria de projetos com “ver mais”;
- apresentação da K7 Sites;
- área reservada para prova social;
- formatos de projeto e condição de pagamento;
- FAQ interativo;
- formulário em três etapas;
- CTA final e rodapé;
- SEO, Open Graph, acessibilidade básica e redução de movimento;
- versões desktop, tablet e celular.

Leia também `RELATORIO-ANALISE-E-COPY.md` para conhecer a análise da referência e as decisões de conteúdo.
