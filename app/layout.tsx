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
  title: "K7 Sites | Landing Pages e Sites Profissionais",
  description: "Sites e landing pages com estratégia, identidade e experiência responsiva para valorizar sua marca e transformar visitas em oportunidades.",
  icons: {
    icon: "/k7-logo.png",
    shortcut: "/k7-logo.png",
  },
  openGraph: {
    title: "K7 Sites | Presença digital com cara de grande marca",
    description: "Landing pages e sites profissionais criados para posicionar, explicar e converter.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
