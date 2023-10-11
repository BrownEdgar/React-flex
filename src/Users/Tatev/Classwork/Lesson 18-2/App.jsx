import { useMemo, useState} from 'react'
import Total from './Total'

export default function App() {
  const [count, setCount] = useState(0)

  const handleChange = () =>{
    setCount(count +1)
  }
  
  // const total = useMemo(() => <Total  count={count}/>, [count])
  const total = useMemo(() => <Total />, [])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleChange}>Add 1</button>
      {total}
    </div>
  )
}
