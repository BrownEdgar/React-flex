import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [books, setBooks] = useState({
    original: [],
    filtered: [],
  });
  const [languages, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("all");
  const [filteredBookCount, setFilteredBookCount] = useState(0);
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    axios("./Books-data.json").then((res) => {
      const newBooks = res.data;
      setBooks({
        original: newBooks,
        filtered: newBooks,
      });
      const x = new Set(newBooks.map((book) => book.language));
      setLanguages(Array.from(x).toSorted());
    });
  }, []);

  useEffect(() => {
    renderBooks();
  }, [currentLanguage, currentYear]);

  const handleChangeLanguage = (e) => {
    setCurrentLanguage(e.target.value || "");
  };

  const handleChangeYear = (e) => {
    setCurrentYear(e.target.value || "");
  };

  const handleDelete = (id) => {
    const updatedBooks = books.original.filter((book) => book.id !== id);
    setBooks((prevBooks) => ({
      original: updatedBooks,
      filtered: prevBooks.filtered.filter((book) => book.id !== id),
    }));
  };

  const renderBooks = () => {
    let filteredResult = [...books.original];

    if (currentLanguage !== "all") {
      filteredResult = filteredResult.filter(
        (book) => book.language === currentLanguage
      );
    }

    if (currentYear !== "") {
      filteredResult = filteredResult.filter(
        (book) =>
          new Date(book.date_published).getFullYear() === parseInt(currentYear)
      );
    }

    // Sort the filteredResult consistently by book title
    filteredResult.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });

    setBooks({ ...books, filtered: filteredResult });
  };

  useEffect(() => {
    setFilteredBookCount(books.filtered.length);
  }, [books.filtered]);

  return (
    <div className="Container">
      <div className="Container__options">
        <select name="languages" id="languages" onChange={handleChangeLanguage}>
          <option value="" selected>
            All
          </option>
          {languages.map((language) => {
            return (
              <option value={language} key={language}>
                {language}
              </option>
            );
          })}
        </select>
        <select name="years" id="years" onChange={handleChangeYear}>
          <option value="">All Years</option>
          {Array.from(
            new Set(
              books.original.map((book) =>
                new Date(book.date_published).getFullYear()
              )
            )
          )
            .sort((a, b) => a - b) // Sort the years in descending order
            .map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
        </select>
        <h3>Count of Books : {filteredBookCount}</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Price</th>
            <th>Wants to read</th>
            <th>Publish Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.filtered.map((book, index) => {
            return (
              <tr key={book.id}>
                <td>{++index}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.language}</td>
                <td>{book.price}</td>
                <td>{book.wants_to_read}</td>
                <td>{book.date_published}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => handleDelete(book.id)}
                    icon={faUserXmark}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
