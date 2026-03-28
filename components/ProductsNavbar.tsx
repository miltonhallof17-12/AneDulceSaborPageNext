import Link from 'next/link'

const ProductsNavbar = () => {
  return (
    <nav className="bg-[#D85C56] p-4 shadow-md -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/Logo.webp" 
              alt="Ane Dulce Sabor Logo"
              className="w-20 h-20 sm:w-20 sm:h-20 object-cover rounded-full"
              loading="lazy"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-white">Ane Dulce Sabor</h1>
          </Link>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <Link 
            href="/" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Inicio
          </Link>
          <Link 
            href="/catalogo" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Catálogo
          </Link>
          <a 
            href="https://www.instagram.com/ane_dulce_sabor" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ProductsNavbar
