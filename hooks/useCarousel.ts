import { useEffect, useState } from 'react'

interface UseCarouselOptions {
  length: number
  interval?: number
  initialIndex?: number
}

export const useCarousel = ({ length, interval = 4000, initialIndex = 0 }: UseCarouselOptions) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (interval <= 0) return

    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [length, interval])

  const goTo = (index: number) => {
    setCurrentIndex(index % length)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % length)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + length) % length)
  }

  return {
    currentIndex,
    goTo,
    goToNext,
    goToPrevious
  }
}
