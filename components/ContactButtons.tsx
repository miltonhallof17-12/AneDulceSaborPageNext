const ContactButtons = () => {
  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a 
        href="https://wa.me/5493484407826?text=" 
        target="_blank"
        className="fixed bottom-6 left-6 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-all duration-1000 transform shadow-lg z-50 opacity-100 translate-y-0 scale-100"
      >
        <img 
          src="/whatsapp-icon.webp" 
          alt="WhatsApp"
          className="w-full h-full object-cover drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]"
          loading="lazy"
        />
      </a>

      {/* Instagram Button - Bottom Right */}
      <a 
        href="https://www.instagram.com/ane_dulce_sabor" 
        target="_blank"
        className="fixed bottom-6 right-6 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-all duration-1000 transform shadow-lg z-50 opacity-100 translate-y-0 scale-100"
      >
        <img 
          src="/instagram-icon.webp" 
          alt="Instagram"
          className="w-full h-full object-cover drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]"
          loading="lazy"
        />
      </a>
    </>
  )
}

export default ContactButtons
