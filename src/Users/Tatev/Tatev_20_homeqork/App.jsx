import useFetchApi from "./hooks/useFetchApi"
import { useState } from "react"
import Pagination from "./Components/Pagination"
import "./App.scss"


export default function App() {
  const {photos, isPending} = useFetchApi("https://jsonplaceholder.typicode.com/photos?_limit=200")
  const [currentPage, setCurrentPage] = useState(1)
  const [per_page, setPer_page] = useState(15)

  const paginate =(currentIndex) =>{
    setCurrentPage(currentIndex)
  }

  const lastIndex = currentPage * per_page
  const firstIndex = lastIndex - per_page
  const currentPhotos = photos.slice(firstIndex, lastIndex)

  if(isPending){
    return <h1>Loading...</h1>
  }

  return (
    <div className="Photos">
      {
        currentPhotos.map(photo => {
          return (
            <img src={photo.url} alt={photo.title} key={photo.id}/>
          )
        })
      }
      <Pagination total={photos.length} per_page={per_page} paginate={paginate}/>
    </div>
  )
}
