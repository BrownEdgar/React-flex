import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

import "./App.scss"

export default function App() {
  const [books, setBooks] = useState({
    original: [],
    filtered: []
  });
  const [languages, setLanguages] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('all');
  const [year, setYear] = useState([]);
  const [currentYear, setCurrentYear] = useState("all");
  const [filteredCount, setFilteredCount] = useState(0)

  useEffect(() => {
    axios('./Books-data.json')
      .then(res => {
        const newBooks = res.data;
        setBooks({
          original: newBooks,
          filtered: newBooks
        })
        const x = new Set(newBooks.map(book => book.language));
        const y = new Set(newBooks.map((book) =>
          new Date(book.date_published).getFullYear()));
        setLanguages(Array.from(x).toSorted())
        setYear(Array.from(y).toSorted().slice(0, -1))
      })
  }, [])


  useEffect(() => {
    renderBooks()
  }, [currentLanguage, currentYear])

  useEffect(() => {
    setFilteredCount(books.filtered.length)
  }, [books.filtered])


  const handleLanguageChange = (e) => {
    setCurrentLanguage(e.target.value || 'all')
  }

  const handleYearsChange = (e) => {
    setCurrentYear(e.target.value || "all")
  }

  const deleteBook = (id) => {
    const result = books.original.filter(book => book.id !== id)
    setBooks((originalBooks) => ({
      original: result,
      filtered: originalBooks.filtered.filter((book) => book.id !== id),
    }));
  }

  const renderBooks = () => {
    let result = [...books.original]
    if (currentLanguage !== 'all') {
      result = result.filter(book => book.language === currentLanguage);
    } if (currentYear !== "all") {
      result = result.filter((book) => new Date(book.date_published).getFullYear() === parseInt(currentYear));
    }
    setBooks({ ...books, filtered: result })

  }

  return (
    <div className='Container'>
      <div className="Container-options">
        <select name="languages" id="languages" onChange={handleLanguageChange}>
          <option value="" selected>all</option>
          {
            languages.map(language => {
              return <option value={language} key={language}>{language}</option>
            })
          }
        </select>
        <select name="years" id="years" onChange={handleYearsChange}>
          <option value="" selected>all</option>
          {
            year.map(year => {
              return <option value={year} key={year}>{year}</option>
            })
          }
        </select>
        <h4>Number of Books: {filteredCount}</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>language</th>
            <th>price</th>
            <th>wants to read</th>
            <th>publish date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            books.filtered.map((book, index) => {
              return (
                <tr key={book.id}>
                  <td>{++index}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.language}</td>
                  <td>{book.price}</td>
                  <td>{book.wants_to_read}</td>
                  <td>{book.date_published}</td>
                  <td><AiFillCloseSquare onClick={() => deleteBook(book.id)} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
