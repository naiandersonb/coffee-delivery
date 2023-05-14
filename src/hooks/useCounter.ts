import { useState } from 'react'

export function useCounter() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount((state) => state + 1)
  }

  const handleDecrement = () => {
    if (count === 1) return
    setCount((state) => state - 1)
  }

  const resetCounter = () => {
    setCount(1)
  }

  return { count, handleIncrement, handleDecrement, resetCounter }
}
