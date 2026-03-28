import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ane Dulce Sabor - Dulces Artesanales",
  description: "Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
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
