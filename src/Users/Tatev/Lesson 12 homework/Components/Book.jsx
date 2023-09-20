import PropTypes from "prop-types"
import { AiFillCloseSquare } from 'react-icons/ai';
import "./Book.scss"

export default function Book({ books, languages, handleChange, dates, deleteBook }) {
  return (
    <div className='Container'>
      <div className='Container-options'>
        <select name="languages" id="languages" onChange={handleChange}>
          <option value="" >All</option>
          {
            languages.map(language => {
              return (
                <option value={language} key={language}>{language}</option>
              )
            })
          }
        </select>
        <select name="dates" id="dates" onChange={handleChange}>
          <option value="">All</option>
          {
            dates.map(date => {
              return (
                <option value={date} key={date}>{date}</option>
              )
            })
          }
        </select>
        <span className="total">Total: {books.filtered.length}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>language</th>
            <th>price</th>
            <th>want to read</th>
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
                  <td><AiFillCloseSquare className='close' onClick={() => deleteBook(book.id)} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

Book.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  deleteBook: PropTypes.func,
  books: PropTypes.exact({
    original: PropTypes.array,
    filtered: PropTypes.array,
  }),
  dates: PropTypes.arrayOf(PropTypes.string)
}