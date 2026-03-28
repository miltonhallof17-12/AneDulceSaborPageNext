import { useEffect, useRef } from 'react'

const useIntersectionObserver = <T extends HTMLElement>(ref: React.RefObject<T | null>) => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current?.id) {
          // This will be handled by the parent component
          console.log('Element is visible:', ref.current?.id)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
}

export default useIntersectionObserver
