import { Metadata } from 'next'
import CatalogPageClient from './CatalogPageClient'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: "Catálogo de Productos - Tentaciones Únicas",
  description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
  keywords: ["catálogo", "productos", "dulces", "pasteles", "postres", "tortas", "repostería"],
  openGraph: {
    title: "Catálogo de Productos - Tentaciones Únicas",
    description: "Explora nuestro catálogo completo de dulces artesanales. Tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
    images: ["/Logo.webp"],
  },
  alternates: {
    canonical: 'https://ane-dulce-sabor.vercel.app/catalogo',
    languages: {
      'es': 'https://ane-dulce-sabor.vercel.app/catalogo',
      'es-ES': 'https://ane-dulce-sabor.vercel.app/catalogo',
      'es-MX': 'https://ane-dulce-sabor.vercel.app/catalogo',
      'es-AR': 'https://ane-dulce-sabor.vercel.app/catalogo',
      'es-CO': 'https://ane-dulce-sabor.vercel.app/catalogo',
      'x-default': 'https://ane-dulce-sabor.vercel.app/catalogo'
    }
  },
}

// BreadcrumbList Schema for catalog page
const breadcrumbData = {
  items: [
    {
      name: "Inicio",
      url: "https://ane-dulce-sabor.vercel.app/"
    },
    {
      name: "Catálogo de Productos",
      url: "https://ane-dulce-sabor.vercel.app/catalogo"
    }
  ]
}

export default function CatalogPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <CatalogPageClient />
    </>
  )
}
