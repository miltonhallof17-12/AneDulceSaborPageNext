'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactButtons from '../components/ContactButtons'
import Destacados from '../components/Destacados'
import SobreNosotros from '../components/SobreNosotros'
import Footer from '../components/Footer'
import GlowingButton from '../components/GlowingButton'
import useInView from '../hooks/useInView'

const HomePageClient = () => {
  // refs
  const heroRef = useRef<HTMLElement>(null)
  const destacadosRef = useRef<HTMLElement>(null)
  const sobreNosotrosRef = useRef<HTMLElement>(null)

  // hooks
  const heroVisible = useInView(heroRef)
  const destacadosVisible = useInView(destacadosRef)
  const sobreNosotrosVisible = useInView(sobreNosotrosRef)

  return (
    <>
      <div className="min-h-screen bg-[#f5efe6] overflow-x-hidden">
        <Navbar />

      <section ref={heroRef} className='px-4 sm:px-6 lg:px-8'>
        <Hero isVisible={heroVisible} />
      </section>

      <ContactButtons />

      <section ref={destacadosRef}  className='px-4 sm:px-6 lg:px-8'>
        <Destacados isVisible={destacadosVisible} />
      </section>

      <section ref={sobreNosotrosRef} className='px-4 sm:px-6 lg:px-8'>
        <SobreNosotros isVisible={sobreNosotrosVisible} />
      </section>

      {/* CTA Section */}
      <section className='px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <Link href="/catalogo">
            <GlowingButton className="px-12 py-4 text-xl">
              Ver Catálogo
            </GlowingButton>
          </Link>
          <p className="mt-4 text-gray-600">
            Explora nuestra completa colección de dulces artesanales
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default HomePageClient
