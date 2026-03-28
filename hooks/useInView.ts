import { useEffect, useState } from 'react'

const useInView = <T extends HTMLElement>(
  ref: React.RefObject<T | null>
) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true)
          observer.disconnect() // 👈 clave
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return hasBeenVisible
}

export default useInView