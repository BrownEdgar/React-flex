import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import './Users3.css'

export default function Users3({ data, deleteId }) {
  return (
    <div className="dataId">
      {
        data.map(elem => {
          return(
            <div className="box" key={elem.id}>
              <span className="icon" onClick={() => deleteId(elem.id)}>
                <FontAwesomeIcon icon={faCircleXmark}/>
              </span>
              <img src={elem.image} alt=''/>
              <h2>{elem.title}</h2>
              <p>{elem.desc}</p>

            </div>
          )
        })
      }
    </div>
  )
}
