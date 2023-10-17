import { useDispatch, useSelector } from "react-redux"
import { addUser, getUsers } from "./features/users/usersSlice";
import { increment, selectCount } from './features/countSlice/countSlice';
import "./App.scss";


export default function App() {
  const dispatch = useDispatch()
  const count = useSelector(selectCount);
  const users = useSelector(getUsers)

  const handleSubmit = (e) => {
    e.preventDefault()
    const [name, surname, age, email] = e.target
    const person = {
      name: name.value,
      surname: surname.value,
      age: +age.value,
      email: email.value
    }
    dispatch(addUser({person}))
    dispatch(increment());
  }

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <form className="App-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required/>
        <input type="text" placeholder="Surname" required/>
        <input type="number" placeholder="age" min={18} max={100} required/>
        <input type="email" placeholder="EMail" required/>
        <input type="submit" value={"Add"} />
      </form>
      <div className="App-container">
        {
          users.map(user => {
            return (
              <div key={user.id} className="App-item">
                <h3>Name: {user.name} {user.surname}</h3>
                <span>Age: {user.age}</span>
                <p>{user.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

