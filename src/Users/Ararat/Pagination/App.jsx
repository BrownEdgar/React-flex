import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(0);
  const imageCount = 50;
  const displayedPage = 5;

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          setImage(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const startIndex = page * imageCount;
  const endIndex = startIndex + imageCount;
  const currentImages = image.slice(startIndex, endIndex);

  const totalPages = Math.ceil(image.length / imageCount);

  const startPage = Math.max(0, page - Math.floor(displayedPage / 2));
  const endPage = Math.min(totalPages - 1, startPage + displayedPage - 1);

  const result = [];

  for (let i = startPage; i <= endPage; i++) {
    const activePage = i == page ? 'active' : '';
    result.push(
      <a key = {i} href = "#" className = {activePage} onClick = {() => setPage(i)}>
        {i + 1}
      </a>
    );
  }

  function prevPage () {
    if (page > 0) {
      setPage(page - 1);
    }
  };


  function nextPage () {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className = "container">
      <h1>Image Gallery</h1>
      {image == null}
      <div className = "image_List">
        {currentImages.map((elem) => (
          <div key = {elem.id} className = "image_Item">
            <img src = {elem.thumbnailUrl} alt = {elem.title} />
            <p>{elem.title}</p>
          </div>
        ))}
      </div>

      <div className = "pagination">
        <button onClick = {prevPage} disabled = {page == 0}>
          Previous
        </button>
        {result}
        <button onClick = {nextPage} disabled = {page == totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
