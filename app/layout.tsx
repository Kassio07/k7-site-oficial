import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.k7sites.com.br"),
  title: "Criação de Sites e Landing Pages Profissionais | K7 Sites",
  description: "Criação de sites e landing pages profissionais, responsivos e integrados ao WhatsApp para apresentar sua empresa, valorizar sua marca e gerar oportunidades.",
  alternates: {
    canonical: "https://www.k7sites.com.br/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/k7-logo.png",
    shortcut: "/k7-logo.png",
  },
  openGraph: {
    title: "K7 Sites | Presença digital com cara de grande marca",
    description: "Landing pages e sites profissionais criados para posicionar, explicar e converter.",
    url: "https://www.k7sites.com.br/",
    siteName: "K7 Sites",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — Sites com cara de grande marca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "K7 Sites | Sites com cara de grande marca",
    description: "Landing pages e sites profissionais.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "K7 Sites",
      url: "https://www.k7sites.com.br/",
    },
    {
      "@type": "Organization",
      name: "K7 Sites",
      url: "https://www.k7sites.com.br/",
      logo: "https://www.k7sites.com.br/k7-logo.png",
      email: "k7sites@gmail.com",
      telephone: "+5511949214071",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
