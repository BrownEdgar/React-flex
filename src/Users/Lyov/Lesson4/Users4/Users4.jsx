import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from '../Modal/Modal'


import './Users4.css'

export default function Users4({ data, deleteId, }) {
  const [id, setID] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const onDeleteButton = (id) => {
    setID(id)
    setIsOpen(!isOpen)

  }


  return (
    <div className="dataId">
      {
        data.map(elem => {
          return (
            <div className="box" key={elem.id}>
              <span className="icon" onClick={() => onDeleteButton(elem.id) }>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
              <img src={elem.image} alt='' />
              <h2>{elem.title}</h2>
              <p>{elem.desc}</p>
            </div>
          )
        })
      }
      {isOpen ? <Modal data={data} deleteId={deleteId} id={id} onDeleteButton={onDeleteButton} /> : null}
    </div>
  )
}
