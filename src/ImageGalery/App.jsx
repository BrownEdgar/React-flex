import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const API_KEY = import.meta.env.VITE_UNSPLASh_ACCESS_KEY;

export default function App() {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')

    function getPhotos() {
        let apiUrl = `https://api.unsplash.com/photos/?`;
        if (query) apiUrl = `https://api.unsplash.com/search/photos/?query=${query}`
        apiUrl += `&page=${page}`
        apiUrl += `&client_id=${API_KEY}`


        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const imagesFromApi = data.results ?? data
                if (page === 1) {
                    setImages(imagesFromApi)
                } else {
                    setImages([...images, ...imagesFromApi])
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getPhotos()
    })

    const serachPhotos = (e) => {
        e.preventDefault()
        setPage(1)
        getPhotos
    }

    if (!API_KEY) {
        return (
            <a href="https://unsplash.com/developers" className='error'>
                required: get your
            </a>
        )
    }

    return (
        <div className='app'>
            <h1>Unsplash Image Gallery</h1>
            <form onSubmit={serachPhotos}>
                <input
                    type="text"
                    placeholder='Search in unsplash...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button>Search</button>
            </form>
            <InfiniteScroll
                dataLength={images.length}
                next={() => setPage((page) => page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <div className='image-grid'>
                    {
                    images.map((image) => {
                        return (
                            <a 
                            className='image' 
                            key={image.id}
                            href={image.links.html}
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <img src={image.urls.regular} alt={image.alt_description}/>
                            </a>
                        )
                    })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}