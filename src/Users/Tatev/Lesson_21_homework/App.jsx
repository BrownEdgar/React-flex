import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import "./App.scss"
import Users from './Components/Users';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layouts from './Layouts/Layouts';
import Form from './Form/Form';
import Edit from './Edit/Edit';

export default function App() {
  const [users, setUsers] = useState([
      {
          id: uuidv4(),
          full_name: "John",
          about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quis eveniet cum. Sed cum necessitatibus magni inventore excepturi perferendis nobis, qui architecto similique pariatur dolores distinctio deserunt explicabo rem maiores. Laborum distinctio non, quos autem obcaecati alias voluptatibus optio odit. Fugit a iure quisquam modi distinctio veritatis harum consequuntur fugiat?",
          email: "john@mail.ru",
      },
      {
          id: uuidv4(),
          full_name: "Tatev",
          about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur tenetur minus dicta maxime sunt praesentium. Voluptas minus illum qui!",
          email: "tatev@mail.ru",
      },
      {
          id: uuidv4(),
          full_name: "Jesica",
          about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.",
          email: "Jesica@mail.ru",
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
      created_at: Date.now(),
    };
    setUsers([...users, user]);
    e.target.reset();
  };

  const deleteItem = (id) => {
    if(users.length > 1 ){
      const reult = users.filter(elem => elem.id !== id)
      setUsers(reult);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="about" element={<Users data={users} deleteItem={deleteItem} />}/>
        <Route path="add" element={<Form handleSubmit={handleSubmit} />}/>
        <Route path="about/:id" element={<Edit users={users} setUsers={setUsers}/>}/>
      </Route>
    )
  );

  return (
      <div className="App">
        <RouterProvider router ={router} />
      </div>
  );
}
