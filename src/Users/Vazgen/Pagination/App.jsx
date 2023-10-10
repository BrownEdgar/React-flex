import { useState } from "react";
import Pagination from "./Pagination";
import "./App.scss";
import useFakeApi from "./Hooks/useFakeApi";

export default function App() {
  const { data, ispending } = useFakeApi(
    "https://jsonplaceholder.typicode.com/photos?_limit=500"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(24);

  const paginate = (currentIndex) => {
    setCurrentPage(currentIndex);
  };

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentPhotos = data.slice(firstIndex, lastIndex);

  if (ispending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="Container">
      <h2>Gallery</h2>
      <div className="Photos">
        {currentPhotos.map((elem) => {
          return <img key={elem.id} src={elem.url} alt="" />;
        })}
      </div>
      <Pagination perPage={perPage} total={data.length} paginate={paginate} />
    </div>
  );
}
