import { useState } from 'react'
import Users from './Components/Users'
import original from './users.json'

import "./App.scss"
const minAge = (users = {}) => {
  let min = Infinity
  users?.original?.map(user => {
    if (min > user.age) {
      min = user.age
    }
  })
  return min
}
export default function App() {
  const [users, setUsers] = useState({ original: original, filtered: original })
  const [currentId, setCurrentId] = useState(null)
  const [age, setAge] = useState(minAge(users))

  const maxAge = () => {
    let max = -Infinity
    users.original.map(user => {
      if (max < user.age) {
        max = user.age
      }
    })
    return max
  }

  const handleChange = (e) => {
    setAge(+ e.target.value)
    if (currentId) {
      clearTimeout(currentId)
    }
    const interval = setTimeout(() => {
      setUsers({
        ...users,
        filtered: users.original.filter(user => user.age <= + e.target.value)
      })
    }, 1000);
    setCurrentId(interval)
  }

  return (
    <div className='Container'>
      <h1>{age}</h1>
      <input
        type="range"
        name="age"
        id="age"
        min={minAge()}
        max={maxAge()}
        value={age}
        onChange={handleChange} />
      <Users users={users} />
    </div>
  )
}
