import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./feautures/products/productsSlice"
import { addUser, selectAllUsers } from "./feautures/useres/usersSlice"
import './App.css'

export default function App() {
  const users = useSelector(selectAllUsers)
  const dispach = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const [ fullName, age, image ] = e.target
    
    const person = {
      fullName: fullName.value,
      age: +age.value,
      image: image.value,
    }
    dispach(addUser({person}))
  }

  return (
    <div className="App">
      <form autoComplete="off" className="App-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="actors full ame" required />
        <input type="number" placeholder="age" min={18} max={100} required />
        <input type="url" required />
        <input type="submit" value={'Add'} />
      </form>
      <div className="App-container">
        {
          users.map(elem => {
            return (
              <div key={elem.id} className="App-item">
                <div>
                <span id="actor_id">{elem.id}</span>
                <h3>{elem.fullName}</h3>
                <span>age: {elem.age}</span>
                </div>
                <img src={elem.image}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}