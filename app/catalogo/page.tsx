import { Metadata } from 'next'
import CatalogPageClient from './CatalogPageClient'

export const metadata: Metadata = {
  title: "Catálogo de Productos - Ane Dulce Sabor",
  description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
  openGraph: {
    title: "Catálogo de Productos - Ane Dulce Sabor",
    description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
    images: ["/Logo.webp"],
  },
}

export default function CatalogPage() {
  return <CatalogPageClient />
}
