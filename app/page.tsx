import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: "Ane Dulce Sabor - Dulces Artesanales de Calidad",
  description: "Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
  openGraph: {
    title: "Ane Dulce Sabor - Dulces Artesanales de Calidad",
    description: "Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
    images: ["/Logo.webp"],
  },
}

export default function Home() {
  return <HomePageClient />
}
