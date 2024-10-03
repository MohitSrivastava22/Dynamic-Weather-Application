import React from 'react'
import { useState, useEffect } from 'react'

function DateTime() {
  const [today, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const day = today.toLocaleDateString('en', { weekday: "short" })
  const date = today.toLocaleDateString('en', { day: "numeric" })
  const month = today.toLocaleDateString('en', { month: "short" })
  const year = today.toLocaleDateString('en', { year: "numeric" })

  return (

    <>
      {day},{date},{month},{year}
    </>


  )
}
export default DateTime



