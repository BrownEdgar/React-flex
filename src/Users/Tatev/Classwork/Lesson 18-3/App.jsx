import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import Total from './Total'


export default function App() {
  const [coments, setComents] = useState([])
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition() 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(setComents)
  }, [])

  const handleSearch = useCallback(
    (event) => {
      const { value } = event.target;
      setSearch(value)
    },
    [],
  )

  const total = useMemo(() => <Total  count={count} handleSearch={handleSearch}/>, [count, handleSearch])

  return (
    <div className='container'>
      <h1>
        useCallBack hook
      </h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      {isPending && <h1>Pending....</h1>}
      {total}
    </div>
  )
}
