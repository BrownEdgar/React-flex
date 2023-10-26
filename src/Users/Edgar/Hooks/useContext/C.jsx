import { useContext } from 'react'
import { CountContext } from './Contexts'
import Button from '../../UI/Button/Button'




export default function C() {
  console.log("C render...")
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
      />






      {/* <CountContext.Consumer>
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
