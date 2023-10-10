import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './features/users/usersSlice'
import Todos from './comnponents/Todos';

export default function App() {
  const users = useSelector((state) => state.users)
  const dispath = useDispatch();

  const handleDelete = () => {
    dispath(deleteUser({ name: "Karen" }))
  }
  return (
    <div>
      <h1>React-flex</h1>
      <h2> {JSON.stringify(users, null, 1)}</h2>
      <button onClick={() => dispath(addUser({ name: "Valod" }))}>add user</button>
      <button onClick={handleDelete}>delete Karen</button>
      <hr />
      <Todos />
    </div>
  )
}

