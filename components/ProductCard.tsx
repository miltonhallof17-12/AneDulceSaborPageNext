import GlowingButton from './GlowingButton'
import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Helper function to create WhatsApp message URL
  const createWhatsAppMessage = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me gustaría encargar: ${productName}`)
    return `https://wa.me/5493484407826?text=${message}`
  }

  // Helper function to determine if it's a percentage value or predefined position
  const isPercentagePosition = (position?: string) => {
    return position && position.includes('%')
  }

  // Helper function to get CSS classes for predefined positions
  const getPositionClasses = (position?: string) => {
    if (!position || isPercentagePosition(position)) return 'object-cover'
    
    switch (position) {
      case 'top':
        return 'object-top'
      case 'center':
        return 'object-center'
      case 'bottom':
        return 'object-bottom'
      case 'left':
        return 'object-left'
      case 'right':
        return 'object-right'
      case 'cover':
        return 'object-cover'
      default:
        return 'object-cover'
    }
  }

  const positionClasses = getPositionClasses(product.imagePosition)
  const isPercentage = isPercentagePosition(product.imagePosition)
  const positionStyle = isPercentage ? { objectPosition: product.imagePosition } : {}

  return (
    <div className="bg-[#faeab7] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-pink-100 h-32 sm:h-36 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className={`w-full h-full ${positionClasses}`}
          style={positionStyle}
        />
      </div>
      <div className="p-3">
        <h4 className="text-base sm:text-lg font-semibold text-[#D85C56] mb-2 italic text-center">{product.title}</h4>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 text-center">{product.subtitle}</p>
        <a 
          href={createWhatsAppMessage(product.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <GlowingButton className="w-full text-sm">{product.buttonText}</GlowingButton>
        </a>
      </div>
    </div>
  )
}

export default ProductCard
