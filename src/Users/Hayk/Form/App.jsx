import { useState } from 'react'
import {AiFillCloseSquare} from "react-icons/ai"
import './App.scss'


export default function App() { 
  const [messege, setmessege] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {value} = e.target[0]
    if(!messege.includes(value.toLowerCase()) ){
      setmessege([...messege,value.toLowerCase()])
    }else{
    alert("alreadty exist")
    }
    e.target.reset()
  }
  const deleteIdIndex = (index) =>{
    setmessege(messege.toSpliced(index,1))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" required/>
        <input type="submit" />
      </form>
     {
      messege.length > 0
     ? (
      
        <ul>
          {
          messege.map((elem,index) => 
          <li key={index}>{elem} 
          <AiFillCloseSquare onClick={() => deleteIdIndex(index)}/>
          </li>)
          }
        </ul>
       ): <p>no items yet</p>
     }
    </div>
  )
} 
