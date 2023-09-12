import Child from "./Components/Child"
import { useState } from 'react';
import './App.scss'

const users = {
    id: 1,
    firt_name: "Sebastian",
    last_name: "Rogriges",
    addres: {
      street: "Halabyan",
      house: 54,
      city:"Yerevan"
    },
    age: 25,
    salary: 560_000,
    bestFriend: "Jhon",
  }

export default function App() {
    const [data] = useState(users)
  return (
    <div className="App">
        <Child data = {data}/>
    </div>
  )
}
