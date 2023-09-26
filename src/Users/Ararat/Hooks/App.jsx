import React, { useReducer, useState } from 'react';
import axios from 'axios';
import './App.css';

const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload, actions: state.actions + 1 };
    case 'ADD_DEV':
      return { ...state, developers: [...state.developers, action.payload], actions: state.actions + 1 };
    case 'SHUFFLE_ARR':
      const result = [...state.arr].sort(() => Math.random() - 0.5);
      return { ...state, arr: result, actions: state.actions + 1 };
    case 'DELETE_POST':
      const selectPosts = [...state.posts];
      selectPosts.splice(action.payload, 1);
      return { ...state, posts: selectPosts, actions: state.actions + 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [devName, setDevName] = useState('');

  const handlePosts = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => {
        const newPosts = response.data.map((post, index) => (
          {
            ...post, id: state.arr[index],
          }));
        dispatch({ type: 'SET_POSTS', payload: newPosts });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDev = () => {
    dispatch({ type: 'ADD_DEV', payload: devName });
    setDevName('');
  };

  const handleShuffle = () => {
    dispatch({ type: 'SHUFFLE_ARR' });
  };

  const handleDeletePost = (index) => {
    dispatch({ type: 'DELETE_POST', payload: index });
  };

  return (
    <div className="container">
      <h1>Actions: {state.actions}</h1>
      <h1>Posts</h1>
      <button onClick={handlePosts}>Fetch Posts</button>
      <ul className="post-list">{state.posts.map((elem, index) => (
        <li key={elem.id}>{elem.title}
          <button onClick={() => handleDeletePost(index)} className="delete-post">x</button>
        </li>
      ))}
      </ul>
      <h1>Add a Developer</h1>
      <input type="text" placeholder="Enter name" value={devName} onChange={(e) => setDevName(e.target.value)} />
      <button onClick={handleDev}>Add Developer</button>
      <ul>{state.developers.map((dev, index) => (
        <li key={index}>{dev}</li>
      ))}
      </ul>
      <h1>Shuffle Array</h1>
      <button onClick={handleShuffle}>Shuffle Array</button>
      <ul>{state.arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;



