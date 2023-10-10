import { useState } from 'react'
import Users from './Users/Users'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import './App.scss'
import Form from './Form/Form'
import { v4 as uuidv4 } from 'uuid'



export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      full_name: 'Jhon',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet magnam quisquam magni aperiam vero! Illum iusto laboriosam enim? Error!',
      email: 'jhonExample@gmail.com'
    },
    {
      id: 2,
      full_name: 'Sebastian',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet magnam quisquam magni aperiam vero! Illum iusto laboriosam enim? Error!',
      email: 'jhonExample@gmail.com'
    },
    {
      id: 3,
      full_name: 'Spartak',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet magnam quisquam magni aperiam vero! Illum iusto laboriosam enim? Error!',
      email: 'jhonExample@gmail.com'
    }

  ])


  const HandleSubmit = (e) => {
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
    e.targer.reset()
    
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      <Route index element={<h1></h1>} />
      <Route path='About' element={<Users data={users} />}/>
      <Route path='/Adduser' element={<Form HandleSubmit={HandleSubmit}/>}/>
    </Route>
  )
)

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}
