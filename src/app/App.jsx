import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: '', surname: '', age: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleReg = () => {
    dispatch(addUser(user));
    setUser({ name: '', surname: '', age: '', email: '' });
  };

  return (
    <div>
      <input type = "text" name = "name" placeholder = "Name" value = {user.name} onChange = {handleChange}/>
      <input type = "text" name = "surname" placeholder = "Surname" value = {user.surname} onChange = {handleChange}/>
      <input type = "text" name = "age" placeholder = "Age" value = {user.age} onChange = {handleChange}/>
      <input type = "text" name = "email" placeholder = "Email" value = {user.email} onChange = {handleChange}/>
      <button onClick = {handleReg}>Register</button>
    </div>
  );
}

export default App;
