import { useState } from 'react'
import Users from './Components/Users'

export default function App() {
  const [film, setfilm] = useState([
    {id:1, Title: "Terminator", Genre: "Action", Stock: 6, Rate: "2.5$" },
    {id:2, Title: "Dier Hard", Genre: "Action", Stock: 5, Rate: "2.5$" },
    {id:3, Title: "Get Out", Genre: "Thriller", Stock: 8, Rate: "3.5$" },
    {id:4, Title: "Trip to Italy", Genre: "Comedy", Stock: 7, Rate: "3.5$" },
    {id:5, Title: "Airplane", Genre: "Comedy", Stock: 7, Rate: "3.5$" },
  ])
  const [id, setId] = useState('')

  const handleDelete = (id) => {
    let newArr;
    newArr = film.filter(elem => elem.id !== id)
    setfilm(newArr)
  }

  const handleFilterById = (e) => {
    setId(e.target.value)
  }

  return (
    <div>      
      <Users handleDelete={handleDelete} handleFilterById={handleFilterById} id={id} film={film}/>
    </div>
  )
}
