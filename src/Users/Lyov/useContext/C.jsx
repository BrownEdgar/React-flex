import { useContext } from "react"
import { CountContext } from "./Contexts"
import Button from "../UI/Button/Button"


export default function C() {
  const value = useContext(CountContext)
  return (
    <div>
      <h2>Component C</h2>
      <pre>
        {JSON.stringify(value)}
      </pre>
      <Button 
      title="add count" 
      onClick={value.addCount} 
      size={'lg'} 
      variant='primary'/>
      {/* <CountContext.Consumer> HIN TARBERAK
        {
          (value) => {
            return (
              <>
                <pre>
                  {JSON.stringify(value)}
                </pre>
                <button onClick={value.addCount}>add count</button>
              </>
            )
          }
        }
      </CountContext.Consumer> */}
    </div>
  )
}
