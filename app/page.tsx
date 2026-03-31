import { Metadata } from 'next'
import HomePageClient from './HomePageClient'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  title: "Ane Dulce Sabor - Dulces Artesanales de Calidad",
  description: "Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
  openGraph: {
    title: "Ane Dulce Sabor - Dulces Artesanales de Calidad",
    description: "Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium.",
    images: ["/Logo.webp"],
  },
  alternates: {
    canonical: 'https://ane-dulce-sabor.vercel.app/',
    languages: {
      'es': 'https://ane-dulce-sabor.vercel.app/',
      'es-ES': 'https://ane-dulce-sabor.vercel.app/',
      'es-MX': 'https://ane-dulce-sabor.vercel.app/',
      'es-AR': 'https://ane-dulce-sabor.vercel.app/',
      'es-CO': 'https://ane-dulce-sabor.vercel.app/',
      'x-default': 'https://ane-dulce-sabor.vercel.app/'
    }
  },
}

// Local Business Schema for home page
const localBusinessData = {
  name: "Ane Dulce Sabor",
  description: "Dulces artesanales elaborados con amor y los mejores ingredientes. Especialistas en tortas, postres y tentaciones únicas.",
  url: "https://ane-dulce-sabor.vercel.app/",
  telephone: "+54 9 348 440-7826",
  address: {
    streetAddress: "Los gladiolos 110",
    addressLocality: "Belen de Escobar",
    addressRegion: "CABA",
    postalCode: "1625",
    addressCountry: "Argentina"
  },
  image: "/Logo.webp",
  sameAs: [
    "https://www.instagram.com/ane_dulce_sabor"
  ]
}

// WebSite Schema
const webSiteData = {
  name: "Ane Dulce Sabor",
  url: "https://ane-dulce-sabor.vercel.app/",
  description: "Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones."
}

export default function Home() {
  return (
    <>
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <StructuredData type="WebSite" data={webSiteData} />
      <HomePageClient />
    </>
  )
}
