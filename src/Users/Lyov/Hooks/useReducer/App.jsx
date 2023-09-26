import { useReducer } from 'react'
import reducer, { initialState } from './reducer'



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <button onClick={() => dispatch({ type: 'sort-by-name'})}>Sort By Name</button>
      <h1 style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(state, null, 1)}
      </h1>
      <button onClick={() => dispatch({ type: 'delete-user', payload: { userid: 3 } })}>Delete-user</button>
      {/* <button onClick={()=> dispatch({type:'minus'})}>Minus count</button>
      <button onClick={()=> dispatch({type:'reset'})}>reset</button> */}
    </div>
  )
}
