interface StructuredDataProps {
  type: 'LocalBusiness' | 'WebSite' | 'Product' | 'BreadcrumbList'
  data: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    switch (type) {
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: data.name,
          description: data.description,
          url: data.url,
          telephone: data.telephone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.address.streetAddress,
            addressLocality: data.address.addressLocality,
            addressRegion: data.address.addressRegion,
            postalCode: data.address.postalCode,
            addressCountry: data.address.addressCountry
          },
          image: data.image,
          sameAs: data.sameAs
        }
      
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name,
          url: data.url,
          description: data.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${data.url}/catalogo?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      
      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name,
          description: data.description,
          image: data.image,
          brand: {
            '@type': 'Brand',
            name: 'Ane Dulce Sabor'
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'ARS',
            price: data.price || 'Contactar para precio'
          }
        }
      
      case 'BreadcrumbList':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        }
      
      default:
        return {}
    }
  }

  const schema = generateSchema()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

export default StructuredData
