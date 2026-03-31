
import GlowingButton from './GlowingButton'
import Link from 'next/link'
import { useCarousel } from '../hooks/useCarousel'

interface HeroProps {
  isVisible: boolean
}

const Hero = ({ isVisible }: HeroProps) => {
  const { currentIndex: currentSlide, goTo } = useCarousel({ length: 3, interval: 4000 })
  
  const slides = [
    {
      title: "Bienvenidos a Ane Dulce Sabor",
      subtitle: "Delicias de todo tipo para todos los gustos",
      bgImage: "/CheeseCake-FrutosRojos-Artesanal.webp",
      fallbackColor: "#F26861",
      backgroundPosition: "50% 50%"
    },
    {
      title: "Pasteles Artesanales",
      subtitle: "Hechos con amor y los mejores ingredientes",
      bgImage: "/MiniCakes-Artesanales.webp",
      fallbackColor: "#D85C56",
      backgroundPosition: "50% 50%"
    },
    {
      title: "Postres Exquisitos",
      subtitle: "Dulces tentaciones que te encantarán",
      bgImage: "/Alfajores-Artesanales.webp",
      fallbackColor: "#e6c59e",
      backgroundPosition: "50% 25%"
    }
  ]

  return (
    <section
      className={`relative h-80 sm:h-96 lg:h-200 overflow-hidden transition-all duration-1000 transform -mx-4 sm:-mx-6 lg:-mx-8 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* TRACK */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundColor: slide.fallbackColor,
                backgroundPosition: slide.backgroundPosition
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="text-center max-w-2xl">
                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-white drop-shadow-md mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/catalogo">
                    <GlowingButton className="w-48 sm:w-auto">
                      Ver Catálogo
                    </GlowingButton>
                  </Link>
                  <GlowingButton 
                    as="a" 
                    href="https://wa.me/5493484407826?text=" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-48 sm:w-auto"
                  >
                    Encargar Ahora
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero