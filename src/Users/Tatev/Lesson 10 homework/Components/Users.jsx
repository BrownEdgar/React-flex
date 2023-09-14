import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import { useState } from 'react';
import Modal from "./Modal"
import "./Users.scss"


export default function Users({ datas, deleteById }) {

  const truncate = (desc, stubols) => {
    return desc.length > stubols ? desc.slice(0, desc.indexOf(" ", stubols)) + "..." : desc;
  }

  const [isDelete, setIsDelete] = useState(false)
  const [currentId, setcurrentId] = useState(null)
  const [currentImage, setCurrentImage] = useState(null)

  const toggleModal = () => {
    setIsDelete(!isDelete)
  }

  const deleteId = (id) => {
    setcurrentId(id)
  }

  const imageSrc = (img) => {
    setCurrentImage(img)
  }

  return (
    <div className={classNames("Datas")}>
      {
        datas.map(data => {
          return (
            <div className={classNames("Datas_item")} key={data.id}>
              <span className="xmark"
                onClick={() => {
                  toggleModal();
                  deleteId(data.id);
                  imageSrc(data.image)
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
      {isDelete ? <Modal title="Are you sure you want to delete this product?" toggleModal={toggleModal} withClose={false}>
        <img src={currentImage} alt="" className="Modal-img" />
        <button className="btn btn-yes Modal-btn"
          onClick={() => {
            deleteById(currentId);
            toggleModal()
          }}>
          Yes
        </button>
      </Modal> : null}
    </div>
  )
}


Users.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  })),
  deleteById: PropTypes.func
}