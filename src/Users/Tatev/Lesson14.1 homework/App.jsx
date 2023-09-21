import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import "./App.scss"

export default function App() {
  const [passwords] = useState(["Abfs45", "djdhshj145", "dshdjsa45", "saddee7", "fefsfs5487", "vnmkblg47892", "ijfkg563", "gkoejg56", "jfhjgr54", "ksojf", "hjdfhjdf7889", "jueopl45"])
  const [currentIndex, setCurrentIndex] = useState(null)

  const seePassword = (index) =>{
    setCurrentIndex(index)
  }

  return (
    <div className="Container">
      <ul>
        {
          passwords.map((password, index) => {
            return(
              <li key={index} >
                <span onClick={() => seePassword(index)}>
                  {
                    currentIndex === index ?
                    password :
                    "*".repeat(10)
                  } 
                </span>
                <span>
                  {
                    currentIndex === index ?
                    <AiFillEyeInvisible className="icon" onClick={() => seePassword(null)}/> :
                    <AiFillEye className="icon" onClick={() => seePassword(index)}/>
                  }
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
