import { useState } from "react";
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [passwd, setPasswd] = useState(['asdw123d', 'aswe4321', 'afwef21ds!', '123Afd2'])
  const [showPasswd, setShowPasswd] = useState(null)

  const showPassword = (index) => {
    setShowPasswd(index)
  }
  return (
    <div className="container">
      {
        passwd.map((elem, index) => {
          return (
            <ul key={index}>
              <li onClick={() => showPassword(elem.indexOf(index))}>
                {showPasswd === elem.indexOf(index) ? elem : "*".repeat(10)}
                {showPasswd === elem.indexOf(index) ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </li>
              <hr />
            </ul>
          )
        })
      }
    </div>
  )

}