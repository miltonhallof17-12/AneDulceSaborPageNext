interface SobreNosotrosProps {
  isVisible: boolean
}

const SobreNosotros = ({ isVisible }: SobreNosotrosProps) => {
  return (
    <section id="sobre-nosotros" className={`container mx-auto py-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2">
          <img 
            src="/Logo-AneDulce.webp"
            alt="Sobre Nosotros"
            className="w-full h-auto"
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#D85C56] mb-4">
            Sobre Ane Dulce Sabor
          </h2>

          <p className="text-gray-700 mb-6 text-lg lg:text-xl leading-relaxed">
            En Ane Dulce Sabor creamos dulces artesanales pensados para sorprender. 
            Trabajamos con ingredientes seleccionados y recetas caseras, cuidando cada detalle 
            para lograr sabores únicos. Con más de 1 año de experiencia, acompañamos momentos 
            especiales con productos hechos con dedicación.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
