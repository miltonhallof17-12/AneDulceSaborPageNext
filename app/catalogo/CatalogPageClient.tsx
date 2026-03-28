'use client'

import { useState, useRef } from 'react'
import ProductsNavbar from '../../components/ProductsNavbar'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import CategoryFilter from '../../components/CategoryFilter'
import ProductsGrid from '../../components/ProductsGrid'
import ContactButtons from '../../components/ContactButtons'
import useInView from '../../hooks/useInView'
import { searchProducts, getFilteredProducts } from '../../services/productService'

const CatalogPageClient = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Filter products by category first, then by search term
  const categoryFilteredProducts = getFilteredProducts(selectedCategory)
  const filteredProducts = searchTerm ? searchProducts(searchTerm) : categoryFilteredProducts

  // refs
  const searchBarRef = useRef<HTMLElement>(null)
  const categoryFilterRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  // hooks
  const searchVisible = useInView(searchBarRef)
  const categoryFilterVisible = useInView(categoryFilterRef)
  const productsVisible = useInView(productsRef)

  return (
    <>
      <div className="min-h-screen bg-[#f5efe6] overflow-x-hidden">
        <ProductsNavbar />

      {/* Hero Section for Products Page */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#D85C56] mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre nuestra completa selección de dulces artesanales, 
            cada uno elaborado con los mejores ingredientes y mucho amor.
          </p>
        </div>
      </section>

      <ContactButtons />

      <section ref={searchBarRef} className='px-4 sm:px-6 lg:px-8'>
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isVisible={searchVisible}
        />
      </section>

      <section ref={categoryFilterRef} className='px-4 sm:px-6 lg:px-8 py-4'>
        {/* Category Filter */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          categoryFilterVisible || searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      <section ref={productsRef} className='px-4 sm:px-6 lg:px-8'>
        <ProductsGrid 
          products={filteredProducts}
          isVisible={productsVisible}
        />
      </section>

      <Footer />
    </div>
  </> 
  )
}

export default CatalogPageClient
