import { useReducer, useState } from "react"
import reducer, { initialState } from "./reducer"
import { AiFillCloseCircle } from 'react-icons/ai';
import "./App.scss"
import axios from "axios"


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [buttonBoolean, setButtonBoolean] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const drawUsers = () => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10
      }
    })
      .then(res => res.data)
      .then(data => {
        dispatch({ type: "add-posts", payload: { data: data } })
      })
    setButtonBoolean(!buttonBoolean)
  }

  const handelUser = () => {
    dispatch({ type: "add-users", payload: { inputValue: inputValue } })
    setInputValue("")
  }

  return (
    <div className="Container">
      <p>Actions: {state.actions}</p>
      {
        state.developers.length > 0
          ? (
            <p>Developers:
              {
                state.developers.toString()
              }
            </p>
          ) : null
      }
      <p> Arr:
        {
          state.arr.map((number, index) => {
            return (
              <span key={index}> {index === state.arr.length - 1 ? number : `${number}, `}</span>
            )
          })
        }
      </p>
      <ul>
      </ul>
      <button onClick={drawUsers} disabled={buttonBoolean}>Add posts</button>
      <input
        type="text"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handelUser}>Add name</button>
      <button onClick={() => dispatch({ type: "shuffle" })}>Shuffle</button>
      <button onClick={() => dispatch({ type: "replace-id-to-arrIndex" })}>Replace id to index</button>
      <div className="item">
        {
          state.posts.length > 0
            ? (
              state.posts.map(post => {
                return (
                  <div className="item-post" key={post.id}>
                    <span className="id">{post.id}</span>
                    <h1 className="item-title">{post.title}</h1>
                    <AiFillCloseCircle className="icon" onClick={() => dispatch({ type: "delete-post", payload: { id: post.id } })} />
                    <p className="item-body">{post.body}</p>
                  </div>
                )
              })
            ) : null
        }
      </div>
    </div>
  )
}
