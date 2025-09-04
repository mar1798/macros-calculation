import { useRef, useEffect } from 'react'

/**
 * Adds an event listener to the window.
 */
export function useWindowEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void
): void {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)
  savedHandler.current = handler

  useEffect(
    () => {
      // Create event listener that calls handler function stored in ref
      const eventListener: typeof handler = event => {
        savedHandler.current(event)
      }

      // Add event listener
      window.addEventListener(eventName, eventListener, { passive: true })

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(eventName, eventListener)
      }
    },
    [eventName] // Re-run if eventName or element changes
  )
}
