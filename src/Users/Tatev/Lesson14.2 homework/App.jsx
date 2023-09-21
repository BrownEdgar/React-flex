import { useState } from "react"
import "./App.scss"


export default function App() {

  const [films, setFilms] = useState({
    original: [
      {
        id:1,
        title: "Teminator",
        genre: "Action",
        stock: 6,
        rate: 2.5
      },
      {
        id:2,
        title: "Die Hard",
        genre: "Action",
        stock: 5,
        rate: 2.5
      },
      {
        id:3,
        title: "Get Out",
        genre: "Thriller",
        stock: 8,
        rate: 3.5
      },
      {
        id:4,
        title: "Trip to Italy",
        genre: "Comedy",
        stock: 7,
        rate: 3.5
      },
      {
        id:5,
        title: "Airplane",
        genre: "Comedy",
        stock: 7,
        rate: 3.5
      }
    ],
    filtered: [
      {
        id:1,
        title: "Teminator",
        genre: "Action",
        stock: 6,
        rate: 2.5
      },
      {
        id:2,
        title: "Die Hard",
        genre: "Action",
        stock: 5,
        rate: 2.5
      },
      {
        id:3,
        title: "Get Out",
        genre: "Thriller",
        stock: 8,
        rate: 3.5
      },
      {
        id:4,
        title: "Trip to Italy",
        genre: "Comedy",
        stock: 7,
        rate: 3.5
      },
      {
        id:5,
        title: "Airplane",
        genre: "Comedy",
        stock: 7,
        rate: 3.5
      }
    ]
  })

  const deleteFilmById =(id) => {
    const result = films.filtered.filter(film => film.id !== id)
    setFilms({original: result, filtered: result})
  }

  const filterFilms=(e) => {
    if(e.target.value === ""){
      const result = films.original
      setFilms({...films, filtered: result})
    } else{
      const result = films.original.filter(film => film.id === +e.target.value)
      setFilms({...films, filtered: result})
    }
  }

  return (
    <div className="Container">
      <input type="text" placeholder="Write id number" onChange={filterFilms}/>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            films.filtered.map(film =>{
              return(
                <tr key ={film.id} className="item">
                  <td>{film.title}</td>
                  <td>{film.genre}</td>
                  <td>{film.stock}</td>
                  <td>{film.rate}</td>
                  <td>
                    <button onClick={() => deleteFilmById(film.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
