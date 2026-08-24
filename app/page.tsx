"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ImageStream } from "@/components/ui/image-stream";

const whatsappLink = "https://wa.me/5511949214071?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20K7%20Sites%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const googleReviewsLink = "https://share.google/pDIhvdTpTxOyWEIOe";

const services = [
  { number: "01", title: "Landing pages", text: "Páginas focadas em uma oferta, com copy estratégica, estrutura persuasiva e chamadas para ação bem posicionadas.", tag: "Campanhas e lançamentos" },
  { number: "02", title: "Sites institucionais", text: "Uma presença digital completa para apresentar sua empresa, serviços, diferenciais e canais de contato com profissionalismo.", tag: "Autoridade e confiança" },
  { number: "03", title: "Páginas de vendas", text: "Experiências long-form para explicar, reduzir objeções e conduzir o visitante até a decisão de compra.", tag: "Produtos e serviços" },
  { number: "04", title: "Sites para cursos", text: "Estrutura para divulgar cursos, organizar conteúdos, integrar checkout e deixar a jornada de compra mais simples.", tag: "Infoprodutos" },
  { number: "05", title: "Redesign estratégico", text: "Atualização visual e estrutural de páginas antigas para melhorar clareza, percepção de valor e uso no celular.", tag: "Evolução de marca" },
  { number: "06", title: "Suporte e evolução", text: "Ajustes, novas seções e melhorias contínuas para manter o projeto alinhado às próximas necessidades do negócio.", tag: "Crescimento contínuo" },
];

const deliveries = [
  { icon: "⚡︎", title: "Sites rápidos de verdade", text: "Processo enxuto e otimizado: seu site profissional pronto em dias, sem aquela espera interminável de agência." },
  { icon: "▣", title: "Design premium responsivo", text: "Layouts modernos e elegantes que impressionam no computador, no tablet e principalmente no celular." },
  { icon: "↗", title: "Foco em conversão", text: "Estrutura de copy e CTAs pensada para transformar cada visita em um agendamento ou orçamento." },
  { icon: "⌕", title: "SEO e performance", text: "Sites leves e otimizados para o Google. Seja encontrado por quem realmente procura seu serviço." },
  { icon: "◉", title: "Integração com WhatsApp", text: "Botões e formulários que levam o cliente direto para a conversa, encurtando o caminho até a venda." },
  { icon: "⬡", title: "Suporte e publicação", text: "Cuidamos da publicação, domínio e ajustes. Você foca no seu negócio, nós cuidamos do site." },
];

const projects = [
  { theme: "barber", src: "/project-stream/barbearia.png", type: "SITE PARA BARBEARIA", title: "Barbearia premium", note: "Estilo • Serviços • Reservas" },
  { theme: "restaurant", src: "/niche-premium/restaurant.png", type: "SITE PARA RESTAURANTE", title: "Brasa Cozinha Autoral", note: "Experiência • Menu • Reservas" },
  { theme: "fitness", src: "/niche-premium/fitness.png", type: "SITE PARA ACADEMIA", title: "Pulse Performance", note: "Treinos • Performance • Planos" },
  { theme: "aesthetic", src: "/niche-premium/aesthetic.png", type: "SITE PARA ESTÉTICA", title: "Maison Aura", note: "Tratamentos • Bem-estar • Agendamento" },
  { theme: "dental", src: "/niche-premium/dental.png", type: "SITE PARA ODONTOLOGIA", title: "Oralys Odontologia", note: "Tecnologia • Confiança • Sorrisos" },
  { theme: "realestate", src: "/niche-premium/real-estate.png", type: "SITE PARA IMOBILIÁRIA", title: "Vértice Private Homes", note: "Imóveis • Exclusividade • Patrimônio" },
  { theme: "law", src: "/niche-premium/law.png", type: "SITE PARA ADVOCACIA", title: "Aurum Legal", note: "Autoridade • Estratégia • Confiança" },
  { theme: "beauty", src: "/niche-premium/beauty.png", type: "SITE PARA SALÃO DE BELEZA", title: "Éclat Beauty Studio", note: "Estilo • Transformação • Reservas" },
  { theme: "photography", src: "/niche-premium/photography.png", type: "SITE PARA FOTOGRAFIA", title: "Lume Editorial", note: "Portfólio • Direção • Ensaios" },
  { theme: "fashion", src: "/niche-premium/fashion.png", type: "LOJA DE MODA", title: "Noma Atelier", note: "Coleções • Editorial • E-commerce" },
];

const nicheProjects = [
  { src: "/project-stream/saude.jpg", label: "Saúde" },
  { src: "/project-stream/estetica.jpg", label: "Estética" },
  { src: "/project-stream/advocacia.jpg", label: "Advocacia" },
  { src: "/project-stream/higienizacao.jpg", label: "Higienização" },
  { src: "/project-stream/barbearia.png", label: "Barbearia" },
  { src: "/project-stream/cursos.jpg", label: "Cursos" },
  { src: "/project-stream/gastronomia.jpg", label: "Gastronomia" },
];

const testimonials = [
  {
    name: "Beatriz Araújo",
    details: "3 avaliações • 0 foto",
    date: "Há 6 dias",
    text: "Atendimento excelente. Criou minha página voltada para odontologia e hoje prospecto ainda mais clientes através dela 😍🚀👏 Obrigada.",
  },
  {
    name: "Breno Miguel",
    details: "3 avaliações • 0 foto",
    date: "Há 6 dias",
    text: "Superou as expectativas, muito bom o trabalho e muita dedicação, sucesso. 🙌",
  },
  {
    name: "Daniele Pedrosa",
    details: "Local Guide • 9 avaliações • 27 fotos",
    date: "Há 6 dias",
    text: "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!",
  },
];

const faqs = [
  ["Em quanto tempo meu site fica pronto?", "O prazo é definido conforme o escopo e começa após a aprovação, o pagamento inicial e o envio de todos os materiais. O projeto pode ficar pronto antes do prazo previsto."],
  ["A página funciona bem no celular?", "Sim. O layout é planejado para desktop, tablet e celular, com atenção especial à leitura, aos botões e aos formulários."],
  ["Eu preciso enviar os textos e as imagens?", "Você pode enviar os materiais disponíveis. A K7 organiza o conteúdo e orienta sobre o que estiver faltando. Produções específicas podem ser incluídas no orçamento."],
  ["Domínio e hospedagem estão incluídos?", "Esses serviços são definidos no orçamento. Se ainda não tiver domínio ou hospedagem, você recebe orientação para escolher e configurar."],
  ["Posso pedir alterações?", "Sim. A quantidade de rodadas de ajustes é registrada na proposta para que o processo seja organizado e previsível para os dois lados."],
  ["O pagamento é feito como?", "A condição padrão é 50% antes do início do projeto e 50% na conclusão, antes da publicação definitiva ou liberação dos acessos finais."],
  ["Depois da entrega consigo editar?", "Isso depende da tecnologia escolhida. Em projetos com painel de gerenciamento, você recebe orientação básica para realizar atualizações simples."],
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M14 7l5 5-5 5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Check = () => <span className="check" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m5 10.2 3.1 3.1L15.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;

function ProjectMockup({ project }: { project: (typeof projects)[number] }) {
  const photo = project.src;

  if (project.theme === "restaurant") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page restaurant-page">
    <header><b>BRASA<small>COZINHA AUTORAL</small></b><nav>Experiência&nbsp;&nbsp; Menu&nbsp;&nbsp; Adega&nbsp;&nbsp; Contato</nav><i>Reservar mesa</i></header>
    <section className="restaurant-hero"><Image src={photo} alt="" fill sizes="50vw" /><div className="restaurant-copy"><small>SÃO PAULO • DESDE 2018</small><h4>Fogo, origem e uma mesa para lembrar.</h4><p>Ingredientes brasileiros conduzidos por técnica contemporânea.</p><b>Conheça o menu degustação</b></div><aside><span>MENU EM 7 TEMPOS</span><strong>R$ 320</strong><small>harmonização opcional</small></aside></section>
    <div className="restaurant-note"><span>01 — ingredientes locais</span><span>02 — cozinha aberta</span><span>03 — adega premiada</span></div>
    <section className="restaurant-menu"><div><small>ASSINATURAS DA CASA</small><h5>Uma cozinha guiada pelas estações.</h5></div><div><article><span>ENTRADA</span><b>Vieira, caju e ervas</b><small>cítrico • delicado • fresco</small></article><article><span>PRINCIPAL</span><b>Angus, cebola e tucupi</b><small>brasa • intensidade • origem</small></article><article><span>SOBREMESA</span><b>Cacau, café e cumaru</b><small>amazônico • elegante • profundo</small></article></div></section>
    <footer><b>BRASA</b><span>Rua Harmonia, 142 • Vila Madalena</span><i>Reservas (11) 3088-7142</i></footer>
  </div></div>;

  if (project.theme === "fitness") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page fitness-page">
    <header><b>PULSE<span>/</span>PERFORMANCE</b><nav>Método&nbsp;&nbsp; Treinos&nbsp;&nbsp; Coaches&nbsp;&nbsp; Unidades</nav><i>Teste grátis</i></header>
    <section className="fitness-hero"><Image src={photo} alt="" fill sizes="50vw" /><div><small>PERFORMANCE SEM ATALHOS</small><h4>Seu próximo nível não espera.</h4><p>Treino individualizado, acompanhamento real e uma comunidade que puxa você para frente.</p><b>COMEÇAR AGORA ↗</b></div><strong>01<small>FORÇA</small></strong></section>
    <div className="fitness-stats"><span><b>42</b> coaches certificados</span><span><b>96%</b> atingem a primeira meta</span><span><b>06</b> unidades em São Paulo</span></div>
    <section className="fitness-programs"><div><small>ESCOLHA O SEU RITMO</small><h5>Programas para objetivos reais.</h5></div><div><article><i>01</i><b>Strength</b><p>Força, técnica e progressão mensurável.</p></article><article><i>02</i><b>Engine</b><p>Condicionamento para render mais.</p></article><article><i>03</i><b>Recover</b><p>Mobilidade, recuperação e longevidade.</p></article></div></section>
    <footer><b>7 dias para sentir a diferença.</b><span>Av. Paulista, 1842 • Bela Vista</span><i>Agendar aula experimental</i></footer>
  </div></div>;

  if (project.theme === "aesthetic") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page aesthetic-page">
    <header><b>MAISON AURA</b><nav>Tratamentos&nbsp;&nbsp; Especialistas&nbsp;&nbsp; A Maison</nav><i>Agendar consulta</i></header>
    <section className="aesthetic-hero"><div className="aesthetic-copy"><small>CIÊNCIA, BELEZA E TEMPO</small><h4>Cuidado que respeita a sua essência.</h4><p>Protocolos personalizados para resultados naturais, elegantes e seguros.</p><b>Descobrir meu protocolo</b></div><div className="aesthetic-photo"><Image src={photo} alt="" fill sizes="50vw" /><span>Resultados sutis.<br />Confiança visível.</span></div></section>
    <div className="aesthetic-signature"><span>01 / Pele</span><span>02 / Contorno</span><span>03 / Bem-estar</span><i>São Paulo • Jardins</i></div>
    <section className="aesthetic-services"><small>NOSSOS CUIDADOS</small><h5>Precisão clínica, experiência sensorial.</h5><div><article><b>Skin Quality</b><p>Hidratação profunda e luminosidade.</p><span>45 min — a partir de R$ 590</span></article><article><b>Contour Ritual</b><p>Tecnologia para definição e firmeza.</p><span>60 min — avaliação individual</span></article></div></section>
    <footer><b>Maison Aura</b><span>Al. Santos, 1174 • Jardins</span><i>(11) 3062-4420</i></footer>
  </div></div>;

  if (project.theme === "dental") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page dental-premium-page">
    <header><b>ORALYS<small>ODONTOLOGIA INTEGRADA</small></b><nav>Especialidades&nbsp;&nbsp; Tecnologia&nbsp;&nbsp; Corpo clínico</nav><i>Agendar avaliação</i></header>
    <section className="dental-premium-hero"><Image src={photo} alt="" fill sizes="50vw" /><div><small>ODONTOLOGIA DE ALTO PADRÃO</small><h4>Confiança começa com um sorriso bem cuidado.</h4><p>Planejamento digital, especialistas integrados e atenção em cada etapa.</p><b>Agende sua primeira consulta →</b></div></section>
    <div className="dental-proof"><span><b>4,9</b> avaliação no Google</span><span><b>12+</b> especialistas</span><span><b>8.400</b> pacientes atendidos</span><i>CRO-SP 00000 • clínica demonstrativa</i></div>
    <section className="dental-specialties"><div><small>ESPECIALIDADES</small><h5>Tecnologia para cuidar de forma completa.</h5></div><div><article><i>◌</i><b>Implantes</b><p>Planejamento 3D e cirurgia guiada.</p></article><article><i>◇</i><b>Alinhadores</b><p>Ortodontia discreta e previsível.</p></article><article><i>✦</i><b>Estética</b><p>Resultados naturais e personalizados.</p></article></div></section>
    <footer><b>ORALYS</b><span>R. Joaquim Floriano, 881 • Itaim Bibi</span><i>Agendar consulta</i></footer>
  </div></div>;

  if (project.theme === "realestate") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page realestate-page">
    <section className="realestate-hero"><Image src={photo} alt="" fill sizes="50vw" /><header><b>VÉRTICE<small>PRIVATE HOMES</small></b><nav>Comprar&nbsp;&nbsp; Lançamentos&nbsp;&nbsp; Vender&nbsp;&nbsp; Journal</nav><i>Atendimento privado</i></header><div className="realestate-copy"><small>PROPRIEDADE EM DESTAQUE • FAZENDA BOA VISTA</small><h4>Arquitetura para viver o extraordinário.</h4><p>Residência Horizonte • 1.180 m² • 6 suítes</p><b>Conhecer esta propriedade</b></div><span className="realestate-index">01 / 08</span></section>
    <div className="property-search"><span><small>LOCALIZAÇÃO</small>São Paulo e interior</span><span><small>TIPO</small>Casas e apartamentos</span><span><small>FAIXA DE VALOR</small>Acima de R$ 5 milhões</span><i>Buscar imóveis →</i></div>
    <section className="property-selection"><div><small>CURADORIA VÉRTICE</small><h5>Endereços únicos para histórias únicas.</h5></div><div><article><span>JARDINS</span><b>Penthouse Alameda</b><small>428 m² • 4 suítes • R$ 14,8 mi</small></article><article><span>QUINTA DA BARONEZA</span><b>Casa Pátio</b><small>1.060 m² • 5 suítes • sob consulta</small></article></div></section>
    <footer><b>Vértice Private Homes</b><span>Av. Europa, 318 • São Paulo</span><i>private@verticehomes.com.br</i></footer>
  </div></div>;

  if (project.theme === "law") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page law-page">
    <header><b>AURUM<small>LEGAL ADVISORY</small></b><nav>Atuação&nbsp;&nbsp; Sócios&nbsp;&nbsp; Insights&nbsp;&nbsp; Escritórios</nav><i>Fale com um especialista</i></header>
    <section className="law-hero"><Image src={photo} alt="" fill sizes="50vw" /><div><small>ESTRATÉGIA JURÍDICA PARA DECISÕES COMPLEXAS</small><h4>Rigor técnico. Visão de negócio. Presença.</h4><p>Assessoria próxima para empresas, famílias e patrimônios em movimento.</p><b>Conheça nossa atuação</b></div><span>25<small>ANOS DE EXCELÊNCIA</small></span></section>
    <div className="law-marquee"><span>CORPORATE & M&A</span><i /> <span>CONTENCIOSO ESTRATÉGICO</span><i /> <span>PATRIMONIAL E SUCESSÓRIO</span></div>
    <section className="law-practices"><div><small>EXPERTISE</small><h5>Clareza para proteger, negociar e avançar.</h5><p>Equipes multidisciplinares e atendimento sênior em todas as etapas.</p></div><div><article><i>01</i><b>Empresarial</b><span>Contratos, governança e operações</span></article><article><i>02</i><b>Resolução de conflitos</b><span>Estratégia processual e arbitragem</span></article><article><i>03</i><b>Patrimônio</b><span>Planejamento e sucessão</span></article></div></section>
    <footer><b>Aurum Legal</b><span>São Paulo • Brasília • Lisboa</span><i>contato@aurumlegal.com</i></footer>
  </div></div>;

  if (project.theme === "beauty") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page beauty-premium-page">
    <header><span>☰ MENU</span><b>ÉCLAT<small>BEAUTY STUDIO</small></b><i>RESERVAR</i></header>
    <section className="beauty-premium-hero"><div><small>NEW SEASON / 2026</small><h4>Beleza com atitude e assinatura.</h4><p>Cortes, cor e styling criados para traduzir quem você é.</p><b>AGENDE SUA EXPERIÊNCIA ↗</b></div><div className="beauty-premium-photo"><Image src={photo} alt="" fill sizes="50vw" /><span>COLOR<br />CODE</span></div></section>
    <div className="beauty-ticker"><span>CUT</span><i>✦</i><span>COLOR</span><i>✦</i><span>STYLE</span><i>✦</i><span>BRIDAL</span></div>
    <section className="beauty-editorial"><aside><span>01</span><b>Transformação com intenção.</b><p>Diagnóstico de imagem, técnica e acabamento impecável.</p></aside><div><small>SERVIÇOS DESTAQUE</small><article><b>Signature Cut</b><span>60 min</span><i>R$ 280</i></article><article><b>Color Experience</b><span>180 min</span><i>sob consulta</i></article><article><b>Bridal Beauty</b><span>projeto completo</span><i>reservar</i></article></div></section>
    <footer><b>ÉCLAT</b><span>Rua Oscar Freire, 720 • São Paulo</span><i>(11) 96318-5527</i></footer>
  </div></div>;

  if (project.theme === "photography") return <div className="niche-mockup" aria-hidden="true"><div className="niche-page photography-page">
    <header><b>LUME<span>©26</span></b><nav>Selected work&nbsp;&nbsp; Portraits&nbsp;&nbsp; Motion&nbsp;&nbsp; About</nav><i>Start a project ↗</i></header>
    <section className="photography-hero"><Image src={photo} alt="" fill sizes="50vw" /><div className="photo-vertical">PORTRAIT • FASHION • CAMPAIGN</div><h4>Images with<br /><em>presence.</em></h4><span>01 — CAMPAIGN / AURA</span><small>São Paulo & worldwide</small></section>
    <section className="photo-manifesto"><span>EDITORIAL STUDIO</span><h5>We create visual stories that hold attention and reveal character.</h5><i>Scroll to explore ↓</i></section>
    <section className="photo-grid"><div><Image src={photo} alt="" fill sizes="25vw" /><span>PORTRAIT 01</span></div><div><Image src={photo} alt="" fill sizes="25vw" /><span>BEHIND THE SCENES</span></div><aside><small>SELECTED SERVICES</small><b>Fashion editorial</b><b>Brand campaign</b><b>Creative portrait</b><i>Request portfolio →</i></aside></section>
    <footer><b>LUME EDITORIAL</b><span>hello@lumestudio.art</span><i>Instagram / Vimeo / Behance</i></footer>
  </div></div>;

  return <div className="niche-mockup" aria-hidden="true"><div className="niche-page fashion-page">
    <header><span>MENU</span><b>NOMA<small>ATELIER</small></b><nav>New in&nbsp;&nbsp; Woman&nbsp;&nbsp; Essentials&nbsp;&nbsp; Journal</nav><i>Bag (0)</i></header>
    <section className="fashion-hero"><div className="fashion-photo"><Image src={photo} alt="" fill sizes="50vw" /><span>01 / 05</span></div><div><small>COLLECTION 026 — QUIET FORM</small><h4>Form follows feeling.</h4><p>Tailoring with presence, created in limited editions from natural materials.</p><b>SHOP THE COLLECTION →</b><i>Free shipping in Brazil above R$ 1.200</i></div></section>
    <div className="fashion-strip"><span>NEW ARRIVALS</span><span>CRAFTED IN BRAZIL</span><span>LIMITED EDITIONS</span></div>
    <section className="fashion-collection"><div><small>THE EDIT</small><h5>Objects of everyday elegance.</h5></div><div><article><span className="fashion-crop"><Image src={photo} alt="" fill sizes="25vw" /></span><b>Alba Blazer</b><small>Off white — R$ 1.890</small></article><article><span className="fashion-crop"><Image src={photo} alt="" fill sizes="25vw" /></span><b>Forma Trouser</b><small>Sand — R$ 1.190</small></article><article><span className="fashion-crop"><Image src={photo} alt="" fill sizes="25vw" /></span><b>Linea Coat</b><small>Ivory — R$ 2.490</small></article></div></section>
    <footer><b>NOMA ATELIER</b><span>São Paulo • Brasil</span><i>Newsletter&nbsp;&nbsp; Atendimento&nbsp;&nbsp; Instagram</i></footer>
  </div></div>;
}

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const statRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stat = statRef.current;
    if (!stat) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(value);
        return;
      }

      const startedAt = performance.now();
      const duration = 1400;
      const animate = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(stat);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <article className="stat-item" ref={statRef} aria-label={`${value}${suffix} ${label}`}>
      <strong aria-hidden="true"><span>{displayValue}</span><i>{suffix}</i></strong>
      <p>{label}</p>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStep, setFormStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [submittedWhatsappLink, setSubmittedWhatsappLink] = useState(whatsappLink);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateProgress); };
  }, []);

  const nextStep = () => {
    const pane = formRef.current?.querySelector(`[data-step="${formStep}"]`);
    const inputs = Array.from(pane?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select") ?? []);
    if (inputs.every((input) => input.reportValidity())) setFormStep((step) => Math.min(3, step + 1));
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const field = (name: string) => String(formData.get(name) ?? "");
    const message = `Olá! Vim pelo site da K7 Sites e gostaria de solicitar um orçamento.

Nome: ${field("nome")}
WhatsApp: ${field("telefone")}
E-mail: ${field("email")}
Tipo de projeto: ${field("projeto")}
Objetivo: ${field("objetivo")}
Instagram ou site: ${field("site")}
Quando deseja começar: ${field("prazo")}

Sobre a empresa e o projeto:
${field("mensagem")}`;
    const formWhatsappLink = `https://wa.me/5511949214071?text=${encodeURIComponent(message)}`;

    setSubmittedWhatsappLink(formWhatsappLink);
    setSent(true);
    window.open(formWhatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <div className="ticker" aria-label="Diferenciais K7 Sites"><div className="ticker-track">
        {Array.from({ length: 2 }).map((_, group) => <div className="ticker-group" key={group} aria-hidden={group === 1}><span>DESIGN ESTRATÉGICO</span><i /><span>EXPERIÊNCIA RESPONSIVA</span><i /><span>COPY QUE CONDUZ</span><i /><span>PROJETOS SOB MEDIDA</span><i /></div>)}
      </div></div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="K7 Sites — início"><Image src="/k7-logo.png" alt="K7 Sites" width={88} height={58} priority /></a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a><a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a><a className="nav-mobile-cta" href="#orcamento" onClick={() => setMenuOpen(false)}>Pedir orçamento</a>
        </nav>
        <a className="header-cta" href="#orcamento">Pedir orçamento <Arrow /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a K7 Sites pelo WhatsApp"><Image src="/whatsapp.svg" alt="" width={38} height={38} aria-hidden="true" /></a>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout" id="conteudo">
          <div className="hero-copy">
            <p className="eyebrow enter"><span /> SITES CRIADOS PARA POSICIONAR E CONVERTER</p>
            <h1 className="enter delay-1">Criação de sites e landing pages profissionais em até 48h <em>A partir de R$ 399,00.</em></h1>
            <p className="hero-lead enter delay-2">Landing pages e sites profissionais que organizam sua mensagem, valorizam seu negócio e transformam visitas em oportunidades.</p>
            <div className="hero-actions enter delay-3"><a className="button button-primary" href="#orcamento">Quero meu projeto <Arrow /></a><a className="button button-ghost" href="#orcamento">Falar com a K7 <Arrow diagonal /></a></div>
            <ul className="hero-benefits enter delay-4"><li><Check /> Design exclusivo</li><li><Check /> Responsivo</li><li><Check /> Suporte próximo</li></ul>
          </div>
          <div className="hero-art enter delay-2" aria-label="Representação de um site criado pela K7 Sites">
            <div className="orbit orbit-one"><span /></div><div className="orbit orbit-two"><span /></div>
            <div className="floating-note note-top"><b>Google SEO</b><small>estrutura preparada</small></div>
            <div className="browser-card real-browser"><div className="browser-bar"><i /><i /><i /><span>seudominio.com.br</span></div><div className="browser-site"><Image src="/project-stream/barbearia.png" alt="Exemplo de site profissional criado para uma barbearia" fill sizes="(max-width: 860px) 96vw, 520px" priority /></div></div>
            <div className="floating-note note-bottom"><b>100%</b><small>otimizado</small></div><div className="k7-stamp">K7<span>SITES</span></div>
          </div>
        </div>
        <div className="hero-footer container"><span>ROLE PARA DESCOBRIR</span><span className="scroll-line" /><p>Estratégia <i>•</i> Design <i>•</i> Tecnologia</p></div>
      </section>

      <section className="signal-strip" aria-label="Resultados e diferenciais da K7 Sites"><div className="container signal-grid">
        <CounterStat value={200} suffix="+" label="Sites já criados" />
        <CounterStat value={40} suffix="+" label="Nichos atendidos" />
        <CounterStat value={48} suffix="h" label="Entrega ágil" />
        <CounterStat value={100} suffix="%" label="Responsivo e rápido" />
      </div></section>

      <section className="niche-showcase" aria-labelledby="niche-showcase-title">
        <div className="container">
          <div className="section-heading centered niche-heading reveal">
            <p className="eyebrow"><span /> IDEIAS QUE GANHAM FORMA</p>
            <h2 id="niche-showcase-title">Seu nicho merece um site que <em>para o olhar.</em></h2>
            <p>De saúde a gastronomia, explore possibilidades visuais criadas para transformar diferentes negócios em experiências digitais marcantes.</p>
          </div>
        </div>
        <div className="niche-stream-shell reveal">
          <ImageStream images={nicheProjects} cards={9} speed={19}>
            <div className="stream-center-mark" aria-hidden="true"><Image src="/k7-logo.png" alt="" width={154} height={108} /></div>
          </ImageStream>
        </div>
        <div className="container">
          <ul className="niche-list" aria-label="Nichos representados">
            {nicheProjects.map((project) => <li key={project.label}>{project.label}</li>)}
          </ul>
          <p className="niche-caption">Projetos demonstrativos criados para representar possibilidades visuais.</p>
        </div>
      </section>

      <section className="section problems" id="diagnostico"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow dark"><span /> O QUE ENTREGAMOS</p><h2>Tudo que seu site precisa para <em>vender.</em></h2><p>Estratégia, velocidade e acabamento profissional reunidos para transformar sua presença digital em uma ferramenta de negócios.</p></div>
        <div className="problem-grid">{deliveries.map((item) => <article className="problem-card reveal" key={item.title}><span className="problem-icon" aria-hidden="true">{item.icon}</span><b>{item.title}</b><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="impact-band"><div className="container impact-layout reveal"><p>UMA BOA PRESENÇA DIGITAL CONECTA</p><div><strong>CLAREZA</strong><span>para explicar</span></div><i>+</i><div><strong>DESIGN</strong><span>para valorizar</span></div><i>+</i><div><strong>ESTRATÉGIA</strong><span>para conduzir</span></div></div></section>

      <section className="section services" id="servicos"><div className="container">
        <div className="section-heading split reveal"><div><p className="eyebrow"><span /> O QUE A K7 CONSTRÓI</p><h2>O formato certo para cada <em>objetivo.</em></h2></div><p>Projetos pensados do zero para comunicar com clareza e acompanhar o momento do seu negócio.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card reveal" key={service.number}><div className="service-top"><div className="service-icon" aria-hidden="true"><span>🚀</span></div><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><small>{service.tag}</small></article>)}</div>
      </div></section>

      <section className="section process" id="processo"><div className="container">
        <div className="section-heading centered process-intro reveal"><p className="eyebrow"><span /> COMO FUNCIONA</p><h2>Um processo simples, com cada etapa <em>bem definida.</em></h2><p>Você acompanha a evolução do projeto e sabe exatamente o que precisamos em cada momento.</p><a className="text-link" href="#orcamento">Começar meu projeto <Arrow /></a></div>
        <div className="timeline process-timeline">{[["01", "Diagnóstico", "Entendemos seu objetivo, público, oferta, referências e necessidades técnicas."], ["02", "Estratégia e conteúdo", "Organizamos a jornada da página e definimos a mensagem principal de cada seção."], ["03", "Design e desenvolvimento", "Criamos a identidade visual da página e construímos a experiência responsiva."], ["04", "Revisão e publicação", "Aplicamos os ajustes previstos, validamos a navegação e orientamos sobre a entrega."]].map(([number, title, text]) => <article className="timeline-item reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i><Check /></i></article>)}</div>
      </div></section>

      <section className="section projects" id="projetos"><div className="container">
        <div className="section-heading split reveal"><div><p className="eyebrow dark"><span /> ESTRUTURAS QUE INSPIRAM</p><h2>Cada projeto nasce de uma <em>necessidade real.</em></h2></div><p>Explore mockups profissionais criados para diferentes nichos, objetivos e públicos — sempre com uma apresentação única.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card reveal" key={project.title}><div className="project-screen real-project"><div className="project-browser"><i /><i /><i /><span>projeto demonstrativo K7 Sites</span></div>{project.theme === "barber" ? <Image src={project.src} alt="Mockup completo da Barbearia Mestre" fill sizes="(max-width: 860px) 100vw, 50vw" /> : <ProjectMockup project={project} />}</div><div className="project-meta"><div><small>{project.type}</small><h3>{project.title}</h3><p>{project.note}</p></div><i><Arrow diagonal /></i></div></article>)}</div>
        <p className="project-disclaimer"><strong>Portfólio demonstrativo:</strong> exceto a barbearia já existente, as marcas, endereços, registros, preços e demais dados apresentados nos mockups são fictícios.</p>
      </div></section>

      <section className="conversion-block"><div className="container"><div className="conversion-card reveal"><div className="conversion-grid" aria-hidden="true" /><div className="conversion-layout"><div><p className="eyebrow"><span /> SUA PRÓXIMA FASE PODE COMEÇAR AQUI</p><h2>Você já entrega um bom trabalho. Seu site precisa <em>mostrar isso.</em></h2></div><div><p>Conte o que você precisa e receba uma orientação sobre o formato mais adequado para o seu momento.</p><a className="button button-light" href="#orcamento">Falar sobre meu projeto <Arrow /></a></div></div></div></div></section>

      <section className="section about" id="sobre"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> SOBRE A K7 SITES</p><h2>Não é só montar páginas. É <em>dar forma à sua proposta.</em></h2><p>A K7 Sites cria experiências digitais para profissionais e empresas que querem apresentar seu trabalho com mais clareza, confiança e personalidade.</p></div>
        <div className="about-layout"><div className="about-art reveal"><div className="metal-k">K<span>7</span></div><div className="about-caption"><b>Design com intenção.</b><span>Construção com cuidado.</span></div></div>
        <div className="about-copy reveal"><p>Cada projeto combina organização de conteúdo, direção visual e desenvolvimento responsivo — sem soluções genéricas que apagam o que torna sua marca única.</p><div className="principles"><div><strong>01</strong><span><b>Clareza antes de efeito</b>Todo elemento precisa ajudar a mensagem.</span></div><div><strong>02</strong><span><b>Visual com personalidade</b>Identidade que combina com seu posicionamento.</span></div><div><strong>03</strong><span><b>Parceria próxima</b>Comunicação simples durante todo o projeto.</span></div></div></div></div>
      </div></section>

      <section className="section proof" id="depoimentos"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> AVALIAÇÕES NO GOOGLE</p><h2>A confiança cresce quando clientes reais <em>contam a experiência.</em></h2><p>Veja o que clientes da K7 Sites publicaram sobre seus projetos no Google.</p></div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card reveal" key={testimonial.name}>
          <div className="testimonial-rating"><span aria-label="5 de 5 estrelas">★★★★★</span><small>5,0 • GOOGLE</small></div>
          <blockquote><p>{testimonial.text}</p></blockquote>
          <footer><div><a href={googleReviewsLink} target="_blank" rel="noreferrer" aria-label={`Conferir a avaliação de ${testimonial.name} no perfil da K7 Sites no Google`}>{testimonial.name} <Arrow diagonal /></a><span>{testimonial.details}</span></div><small>{testimonial.date}</small></footer>
        </article>)}</div>
      </div></section>

      <section className="section pricing" id="investimento"><div className="pricing-rockets" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <span key={index}>🚀</span>)}</div><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> FORMATOS DE PROJETO</p><h2>Escolha o formato ideal para colocar sua marca <em>em movimento.</em></h2><p>Comece com uma solução objetiva ou solicite uma avaliação para um projeto totalmente personalizado.</p></div>
        <div className="pricing-grid">{[
          { name: "Landing page", description: "Para divulgar uma oferta e gerar contatos", price: "R$ 399,00", detail: "a partir de", features: ["Página completa e estratégica", "Design responsivo", "Botões para WhatsApp", "Google SEO", "Copy organizada", "Entrega ágil"] },
          { name: "Site institucional", description: "Para apresentar sua empresa com autoridade", price: "R$ 699,00", detail: "a partir de", features: ["Home e páginas internas", "Páginas de serviços", "Design profissional", "Google SEO", "WhatsApp e formulário", "Orientação após a entrega"] },
          { name: "Projeto sob medida", description: "Para necessidades, integrações e estruturas especiais", price: "Sob avaliação", detail: "orçamento após análise", features: ["Escopo personalizado", "Funcionalidades específicas", "Integrações especiais", "Planejamento por etapas", "Prazo definido em proposta", "Acompanhamento próximo"] },
        ].map((plan, index) => <article className={index === 1 ? "price-card featured reveal" : "price-card reveal"} key={plan.name}>{index === 1 && <span className="recommended">MAIS POPULAR</span>}<small>0{index + 1}</small><h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><span>{plan.detail}</span>{plan.price}</div><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><a className={index === 1 ? "button button-primary" : "button button-ghost"} href="#orcamento">Pedir orçamento <Arrow /></a></article>)}</div>
        <p className="payment-note reveal"><Check /> Condição padrão sugerida: 50% antes do início e 50% na conclusão do projeto.</p>
      </div></section>

      <section className="section faq" id="faq"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> DÚVIDAS FREQUENTES</p><h2>Ainda tem <em>dúvida?</em></h2><p>Veja as respostas mais importantes antes de começar. Se precisar, fale diretamente com a K7 Sites.</p></div>
        <div className="accordion faq-accordion">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>0{index + 1}</span>{question}<i>{openFaq === index ? "−" : "+"}</i></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div>
      </div></section>

      <section className="section contact" id="orcamento"><div className="contact-glow" aria-hidden="true" /><div className="container">
        <div className="section-heading centered contact-heading reveal"><p className="eyebrow"><span /> VAMOS CONVERSAR</p><h2>Vamos desenvolver a solução certa para <em>sua empresa.</em></h2><p>Conte um pouco sobre o seu negócio em três etapas rápidas. Depois, a K7 entra em contato para orientar o melhor formato.</p></div>
        <div className="contact-layout">
          <aside className="contact-panel reveal">
            <div className="contact-brand"><Image src="/k7-logo.png" alt="K7 Sites" width={70} height={70} /><div><b>K7 Sites</b><span>Sites que posicionam e convertem</span></div></div>
            <p className="contact-kicker">ORÇAMENTO EM 3 ETAPAS</p><h3>Seu próximo projeto começa com uma conversa clara.</h3><p>Preencha o briefing rápido. Assim conseguimos entender seu momento antes do primeiro contato.</p>
            <div className="contact-step-list">{[[1, "Conte sobre o negócio", "Seus dados de contato"], [2, "Detalhes do projeto", "Objetivo e formato"], [3, "Entraremos em contato", "Revise e envie"]].map(([step, title, text]) => <div className={formStep === step ? "active" : formStep > Number(step) ? "done" : ""} key={step}><span>{step}</span><p><b>{title}</b><small>{text}</small></p></div>)}</div>
            <div className="contact-direct"><small>PREFERE FALAR AGORA?</small><a className="whatsapp-direct" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp: (11) 94921-4071 <Arrow diagonal /></a></div>
          </aside>
          <div className="form-shell reveal">{!sent ? <form ref={formRef} onSubmit={submitForm}>
            <div className="form-head"><div className="form-progress">{[1, 2, 3].map((step) => <span className={formStep >= step ? "active" : ""} key={step} />)}</div><small>ETAPA {formStep} DE 3</small></div>
            <div className={formStep === 1 ? "form-pane active" : "form-pane"} data-step="1"><h3>Olá! Vamos começar pelos seus dados?</h3><label>Qual é o seu nome?<input name="nome" required placeholder="Digite seu nome" /></label><label>Qual é o seu WhatsApp para contato?<input name="telefone" type="tel" required placeholder="(11) 99999-9999" /></label><label>Qual é o melhor e-mail para receber a confirmação?<input name="email" type="email" required placeholder="voce@empresa.com.br" /></label></div>
            <div className={formStep === 2 ? "form-pane active" : "form-pane"} data-step="2"><h3>Agora, conte sobre o seu projeto.</h3><label>Qual tipo de projeto você precisa?<select name="projeto" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Landing page</option><option>Site institucional</option><option>Página de vendas</option><option>Site para cursos</option><option>Redesign</option><option>Outro</option></select></label><label>Qual é o principal objetivo?<select name="objetivo" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Gerar contatos</option><option>Vender uma oferta</option><option>Apresentar a empresa</option><option>Lançar um produto</option><option>Atualizar o site atual</option></select></label><label>Qual é o Instagram ou site da sua empresa?<input name="site" placeholder="@suaempresa ou www.suaempresa.com.br" /></label></div>
            <div className={formStep === 3 ? "form-pane active" : "form-pane"} data-step="3"><h3>Para finalizar, mais dois detalhes.</h3><label>Quando você deseja começar?<select name="prazo" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>O quanto antes</option><option>Em até 30 dias</option><option>Em 1 a 3 meses</option><option>Ainda estou planejando</option></select></label><label>Me conte um pouco sobre sua empresa e o projeto.<textarea name="mensagem" rows={5} required placeholder="O que você vende, para quem e qual resultado espera?" /></label></div>
            <div className="form-actions">{formStep > 1 && <button className="button button-ghost" type="button" onClick={() => setFormStep(formStep - 1)}>Voltar</button>}{formStep < 3 ? <button className="button button-primary" type="button" onClick={nextStep}>Continuar <Arrow /></button> : <button className="button button-primary" type="submit">Enviar pelo WhatsApp <Arrow /></button>}</div>
          </form> : <div className="form-success"><span><Check /></span><small>FORMULÁRIO VALIDADO</small><h3>As informações estão prontas.</h3><p>O WhatsApp foi aberto em uma nova aba. Se ela foi bloqueada, use o link abaixo para continuar.</p><a className="button button-primary" href={submittedWhatsappLink} target="_blank" rel="noopener noreferrer">Continuar no WhatsApp <Arrow /></a><button type="button" onClick={() => { setSent(false); setFormStep(1); }}>Preencher novamente</button></div>}</div>
        </div>
      </div></section>

      <section className="final-cta"><div className="container"><div className="final-cta-card reveal"><div className="final-orbit" aria-hidden="true" /><div className="final-cta-content"><div className="mini-logo"><Image src="/k7-logo.png" alt="K7 Sites" width={70} height={70} /></div><p>SEU PRÓXIMO SITE PODE COMEÇAR AGORA</p><h2>Transforme sua presença digital em uma apresentação à altura do seu trabalho.</h2><a className="button button-light" href="#orcamento">Solicitar orçamento <Arrow /></a></div></div></div></section>

      <footer className="footer"><div className="container footer-main">
        <div><a className="brand footer-brand" href="#inicio"><Image src="/k7-logo.png" alt="K7 Sites" width={112} height={72} /></a><p>Sites e landing pages com estratégia, identidade e acabamento profissional.</p></div>
        <div><small>NAVEGAÇÃO</small><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#sobre">Sobre</a></div>
        <div><small>CONTATO</small><a href="mailto:k7sites@gmail.com">k7sites@gmail.com</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp: (11) 94921-4071</a></div>
        <div><small>PRONTO PARA COMEÇAR?</small><a className="footer-cta" href="#orcamento">Pedir orçamento <Arrow diagonal /></a></div>
      </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} K7 Sites. Todos os direitos reservados.</span><span>Design e desenvolvimento: K7 Sites</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    </main>
  );
}
