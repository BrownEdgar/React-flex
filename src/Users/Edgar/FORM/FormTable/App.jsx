import axios from 'axios'
import { useEffect, useState } from 'react'

import "./App.scss"

export default function App() {
  const [books, setBooks] = useState({
    original: [],
    filtered: []
  });
  const [languages, setLanguages] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('all');


  // useEffect(() => {
  //   axios('./Books-data.json')
  //     .then(res => {
  //       const newBooks = res.data;
  //       setBooks({
  //         original: newBooks,
  //         filtered: newBooks
  //       })
  //       const x = new Set(newBooks.map(book => book.language));
  //       setLanguages(Array.from(x).toSorted())
  //     })
  // }, [])


  useEffect(() => {
    renderBooks()
  }, [currentLanguage])


  const handleChange = (e) => {
    setCurrentLanguage(e.target.value || '')
  }

  const renderBooks = () => {
    if (currentLanguage === '') {
      setBooks({ ...books, filtered: books.original })
    } else {
      const result = books.original.filter(book => book.language === currentLanguage);
      setBooks({ ...books, filtered: result })
    }

  }

  return (
    <div className='Container'>
      <div className="Container-options">
        <select name="languages" id="languages" onChange={handleChange}>
          <option value="" selected>all</option>
          {
            languages.map(language => {
              return <option value={language} key={language}>{language}</option>
            })
          }
        </select>
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
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
