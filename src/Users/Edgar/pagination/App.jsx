
import { useState } from 'react'
import useFetchApi from './hooks/useFetchApi'

import "./App.css"
import Pagination from './Pagination';

export default function App() {
  const { data, ispending } = useFetchApi('https://jsonplaceholder.typicode.com/posts')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const paginate = (currentIndex) => {
    setCurrentPage(currentIndex)
  }


  const lastIndex = currentPage * perPage; // 30
  const firstIndex = lastIndex - perPage; // 20 
  const currentPosts = data.slice(firstIndex, lastIndex)

  if (ispending) {
    return <h1>Loaging...</h1>
  }

  return (
    <div>
      <div className="Posts">
        {
          currentPosts.map(elem => {
            return (
              <p key={elem.id}>{elem.title}</p>
            )
          })
        }
      </div>
      <Pagination perPage={perPage} total={data.length} paginate={paginate} />
    </div>
  )
}
