import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Users from './Components/Users'
import reducer, { initialState } from './script';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios(
      {
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        params: {
          _limit: 10
        }
      },
    )
    .then((res) => {
        setPosts(res.data);
      })
  }, []);

  return (
    <div>
      <input type="text" placeholder='Name' />
      <button onClick={() => dispatch({type: 'Add-name'})}>Add Name</button>
      <button onClick={() => dispatch({type:'Add', payload:posts})}>Add Posts</button>
      <h1 style={{whiteSpace:'pre'}}>
        {JSON.stringify(state, null, 1)}
      </h1>
      <Users posts={posts} />
    </div>
  );
}

