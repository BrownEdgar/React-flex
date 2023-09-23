import axios from "axios"
import { useEffect, useState } from "react"
import "./App.scss"

export default function App() {
    const [books, setBooks] = useState([]);
    const [languages, setLanguages] = useState([]);    
    const [carentlanguage, setCarentlanguage] = useState("all")                              
    useEffect(() => {
       axios("./Books-data.json")
       .then(res => {
        const newBooks = res.data.slice(0,50)
        setBooks(newBooks)
        const x = new Set(newBooks.map(book => book.language))
        setLanguages(Array.from(x).toSorted())
       })
    }, [])

    const handleChange = (e) => {
      setCarentlanguage(e.target.value)
    }

    const renderBooks =()=>{
return carentlanguage === "all" ? books :  books.filter(book => book.language === carentlanguage)
    }
    
  return (
    <div  className="Container">
      <div className="Container-options">
        <select name="languages" id="languages" onChange={handleChange}>
          <option value="all">all</option>
          {
            languages.map(language =>  {
              return <option value={language} key={language}>{language} </option>
            })
          }
        </select>
      </div>
     <table>
     <thead>
       < tr>
       <th>id</th>
       <th>title</th>
       <th>author</th>
       <th>price</th>
       <th>wants to read</th>
       <th>language</th>
       <th>date published</th>
       <th></th>
       </tr>
     </thead>
     <tbody>
       {
          renderBooks().map((book,index) => {
            return(
          <tr key={book.id}>
           <td>{++index}</td>
           <td>{book.title}</td>
           <td>{book.author}</td>
           <td>{book.price}</td>
           <td>{book.wants_to_read}</td>
           <td>{book.language}</td>
           <td>{book.date_published}</td>
          </tr>
            )
          })
       }
           </tbody>
      </table>
    </div>
  )
}
