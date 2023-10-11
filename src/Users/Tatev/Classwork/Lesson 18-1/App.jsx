import { useEffect, useState, useTransition } from 'react'
import Coments from './Coments'

const comentsFilter = (coments, search) => coments.filter(item => item.name.concat(item.body).includes(search.toLowerCase()))

export default function App() {
  const [coments, setComents] = useState([])
  const [search, setSearch] = useState('')
  const [isPending, startTransition] = useTransition()
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(setComents)
  }, [])

  const handleSearch = (event) => {
    const { value } = event.target;
    startTransition(() => setSearch(value)) 
  }

  return (
    <div className='container'>
      <h1>
        useTransition hook
      </h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      {isPending && <h1>Pending....</h1>}
      <Coments data={comentsFilter(coments, search)} />
    </div>
  )
}
