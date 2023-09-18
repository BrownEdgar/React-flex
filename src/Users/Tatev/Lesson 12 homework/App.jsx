import Book from './Components/Book'
import { useEffect, useState } from "react"
import "./App.scss"
import axios from 'axios'

export default function App() {

  const [books, setBooks] = useState({
    original: [],
    filtered: []
  })
  const [languages, setLanguages] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [dates, setDates] = useState([])
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() =>{
    axios("./Books-data.json")
    .then(res => {
      const newBooks = res.data.slice(0, 100)
      setBooks({
        original: newBooks,
        filtered: newBooks
      })
      const x = new Set(newBooks.map(book => book.language))
      setLanguages(Array.from(x).toSorted())
      const y = new Set(newBooks.map(book => book.date_published.slice(-4)))
      setDates(Array.from(y).toSorted((a,b) => a-b))
    })
  },[])

  useEffect(() => {
    renderBooks();
  }, [currentLanguage, currentDate]);

  const renderBooks = () => {
    let filteredBooks = books.original;
    if (currentLanguage !== '') {
      filteredBooks = filteredBooks.filter(book => book.language === currentLanguage);
    }
    if (currentDate !== "") {
      filteredBooks = filteredBooks.filter(book => book.date_published.includes(currentDate));
    }
    setBooks({ ...books, filtered: filteredBooks });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "languages") {
      setCurrentLanguage(value);
    } else if (name === "dates") {
      setCurrentDate(value);
    }
  }

  const deleteBook = (id) =>{
    const updateOriginal = books.original.filter(book => book.id !== id)
    const updateFiltered = books.filtered.filter(book => book.id !== id)
    setBooks({ original: updateOriginal, filtered: updateFiltered})
  }

  return (
    <div className='App'>
        <Book books={books} languages={languages} currentLanguage={currentLanguage} handleChange={handleChange} dates={dates} deleteBook={deleteBook}/>
    </div>
  )
}
