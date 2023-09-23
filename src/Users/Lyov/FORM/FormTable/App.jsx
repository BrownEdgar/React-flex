import axios from 'axios'
import { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import './App.scss'

export default function App() {
  const [books, setBooks] = useState({
    original: [],
    filtered: []
  });
  const [languages, setLanguage] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('All Languages')


  useEffect(() => {
    axios('./public/books-data.json')
      .then(res => {
        const newBooks = res.data.slice(0,500)
        setBooks({
          original: newBooks,
          filtered: newBooks
        })
        const x = new Set(newBooks.map(book => book.language));
        setLanguage(Array.from(x).toSorted())
      })
  }, [])

const handleChange = (e) => {
setCurrentLanguage(e.target.value)
}

useEffect(() => {
  renderBooks()
},[currentLanguage])

const renderBooks = () => {
  if (currentLanguage === '') {
    setBooks({...books, filtered: books.original})
  } else {
  const result = books.original.filter(book => book.language === currentLanguage)
  setBooks({...books, filtered: result})
}
}
const deleteId = (id) => {
  setBooks(books.original.filter(book => book.id !==id),
  books.filtered.filter(book => book.id !== id))
}

  return (
    <div className='Container'>
      <div className='Container-options'>
        <select name="languages" id="languages" onChange={handleChange}>
          <option value="" selected>All Languages</option>
          {
            languages.map(language => {
              return (
                <option value={language} key={language}>{language}</option>
              )
            })
          }
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Price</th>
            <th>Wants To Read</th>
            <th>Publish Date</th>
            <th>Delete</th>
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
                  <td><AiOutlineClose onClick={() => deleteId(book.id)}/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
