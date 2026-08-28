import type { Metadata } from "next";
import LandingPages from "./landing-pages";
import "./landing-pages.css";

const canonical = "https://www.k7sites.com.br/criacao-de-landing-pages/";

export const metadata: Metadata = {
  title: "Criação de Landing Pages Profissionais | K7 Sites",
  description: "Criamos Landing Pages profissionais, rápidas e responsivas para apresentar sua empresa, gerar confiança e transformar visitantes em oportunidades. Conheça a K7 Sites.",
  alternates: { canonical },
  openGraph: {
    title: "Criação de Landing Pages Profissionais | K7 Sites",
    description: "Landing pages personalizadas para apresentar sua oferta com clareza e direcionar potenciais clientes para o contato.",
    url: canonical,
    siteName: "K7 Sites",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — criação de landing pages profissionais" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Landing Pages Profissionais | K7 Sites",
    description: "Landing pages profissionais, rápidas e responsivas para empresas e profissionais.",
    images: ["/og.png"],
  },
};

const faq = [
  ["O que é uma Landing Page?", "É uma página criada para apresentar uma oferta com clareza e conduzir o visitante a uma ação, como pedir um orçamento pelo WhatsApp."],
  ["Qual a diferença entre site e Landing Page?", "A Landing Page concentra a comunicação em um objetivo. Um site institucional costuma reunir várias páginas e informações mais amplas sobre a empresa."],
  ["Quanto custa uma Landing Page?", "Os projetos de Landing Page da K7 Sites começam em R$ 399,00. O valor final depende do conteúdo, das funcionalidades e das integrações necessárias."],
  ["Quanto tempo demora para ficar pronta?", "O prazo é definido conforme o escopo e começa após aprovação, pagamento inicial e envio dos materiais. Dependendo do projeto, a entrega pode ocorrer em até 48 horas, sem transformar esse prazo em garantia para todo escopo."],
  ["A página funciona no celular?", "Sim. A experiência é planejada para celular, tablet e computador, com atenção especial à leitura e aos botões de contato."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Criação de Landing Pages Profissionais",
      serviceType: "Criação de landing page",
      description: "Criação de landing pages personalizadas, responsivas e preparadas para SEO, com direcionamento para contato pelo WhatsApp.",
      url: canonical,
      areaServed: "BR",
      provider: { "@type": "Organization", name: "K7 Sites", url: "https://www.k7sites.com.br/" },
      offers: { "@type": "Offer", priceCurrency: "BRL", price: "399", description: "Landing pages a partir de R$ 399,00; valor final conforme o escopo." },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
    },
  ],
};

export default function LandingPagesRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPages />
    </>
  );
}
