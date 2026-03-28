interface StructuredDataProps {
  type: 'LocalBusiness' | 'ItemList'
  data: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateLocalBusinessSchema = (business: any) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "url": business.url,
    "telephone": business.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.streetAddress,
      "addressLocality": business.address.addressLocality,
      "addressRegion": business.address.addressRegion,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    },
    "openingHours": business.openingHours,
    "image": business.image,
    "sameAs": business.sameAs
  })

  const generateItemListSchema = (itemList: any) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": itemList.name,
    "description": itemList.description,
    "url": itemList.url,
    "itemListElement": itemList.items.map((item: any) => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "description": item.description,
      "image": item.image,
      "url": item.url
    }))
  })

  const schema = type === 'LocalBusiness' 
    ? generateLocalBusinessSchema(data)
    : generateItemListSchema(data)

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}

export default StructuredData
