import React from 'react'

interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  as?: React.ElementType
  href?: string
  target?: string
  rel?: string
}

const GlowingButton = ({ 
  children, 
  onClick, 
  className = "", 
  as: Component = "button",
  href,
  target,
  rel,
  ...props 
}: GlowingButtonProps) => {
  const buttonClasses = `relative px-8 py-3 bg-[#f8ab4c] hover:bg-[#f79824] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#f8ab4c]/50 hover:shadow-xl hover:shadow-[#f8ab4c]/70 ${className}`
  
  if (Component === "a") {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </a>
    )
  }
  
  return (
    <Component 
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  )
}

export default GlowingButton
