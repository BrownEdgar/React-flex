
import { useState } from 'react'
import useFetchApi from './hooks/useFetchApi'

import "./App.css"
import Pagination from './Pagination';

export default function App() {
  const { data, ispending } = useFetchApi('https://jsonplaceholder.typicode.com/photos')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);

  const paginate = (currentIndex) => {
    setCurrentPage(currentIndex)
  }


  const lastIndex = currentPage * perPage; 
  const firstIndex = lastIndex - perPage;
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
               <div key={elem.id}>
                <img src={elem.url}/>
                <p>{elem.title}</p>
               </div> 
            )
          })
        }
      </div>
      <Pagination perPage={perPage} total={data.length} paginate={paginate} />
    </div>
  )
}
