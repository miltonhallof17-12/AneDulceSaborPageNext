import ProductCard from './ProductCard'
import type { Product } from '../types/product'

interface ProductsGridProps {
  products: Product[]
  isVisible: boolean
}

const ProductsGrid = ({ products, isVisible }: ProductsGridProps) => {
  return (
    <section 
      className={`container mx-auto py-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Desktop: Grid layout | Mobile: Horizontal scroll */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {products.map((product) => (
          <div key={product.id} className="flex-none w-72 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsGrid
