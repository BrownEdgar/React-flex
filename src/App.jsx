import {useDispatch, useSelector} from 'react-redux'
import { addUser, selectAllUsers } from './features/users/usersSlice'
import './App.css'


export default function App() {
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()

const handleSubmit = (e) => {
  e.preventDefault();
  const [fullName, age, imageUrl] = e.target;
  const person = {
    fullName: fullName.value,
    age: age.value,
    image: imageUrl.value
  }
  dispatch(addUser({person}))
}

  return (
    <div className='App'>
      <form autoComplete='off' className='App-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Actors FullName' required/>
        <input type="number" placeholder='Age' min={18} max={100} required/>
        <input type="url" placeholder='Paste image url here' required/>
        <input type="submit" value={'add'} />
      </form>
      <div className='App-container'>
        {
          users.map(elem => {
            return (
              <div key={elem.id} className='App-item'>
                <div>
                <span id='actore_id'>{elem.id}</span>
                 <h3>{elem.fullName}</h3>
                 <span>Age: {elem.age}</span>
                </div>
                <img src={elem.image} alt={elem.id} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
