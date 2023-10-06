import { useMemo, useState } from 'react'
import Total from './Total'

export default function App() {
  const [count, setCount] = useState(0)
  const total = useMemo(() => <Total count={count}/>, [count])
const handleCount = () => {
  setCount(count + 1)
}
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>
        count
        </button>
      <Total total={total}/>
    </div>
  )
}
