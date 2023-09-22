import { useState } from 'react'
import './App.scss'

import { AiFillCloseSquare } from 'react-icons/ai'

export default function App() {
  const [message, setMessage] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0]

    if (!message.includes(value.toLowerCase())) {
      setMessage([...message, value.toLowerCase()])
    } else {
      alert('Alredy exist ')
    }
    e.target.reset()
  }

  const deletItemByIndex = (index) => {
    setMessage(message.toSpliced(index, 1))
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="submit" value='Add' />
      </form>
      {
        message.length > 0
          ? (
            <ul>
              {
                message.map((elem, index) => <li key={index}>
                  {elem}
                  <AiFillCloseSquare
                    onClick={() => deletItemByIndex(index)}
                  />
                </li>)
              }
            </ul>

          ) : <p className='empty'>No Items yet!</p>
      }
    </div>
  )
}
