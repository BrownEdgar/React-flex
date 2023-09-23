import { useRef, useState } from "react";
import './App.css'
import { set } from "immutable";

export default function App() {

    const [movie, setMovie] = useState([
        {
            id: 1,
            title: 'Terminator',
            genere: 'Action',
            stock: 6,
            rate: 2.5,
        },
        {
            id: 2,
            title: 'Die Hard',
            genere: 'Action',
            stock: 5,
            rate: 2.5,
        },
        {
            id: 3,
            title: 'Get Out',
            genere: 'Thriller',
            stock: 8,
            rate: 3.5,
        },
        {
            id: 4,
            title: 'Trip To Italy',
            genere: 'Comedy',
            stock: 7,
            rate: 3.5,
        },
        {
            id: 5,
            title: 'Airplane',
            genere: 'Comedy',
            stock: 7,
            rate: 3.5,
        },
    ])
    const inputRef = useRef(null)

    const deleteMovie = (id) => {
        const result = movie.filter(post => post.id !== id)
		setMovie(result)
    }
    const searchById = () => {
    }
    return (
        <div className="container">
            <input ref={inputRef} className="search" type="text" placeholder="search by id" />
            <button onClick={() => searchById(movie.id)}>Submit</button>
            <div className="box">
                <h1 className="title">
                    Title
                </h1>
                <h1 className="genere">
                    Genere
                </h1>
                <h1 className="stock">
                    Stock
                </h1>
                <h1 className="rate">
                    Rate
                </h1>
            </div>
            {
                movie.map(elem => {
                    return (
                        <div key={elem.id} className="box elem">
                            <h1 className="title">
                                {elem.title}
                            </h1>
                            <h1 className="genere">
                            {elem.genere}
                            </h1>
                            <h1 className="stock">
                            {elem.stock}
                            </h1>
                            <h1 className="rate">
                            {elem.rate}
                            </h1>
                            <button onClick={() => deleteMovie(elem.id)}>
                                delete
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}