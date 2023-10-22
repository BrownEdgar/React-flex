import { createContext, useState } from "react"
import A from "./A"
import "./App.css"

export const CountContext = createContext("")  //ete provider cka sa kvercni vorpes value, isk ete provider ka u value chka error kta

export default function App() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count +1)

  return (
    <div>
      <h1>App</h1>
      <CountContext.Provider value={{count: count, name: "X", addCount}}>
        <A />
      </CountContext.Provider>
    </div>
  )
}
