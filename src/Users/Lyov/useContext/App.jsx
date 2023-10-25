import { useState } from "react"
import A from "./A"
import './App.css'
import { CountContext } from "./Contexts"



export default function App() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)
 

  return (
    <div>
      <h1>App component</h1>
      <CountContext.Provider value={{ count: count, addCount }}>
        <A />
      </CountContext.Provider>
      
    </div>
  )
}
