import { useDispatch } from "react-redux"
import "./Form.scss"
import { addUser } from "../../../../Class/Lesson_24/features/users/usersSlice"


export default function Form() {
  const dispatch = useDispatch()

  const handleSumbit =(e) =>{
    e.preventDefault()
    const [name, surName, age, email] = e.target
    const newUser ={
      name: name.value,
      surName: surName.value,
      age: +age.value,
      email: email.value
    }
    dispatch(addUser({newUser}))
    e.target.reset()
  }

  return (
    <div className="forms">
      <form className="forms-item" onSubmit={handleSumbit}>
        <h1>Add new user</h1>
        <input type="text" placeholder="Type your name" required/>
        <input type="text" placeholder="Type your surname" required/>
        <input type="age" placeholder="Type your age" min={18} max={100} required/>
        <input type="email" placeholder="Type your email" required/>
        <input type="submit" value = {"Add"} />
      </form>
    </div>
  )
}
