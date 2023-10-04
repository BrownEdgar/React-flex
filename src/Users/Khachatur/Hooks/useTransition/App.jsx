import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import './App.css'



const comentsFilter = (coments, search) => coments.filter(item => item.name.concat(item.body).includes(search.toLowerCase()))

export default function App() {
  const [coments, setComents] = useState([])
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition() // 1
  const [currentId, setCurrentId] = useState(null)
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/comments`)
  //     .then(response => response.json())
  //     .then(setComents)
  // }, [])

  // const total = useMemo(() => <Total count={count} />, [count])
  // const handleSearch = useCallback(
  //   (event) => {
  //     const { value } = event.target;
  //     startTransition(() => setSearch(value)) // 2
  //   },
  //   [],
  // )


  const handleChange = (e) => {
    if (currentId) {
      clearTimeout(currentId)
    }
    const interval = setTimeout(() => {
      setCount(e.target.value)
    }, 500)
    setCurrentId(interval)
  }

  return (
    <div className='container'>
      <h1>
        {count}
      </h1>

      <form>
        <input type="range" name="price" id="price" min={100} max={1e4} step={100} onChange={handleChange} />
      </form>

      {/* <form>
        <input type="text" onChange={handleSearch} />
      </form> */}
      {/* {isPending && <h1>Pending....</h1>}
      <Coments data={comentsFilter(coments, search)} />
      <Total count={count} handleSearch={handleSearch} /> */}




    </div>
  )
}
