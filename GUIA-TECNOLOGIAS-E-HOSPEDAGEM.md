# K7 Sites — tecnologias e hospedagem

## Tecnologias usadas

- React 19 para a interface e os componentes.
- TypeScript para o código com tipagem.
- Next.js 16 com App Router.
- CSS responsivo e animações nativas.
- `next/image` nativo para otimização das imagens.
- Configuração nativa da Vercel por meio de `vercel.json`.
- ESLint para validação do código.
- Node.js 22.13 ou superior.

O projeto não utiliza WordPress, Elementor, Bootstrap ou jQuery.

## Executar localmente

1. Instale o Node.js 22.13 ou superior.
2. Abra a pasta do projeto no VS Code.
3. Execute `pnpm install`.
4. Execute `pnpm run dev`.
5. Abra o endereço exibido pelo terminal.

## Hospedagem na Vercel

O projeto está preparado como uma aplicação Next.js padrão, reconhecida automaticamente pela Vercel. O comando `pnpm run build` executa a mesma compilação utilizada na publicação.

### Como publicar

1. Envie os arquivos para um repositório no GitHub.
2. Na Vercel, selecione **Add New Project** e importe o repositório.
3. Confirme que o framework detectado é **Next.js**.
4. Mantenha o comando de build como `pnpm run build` ou deixe a detecção automática da Vercel.
5. Não defina uma pasta de saída manualmente; use o padrão do Next.js.
6. Clique em **Deploy**.

O projeto usa Node.js 22.x, uma versão disponível na Vercel. Não existem variáveis de ambiente obrigatórias, banco de dados ou rotas adicionais.

## Rotas

O site mantém somente a página principal `/`. Os links com `#`, como `/#projetos` e `/#depoimentos`, são âncoras da mesma página e não criam novas rotas.

Documentação oficial:

- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/builds
- https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
