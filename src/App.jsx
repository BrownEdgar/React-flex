import {useDispatch, useSelector} from 'react-redux'
import { addUser, deleteUser } from './features/users/usersSlice'

export default function App() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteUser({name: 'Karen'}))
  }
  return (
    <div>
      <h1>React-flex</h1>
      <h2>{JSON.stringify(users, null, 1)}</h2>
      <button onClick={() => dispatch(addUser({name: 'Valod'}))}>Add User</button>
      <button onClick={handleDelete}>Delete Karen</button>
    </div>
  )
}

