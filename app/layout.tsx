import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Letrero Sign Shop",
  description:
    "Diseño, fabricación e instalación de anuncios luminosos, letreros luminosos, fachadas comerciales, letras 3D y rotulación vehicular en Mexicali.",
  keywords: [
    "anuncios luminosos en Mexicali",
    "letreros luminosos en Mexicali",
    "fachadas comerciales en Mexicali",
    "rotulación vehicular en Mexicali",
    "letras 3D en Mexicali",
    "anuncios publicitarios Mexicali",
    "El Letrero Sign Shop",
  ],
  openGraph: {
    title: "El Letrero Sign Shop | Anuncios Luminosos en Mexicali",
    description:
      "Letreros luminosos, fachadas comerciales, letras 3D, rotulación e impresión para negocios en Mexicali.",
    url: "https://tudominio.com",
    siteName: "El Letrero Sign Shop",
    images: [
      {
        url: "https://tudominio.com/images/og-el-letrero.jpg",
        width: 1200,
        height: 630,
        alt: "El Letrero Sign Shop en Mexicali",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://tudominio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
