import React, { useState } from 'react';
import './About.css';

function About() {
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'User 1', 
      description: 'Description 1' 
    },
    { 
      id: 2, 
      name: 'User 2', 
      description: 'Description 2' 
    },
    { 
      id: 3, 
      name: 'User 3', 
      description: 'Description 3' 
    },
  ]);

  const [editUserForm, setEditUserForm] = useState(null);
  const [addUserForm, setAddUserForm] = useState(false);

  function deleteUser (id) {
    if (users.length == 1) {
      return;
    }
    setUsers(users.filter((user) => user.id !== id));
  };

  function editUser (user) {
    setEditUserForm(user);
  };

  function saveUser (user) {
    setUsers(users.map((elem) => (elem.id === user.id ? user : elem)));
    setEditUserForm(null);
  };

  function addUser () {
    setAddUserForm(true);
  };

  function handleClick () {

    const name = document.querySelector("#nameInput").value;
    const description = document.querySelector("#descriptionInput").value;

    if (name.trim() == "" || description.trim() == "") {
      alert("Please fill the fields.");
      return;
    }

    const id = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { id, name, description };

    setUsers([...users, newUser]);
    nameInput.value = "";
    descriptionInput.value = "";
    setAddUserForm(false);
  };

  return (
    <div className="about-container">
      <h1>About Page</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <span>Name: {user.name}</span>
            <span>Description: {user.description}</span>
            <div className="user-buttons">
              <button className="delete-button" onClick={() => deleteUser(user.id)} disabled={users.length === 1}>Delete</button>
              <button className="edit-button" onClick={() => editUser(user)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {addUserForm && (
        <div className="add-form">
          <h2>Add User</h2>
          <input type="text" id="nameInput" placeholder="Name" required />
          <input type="text" id="descriptionInput" placeholder="Description" required />
          <button className="add-button" onClick={handleClick}>Add</button>
        </div>
      )}

      {editUserForm && (
        <div className="edit-form">
          <h2>Edit User</h2>
          <input type="text" placeholder="Name" value={editUserForm.name}
            onChange={(e) => setEditUserForm({ ...editUserForm, name: e.target.value })} />
          <input type="text" placeholder="Description" value={editUserForm.description}
            onChange={(e) => setEditUserForm({ ...editUserForm, description: e.target.value })} />
          <button className="save-button" onClick={() => saveUser(editUserForm)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default About;
