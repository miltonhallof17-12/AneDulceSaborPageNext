import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D85C56',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://anedulcesabor.com'),
  title: {
    default: "Ane Dulce Sabor - Dulces Artesanales",
    template: "%s | Ane Dulce Sabor"
  },
  description: "Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.",
  keywords: ["dulces artesanales", "pasteles", "postres", "tortas", "repostería", "bakery", "desserts", "cakes"],
  authors: [{ name: "Ane Dulce Sabor" }],
  creator: "Ane Dulce Sabor",
  publisher: "Ane Dulce Sabor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://anedulcesabor.com',
    siteName: 'Ane Dulce Sabor',
    title: 'Ane Dulce Sabor - Dulces Artesanales',
    description: 'Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.',
    images: [
      {
        url: '/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Ane Dulce Sabor - Dulces Artesanales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ane Dulce Sabor - Dulces Artesanales',
    description: 'Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.',
    images: ['/Logo.webp'],
  },
  alternates: {
    canonical: 'https://anedulcesabor.com',
  },
  icons: {
    icon: '/Logo.webp',
    shortcut: '/Logo.webp',
    apple: '/Logo.webp',
  },
  manifest: '/manifest.json',
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
