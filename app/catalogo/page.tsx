import { Metadata } from 'next'
import CatalogPageClient from './CatalogPageClient'

export const metadata: Metadata = {
  title: "Catálogo de Dulces Artesanales | Ane Dulce Sabor",
  description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
  keywords: ["catálogo", "productos", "dulces", "pasteles", "postres", "tortas", "repostería", "dulce de leche", "alfajores", "cheesecakes"],
  openGraph: {
    title: "Catálogo de Dulces Artesanales | Ane Dulce Sabor",
    description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
    images: ["/Logo.webp"],
  },
  alternates: {
    canonical: 'https://ane-dulce-sabor.vercel.app/catalogo',
  },
}

export default function CatalogPage() {
  return <CatalogPageClient />
}
