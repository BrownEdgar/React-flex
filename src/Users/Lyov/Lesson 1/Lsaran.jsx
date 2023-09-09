import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames";

import './lsaran.css'

const arr = ["users", "posts", "todos"]

export default function lsaran() {
  const [currentIndex, setCurrentIndex] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    if (currentIndex !== null) {
      axios(
        {
          method: 'get',
          baseURL: 'https://jsonplaceholder.typicode.com',
          url: arr[currentIndex],
          params: {
            _limit: 5
          }
        },
      )
        .then(res => setData(res.data))
    }
  }, [currentIndex])




  const hendleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="container">
      <div className="buttons">
        {
          arr.map((elem, index) => {
            return <button
              key={elem}
              className={classNames('btn', {
                active: currentIndex === index,
              })}
              onClick={() => hendleClick(index)}
            >
              {elem}
            </button>
          })
        }
      </div>
      <p>
        {
          JSON.stringify(data, null, 1)
        }
      </p>
    </div>
  )
}
