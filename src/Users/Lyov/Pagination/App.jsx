import { useState } from "react"
import useFetchApi from "./hooks/useFetchApi"
import './App.css'
import Pagination from "./Pagination"

export default function App() {
  const { data, ispending } = useFetchApi('https://jsonplaceholder.typicode.com/photos')
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, ] = useState(10)


  const paginate = (currentIndex) => {
    setCurrentPage(currentIndex )
  }

  const lastIndex = currentPage * perPage; 
  const fistIndex = lastIndex - perPage; 
  const currentPosts = data.slice(fistIndex, lastIndex)
 
  if (ispending) {
    return <h1>Loading..</h1>
  }

  return (
    <div>
      <div className="Posts">
        {
          currentPosts.map(elem => {
            return (
              <img key={elem.id}
              src={elem.url} />
              // <p key={elem.id}>
              //   {elem.title}
              // </p>
            )
          })
        }
      </div>
      <Pagination perPage={perPage} total={data.length} paginate={paginate} />
    </div>
  )
}
