export interface Product {
  id: string
  title: string
  subtitle: string
  image: string
  buttonText: string
  category: 'tentaciones' | 'postres' | 'tortas'
  imagePosition?: string // Can be predefined positions or percentage values like "20% 80%"
}

export interface ProductData {
  featured: Product[]
  catalog: Product[]
}
