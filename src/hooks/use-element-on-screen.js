import { useRef, useState, useEffect } from 'react'

const useElementOnScreen = (options) => {
  const containerRef = useRef(null)
  const [isOnScreen, setIsOnScreen] = useState(false)
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsOnScreen(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isOnScreen]
}

export default useElementOnScreen
