import React, { useState } from 'react';
import User from './User';
import './App.css';

const App = () => {
  const [users] = useState([
    { 
      id: 1, 
      name: 'Alice', 
      age: 25 
    },
    { 
      id: 2, 
      name: 'Bob', 
      age: 40 
    },
    { 
      id: 3, 
      name: 'Charlie', 
      age: 78 
    },
    { 
      id: 4, 
      name: 'David', 
      age: 75 
    },
    { 
      id: 5, 
      name: 'Eva', 
      age: 28 
    },
    { 
      id: 6, 
      name: 'Frank', 
      age: 57 
    },
    { 
      id: 7, 
      name: 'Grace', 
      age: 21 
    },
    { 
      id: 8, 
      name: 'Hannah', 
      age: 36 
    },
    { 
      id: 9, 
      name: 'Ian', 
      age: 29 
    },
    { 
      id: 10, 
      name: 'Jack', 
      age: 69 
    },
    { 
      id: 11, 
      name: 'Katie', 
      age: 31 
    },
    { 
      id: 12, 
      name: 'Liam', 
      age: 27 
    },
    { 
      id: 13, 
      name: 'Mia', 
      age: 19 
    },
    { 
      id: 14, 
      name: 'Nathan', 
      age: 38 
    },
    { 
      id: 15, 
      name: 'Olivia', 
      age: 24 
    },
    { 
      id: 16, 
      name: 'Peter', 
      age: 77 
    },
    { 
      id: 17, 
      name: 'Quinn', 
      age: 26 
    },
    { 
      id: 18, 
      name: 'Rachel', 
      age: 12 
    },
    { 
      id: 19, 
      name: 'Samuel', 
      age: 35 
    },
    { 
      id: 20, 
      name: 'Tara', 
      age: 76 
    },
    { 
      id: 21, 
      name: 'Ulysses', 
      age: 41 
    },
    { 
      id: 22, 
      name: 'Victoria', 
      age: 20 
    },
    { 
      id: 23, 
      name: 'William', 
      age: 39 
    },
    { 
      id: 24, 
      name: 'Xander', 
      age: 74 
    },
    { 
      id: 25, 
      name: 'Yasmine', 
      age: 42 
    },
    { 
      id: 26, 
      name: 'Zoe', 
      age: 58 
    },
    { 
      id: 27, 
      name: 'Ethan', 
      age: 44 
    },
    { 
      id: 28, 
      name: 'Greg', 
      age: 68 
    },
    { 
      id: 29, 
      name: 'Swen', 
      age: 63 
    },
    { 
      id: 30, 
      name: 'Olaf', 
      age: 71 
    },
  ]);



const [makeFilter, setMakeFilter] = useState({ min: 12, max: 77 });

  const result = users.filter(
    (user) => user.age >= makeFilter.min && user.age <= makeFilter.max
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMakeFilter({...makeFilter,[name]: parseInt(value, 10),
    });
  };

return (
    <div className="container">
      <h1>Users</h1>
      <label>
        Age Range:
        <input type="range" name="min" value={makeFilter.min} min={12} max={77} onChange={handleChange}
        />{makeFilter.min} - {makeFilter.max}
      </label>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
