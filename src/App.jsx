
import { useDispatch, useSelector } from 'react-redux'
import { addUser, selectAllUsers } from './features/users/usersSlice';

import './App.css'
import { increment } from './features/todos/todosSlice';

export default function App() {
  const users = useSelector(selectAllUsers);
  const todos = useSelector((state) => state.todos);
  const dispath = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [fullName, age, imageUrl] = e.target;
    const person = {
      fullName: fullName.value,
      age: +age.value,
      image: imageUrl.value,
    }
    dispath(addUser({ person }))
  }




  return (
    <div className='App'>
      <pre>
        {JSON.stringify(todos, null, 1)}
      </pre>
      <button onClick={() => dispath(increment())}>increment</button>
      <form autoComplete='off' className='App-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='actors full name' required />
        <input type="number" placeholder='age' min={18} max={100} required />
        <input type="url" required placeholder='paste image url here' />
        <input type="submit" value={'add'} />
      </form>
      <div className="App-container">
        {
          users.map(elem => {
            return (
              <div key={elem.id} className='App-item'>
                <div>
                  <span id='actor_id'>{elem.id}</span>
                  <h3>{elem.fullName}</h3>
                  <span>age: {elem.age}</span>
                </div>
                <img src={elem.image} alt={elem.fullName} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

