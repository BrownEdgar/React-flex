import { useEffect, useRef } from "react"


export default function Home() {
  const h1ref = useRef(null)


  useEffect(() => {
    const getWindowWidth = () => {
      h1ref.current.innerText = `Home Page ${window.innerWidth} px`
    }
    window.addEventListener('resize', getWindowWidth)
    return () => {
      window.removeEventListener('resize', getWindowWidth)
    }
  }, [])

  return (
    <div>
      <h1 ref={h1ref}>Home Page </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam officia laborum fugit, temporibus odit numquam libero voluptatum ad, sunt optio! Veritatis debitis doloribus officia fugit velit eos error dolores.</p>
    </div>
  )
}
