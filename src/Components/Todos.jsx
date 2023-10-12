import { useDispatch, useSelector } from "react-redux"
import { deleteArr } from "../feauters/todos/todosSlice"


export default function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{JSON.stringify(todos, null, 1)}</h1>
      <button onClick={() => dispatch(deleteArr())}>Delete arr</button>
    </div>
  )
}
