import { useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'
import axios from 'axios'
import { AiFillCloseSquare } from 'react-icons/ai'
import "./App.scss"
import { ADD_DEV, CHANGE_ID, DELETE_POST, SHOW_POSTS, SORT_POSTS } from './actionTypes'



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [disableButton] = useState(false);
  const [inputValue, setInputValue] = useState("");


  const showPosts = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: SHOW_POSTS, payload: { data: data } });
      });
  }

  const addDev = () => {
    dispatch({ type: ADD_DEV, payload: { inputValue: inputValue } });
    setInputValue("")
  }

  return (
    <div className='Container'>
      <div className='Container__items'>
        <p>Actions: {state.actions}</p>
        {state.developers.length > 0 ? (
          <p>Devs: {" "}
            {state.developers.map((dev, index) => {
              return <span key={index}>{dev}</span>
            })}</p>
        ) : null}
        <button onClick={showPosts} disabled={disableButton}>Show Posts</button>
        <input
          className="Container__addtext"
          type="text"
          placeholder="Enter name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addDev}>Add dev</button>
        <button onClick={() => dispatch({ type: SORT_POSTS })}>Sort Array</button>
        <button onClick={() => dispatch({ type: CHANGE_ID })}>Change ID</button>
        <div className="item"></div>
      </div>
      <div className='Container__posts'>
        {state.posts.length > 0 ?
          state.posts.map((post) => {
            return (
              <div className="Container__posts-item" key={post.id}>
                <h1 className='Container__posts-id'>{post.id}</h1>
                <h3 className='Container__posts-title'>{post.title}</h3>
                <button className="Container__posts-icon"
                  onClick={() => dispatch({ type: DELETE_POST, payload: `${post.id}` })}>
                  <AiFillCloseSquare />
                </button>
                <p className="Container__post-body">{post.body}</p>
              </div>
            )
          })
          : null}
      </div>
    </div>
  )
}
