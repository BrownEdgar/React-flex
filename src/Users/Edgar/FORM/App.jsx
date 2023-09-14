import { useState } from 'react'
import './App.scss'

import { AiFillCloseSquare } from 'react-icons/ai'

export default function App() {
  const [message, setMessage] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0]

    if (!message.includes(value.toLowerCase())) {
      setMessage([...message, value.toLowerCase()]);
    } else {
      alert("alredy exist")
    }
    e.target.reset()
  }

  const deleteItemByIndex = (index) => {
    setMessage(message.toSpliced(index, 1))
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="submit" value="add" />
      </form>
      <hr />
      {
        message.length > 0
          ? (
            <ul>
              {
                message.map((elem, index) => <li
                  key={index}>{elem}
                  <AiFillCloseSquare onClick={() => deleteItemByIndex(index)} />
                </li>)
              }
            </ul>
          ) : <p className='empty'>no items yet!</p>
      }
    </div>
  )
}
