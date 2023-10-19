
import { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import "./App.css"

const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  useEffect(() => {
    getPhotos()
  }, [page])
  
  function getPhotos () {
    let apiUrl = `https://api.unsplash.com/photos/?`
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${API_KEY}`

    fetch(apiUrl)
    .then(res => res.json())  //default 10 hata talis
    .then(data => {
      const imageFromApi = data.results ?? data  //sra hamar kexciqa undefinedn u null-y dranc depqum ajiny kvercni
      if(page === 1) {
        setImages(imageFromApi)
      }else{
        setImages([...images, ...imageFromApi]) //erkrordn el ereq ketov vor zangvaci mej zangvac chlini mi hati mej sax qci
      }
    })
    .catch(err => console.log(err))
  }

  const searchPhotos = (e) => {
    e.preventDefault()
    setPage(1)
    getPhotos()
  }

  if(!API_KEY) {
    return (
      <a href="https://unsplash.com/developers" className="error"> 
        Required: Get Your Unsplash API Key First
      </a> //vor env chunena gna irany beri dni
    )
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery</h1>
      <form onSubmit={searchPhotos}>
        <input 
          type="text" 
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <InfiniteScroll
        dataLength = {images.length}
        next = {() => setPage((page) => page + 1)}
        hasMore = {true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {
            images.map(image => {
              return (
                <a 
                  href={image.links.html} 
                  className="image" 
                  key={image.id}
                  target="_blank"
                  rel ="noopener noreferrer"
                >
                  <img src={image.urls.regular} alt={image.alt_description} />
                </a>
              )
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}
