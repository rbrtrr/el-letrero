import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Letrero | Sign Shop en Mexicali",
  description:
    "Diseño, fabricación e instalación de letreros, fachadas comerciales, letras 3D y rotulación en Mexicali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
