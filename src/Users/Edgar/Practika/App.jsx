import { useState } from 'react'
import Users from './Users/Users';
import { v4 as uuidv4 } from 'uuid';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate
} from 'react-router-dom'

import "./App.scss"
import Layouts from './Layouts/Layouts';
import Form from './Form/Form';

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      full_name: "John Smith",
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint deleniti iste officiis quis omnis beatae commodi veniam quo soluta eius non praesentium consectetur harum atque laboriosam adipisci, deserunt corrupti. Esse, quisquam. Commodi, sapiente.',
      email: 'johnExample@gmail.com'
    },
    {
      id: 2,
      full_name: "John Smith",
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint deleniti iste officiis quis omnis beatae commodi veniam quo soluta eius non praesentium consectetur harum atque laboriosam adipisci, deserunt corrupti. Esse, quisquam. Commodi, sapiente.',
      email: 'johnExample@gmail.com'
    },
    {
      id: 3,
      full_name: "John Smith",
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint deleniti iste officiis quis omnis beatae commodi veniam quo soluta eius non praesentium consectetur harum atque laboriosam adipisci, deserunt corrupti. Esse, quisquam. Commodi, sapiente.',
      email: 'johnExample@gmail.com'
    },
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, description } = e.target;
    const user = {
      id: uuidv4(),
      full_name: full_name.value,
      email: email.value,
      about: description.value,
      created_at: Date.now()
    }
    setUsers([...users, user])
    e.target.reset()

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path='about' element={<Users data={users} />} />
        <Route path='/adduser' element={<Form handleSubmit={handleSubmit} />} />
      </Route>
    )
  )


  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
