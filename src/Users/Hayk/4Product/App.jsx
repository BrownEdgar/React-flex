import Users from './Components/Users'
import { useState } from 'react';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

import './App.scss'


const arr = [
  {
    id: 1,
    image: "./src/Users/Hayk/4Product/Images/1.jpg",
    title: "Process Step One",
    desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone, and feel the charm of existence in this spot, which was created for the bliss"
  },
  {
    id: 2,
    image: "./src/Users/Hayk/4Product/Images/2.jpg",
    title: "Process Step Two",
    desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone and feel the charm of existence in this spot, which was created for the bliss"
  },
  {
    id: 3,
    image: "./src/Users/Hayk/4Product/Images/3.jpg",
    title: "Process Step Three",
    desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss"
  },
  {
    id: 4,
    image: "./src/Users/Hayk/4Product/Images/4.jpg",
    title: "Process Step Four",
    desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss"
  },
]

export default function App() {
  const [datas, setDatas] = useState(arr)
  const [isOpen, setisOpen] = useState(false)
  const [productId, setProductId] = useState(null)

  const truncate = (desc, stubols) => {
    return desc.length > stubols ? desc.slice(0, desc.indexOf(" ", stubols)) + "..." : desc;
  }

  const toggleModel = () => {
    setisOpen(!isOpen)
  }

  const deleteById = (id) => {
    const result = datas.filter(data => data.id !== id)
    setDatas(result);
    toggleModel()
  }



  return (
    <div className="Datas">
      {
        datas.map(data => {
          return (
            <div className={classNames("Datas_item")} key={data.id}>
              <span className="xmark" onClick={() => {
                setProductId(data.id);
                toggleModel()
              }}>
                <FontAwesomeIcon icon={faCircleXmark} color="#fff" size="2x" />
              </span>
              <img src={data.image} alt="" />
              <h3 className={classNames("Datas_title")}>{data.title}</h3>
              <p className={classNames("Datas_desc")}>{truncate(data.desc, 100)}</p>
            </div>
          )
        })
      }
      {isOpen ? <Users toggleModel={toggleModel} datas={datas} >
        <button onClick={() => deleteById(productId)}>delete</button>
      </Users> : null}
    </div>
  )
}