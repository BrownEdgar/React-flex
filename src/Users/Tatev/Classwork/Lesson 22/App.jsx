import { useDispatch, useSelector } from "react-redux"
import Todos from "./Components/Todos"
import { addUser, deleteUser } from "./feauters/users/usersSlice"


export default function App() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{JSON.stringify(users, null, 1)}</h1>
      <button onClick = {() => dispatch(addUser({name: "Valod"}))}>Add user</button>
      <button onClick = {() => dispatch(deleteUser({name: "Valod"}))}>Delete.user</button>
      <hr />
      <Todos />
    </div>
  )
}
