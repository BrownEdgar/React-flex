import React from 'react';
import { useSelector } from 'react-redux';

function YourComponent() {
  const users = useSelector((state) => state.user.users);
  const count = useSelector((state) => state.count.count);

  return (
    <div>
      <h2>User List</h2>
      <p>
        Total User Count: {count}
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Surname:</strong> {user.surname} <br />
            <strong>Age:</strong> {user.age} <br />
            <strong>Email:</strong> {user.email} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourComponent;

