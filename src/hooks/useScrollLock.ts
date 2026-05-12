import { useEffect, useRef } from 'react'

export function useScrollLock(locked: boolean): void {
  const savedY = useRef(0)

  useEffect(() => {
    if (locked) {
      savedY.current = window.scrollY
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      window.scrollTo({ top: savedY.current })
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}
