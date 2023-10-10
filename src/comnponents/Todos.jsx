
import { useSelector } from 'react-redux'

export default function Todos() {
  const todos = useSelector((state) => state.todos)
  return (
    <div>
      <h1>
        {JSON.stringify(todos, null, 1)}
      </h1>
    </div>
  )
}
