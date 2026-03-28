import type { Product, ProductData } from '../types/product'

// Import JSON files directly
import featuredProducts from '../data/products/featured.json'
import catalogProducts from '../data/products/catalog.json'

// Type assertion for JSON imports
const featured = featuredProducts as Product[]
const catalog = catalogProducts as Product[]

// Data service
export const productData: ProductData = {
  featured,
  catalog
}

// Helper functions
export const getFeaturedProducts = (): Product[] => {
  return productData.featured
}

export const getCatalogProducts = (): Product[] => {
  return productData.catalog
}

export const getAllProducts = (): Product[] => {
  return [...productData.featured, ...productData.catalog]
}

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return getCatalogProducts().filter(product => product.category === category)
}

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id)
}

// New function to get products by category filter
export const getFilteredProducts = (category: string | null): Product[] => {
  if (category === null) {
    return getCatalogProducts()
  }
  return getProductsByCategory(category as Product['category'])
}
