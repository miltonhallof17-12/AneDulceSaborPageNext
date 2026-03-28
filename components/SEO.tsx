import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  type?: string
  image?: string
}

const SEO = ({ 
  title = 'Ane Dulce Sabor - Dulces Artesanales', 
  description = 'Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.',
  canonical = 'https://anedulcesabor.com/',
  type = 'website',
  image = '/Logo.webp'
}: SEOProps) => {
  const fullImage = `https://anedulcesabor.com${image}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" href={canonical} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#D85C56" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Ane Dulce Sabor" />
      <meta name="keywords" content="dulces artesanales, pasteles, postres, tortas, repostería, bakery, desserts, cakes" />
    </Helmet>
  )
}

export default SEO
