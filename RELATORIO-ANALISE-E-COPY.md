# Relatório de análise, estratégia e copy — K7 Sites

## 1. Objetivo do projeto

Criar uma página comercial completa para a K7 Sites vender landing pages e sites profissionais. O novo projeto utiliza a referência fornecida apenas para estudar hierarquia, ritmo, seções e padrões de interação. Código, textos, imagens, números, marcas e elementos proprietários da referência não foram copiados.

## 2. Análise da referência

A página estudada segue uma jornada longa de conversão, com aproximadamente 14 blocos de conteúdo:

1. faixa de benefícios e cabeçalho fixo;
2. hero com promessa, apoio, CTAs e elemento visual animado;
3. identificação das dores do visitante;
4. números/indicadores de credibilidade;
5. apresentação da equipe ou operação;
6. catálogo de serviços;
7. galeria de cases;
8. chamada intermediária;
9. apresentação da empresa e seus pilares;
10. depoimentos;
11. perguntas frequentes;
12. planos ou formatos comerciais;
13. formulário em etapas;
14. fechamento e rodapé.

### Padrões visuais observados

- Cabeçalho fixo para manter a ação principal disponível.
- Tipografia geométrica nos títulos e fonte neutra nos textos.
- Alternância entre fundos claros e escuros para separar capítulos.
- Cards com bordas discretas, números e microtextos.
- CTAs repetidos ao longo da jornada.
- Elementos flutuantes e círculos orbitais no hero.
- Galeria em grade, FAQ em acordeão e formulário progressivo.

### Padrões de movimento observados

- entrada suave de textos e cards durante a rolagem;
- ticker horizontal contínuo;
- objetos com movimento flutuante;
- órbitas com rotação constante;
- transições em hover;
- abertura animada do FAQ;
- navegação por âncoras com rolagem suave.

## 3. Nova arquitetura K7 Sites

A nova versão preserva a lógica de persuasão, mas apresenta uma composição original e adaptada à K7:

1. **Hero:** “Sua presença digital com cara de grande marca.”
2. **Sinalização:** planejamento, visual, responsividade e entrega.
3. **Diagnóstico:** mensagem confusa, visual improvisado e experiência ruim no celular.
4. **Equação de valor:** clareza + design + estratégia.
5. **Serviços:** landing pages, sites institucionais, páginas de vendas, sites para cursos, redesign e suporte.
6. **Processo:** diagnóstico, estratégia, desenvolvimento e publicação.
7. **Projetos:** estruturas demonstrativas com aviso explícito para substituir por cases reais.
8. **CTA intermediário:** reforço de percepção de valor.
9. **Sobre a K7:** posicionamento e três princípios de trabalho.
10. **Prova social:** área reservada, sem depoimentos inventados.
11. **Formatos comerciais:** três pontos de partida, sem preços inventados.
12. **FAQ:** sete objeções principais.
13. **Formulário:** identificação, tipo de projeto e detalhes.
14. **CTA final e rodapé.**

## 4. Copy principal entregue

### Promessa central

> Sua presença digital com cara de grande marca.

### Texto de apoio

> Landing pages e sites profissionais que organizam sua mensagem, valorizam seu negócio e transformam visitas em oportunidades.

### Proposta de valor

> A K7 Sites cria experiências digitais para profissionais e empresas que querem apresentar seu trabalho com mais clareza, confiança e personalidade.

### CTA principal

> Quero meu projeto

### CTA intermediário

> Você já entrega um bom trabalho. Seu site precisa mostrar isso.

### CTA final

> Transforme sua presença digital em uma apresentação à altura do seu trabalho.

### Condição comercial incluída

> Condição padrão sugerida: 50% antes do início e 50% na conclusão do projeto.

O FAQ também informa que o prazo começa após aprovação, pagamento inicial e recebimento dos materiais, e que o projeto pode ficar pronto antes do prazo previsto.

## 5. Identidade visual aplicada

- Azul metálico principal: `#1565FF`.
- Azul profundo: `#07379B`.
- Ciano de destaque: `#00A8FF`.
- Prata: `#D9DDE3`.
- Cinza: `#9CA1A8` e `#34363A`.
- Preto: `#08090B`.
- Branco gelo: `#F5F7FA`.
- Títulos com aparência geométrica; corpo de texto limpo e legível.
- Superfícies escuras, bordas metálicas discretas, luz azul e bastante espaço negativo.

## 6. Interações e animações implementadas

- ticker contínuo no topo;
- cabeçalho fixo com efeito de vidro;
- indicador de progresso de rolagem;
- rolagem suave entre as âncoras;
- menu mobile com abertura e fechamento;
- entrada progressiva das seções via `IntersectionObserver`;
- mockup de navegador construído em CSS;
- órbitas rotativas e cartões flutuantes no hero;
- hover nos serviços, CTAs e cards;
- botão para mostrar mais projetos;
- FAQ em acordeão com `aria-expanded`;
- formulário validado em três etapas;
- alternativa para usuários que preferem movimento reduzido.

## 7. Responsividade validada

Foram testadas as seguintes larguras:

- Desktop: `1440 × 900`.
- Tablet: `768 × 1024`.
- Mobile: `390 × 844`.

Resultados:

- sem rolagem horizontal indevida;
- cabeçalho fixo e âncoras alinhadas;
- menu mobile funcional;
- serviços em três, duas ou uma coluna conforme o espaço;
- projetos reorganizados para uma coluna no celular;
- botões ocupam largura total em telas pequenas;
- formulário permanece legível e operável.

## 8. SEO e compartilhamento

### Title

`K7 Sites | Landing Pages e Sites Profissionais`

### Description

`Sites e landing pages com estratégia, identidade e experiência responsiva para valorizar sua marca e transformar visitas em oportunidades.`

### Open Graph

- Título específico para compartilhamento.
- Descrição curta.
- Imagem social K7 em `public/og.png`.
- Idioma `pt-BR` e locale `pt_BR`.

### Estrutura semântica

- um único `h1`;
- seções com `h2` e cards com `h3`;
- navegação principal identificada;
- botões e links com nomes acessíveis;
- imagens com texto alternativo;
- labels em todos os campos.

## 9. Acessibilidade aplicada

- link “Ir para o conteúdo” para navegação por teclado;
- contraste alto entre texto e fundo;
- estados de foco nos campos;
- controles reais de botão no menu, FAQ, galeria e formulário;
- estado `aria-expanded` no menu e no FAQ;
- respeito à configuração `prefers-reduced-motion`;
- mensagens não dependem apenas de cor;
- formulário não envia dados sem confirmação/integração.

## 10. Conteúdo que precisa ser preenchido antes da campanha

1. WhatsApp oficial da K7 Sites.
2. Perfil oficial do Instagram.
3. Valores ou decisão de remover a seção de preços.
4. Cases reais, imagens e resultados autorizados.
5. Depoimentos reais e autorizados.
6. Integração final do formulário.
7. Domínio definitivo, caso não seja `k7sites.com.br`.
8. Política de privacidade caso o formulário passe a armazenar dados.

## 11. Checklist técnico concluído

- [x] Página abre com status HTTP 200.
- [x] Build de produção concluído.
- [x] Lint sem erros.
- [x] Imagens carregam corretamente.
- [x] Links internos navegam para as seções corretas.
- [x] Menu mobile abre, fecha e navega.
- [x] FAQ abre e fecha.
- [x] Galeria mostra os projetos adicionais.
- [x] Formulário percorre as três etapas e valida os campos.
- [x] Desktop, tablet e mobile verificados.

## 12. Sugestões de textos alternativos para futuros cases

- “Landing page criada pela K7 Sites para [nome do cliente], exibida em desktop.”
- “Site institucional de [segmento] com destaque para serviços e botão de contato.”
- “Página de vendas para [produto], com seção de benefícios e checkout integrado.”
- “Versão mobile do projeto [nome], criada pela K7 Sites.”

Evite descrições genéricas como “imagem” ou “foto do site”. O texto alternativo deve explicar o que a imagem mostra e por que ela importa naquele contexto.
