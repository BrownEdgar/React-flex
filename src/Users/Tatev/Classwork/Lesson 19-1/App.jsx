import { useEffect, useMemo, useState } from 'react';
import User from './User';
import './App.css';

const users = [
  {
    id: 1,
    name: 'Alice',
    age: 25
  },
  {
    id: 1987,
    name: 'Alice',
    age: 35
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
]

const App = () => {
  const [data, setData] = useState({
    original: users,
    filtered: users,
  });

  const [currentId, setCurrentId] = useState(null);
  const [value, setvalue] = useState(12)
  const [usernameValue, setUsernameValue] = useState('')

  const handleChange = (e) => {
    setvalue(e.target.value)
    if (currentId) {
      clearTimeout(currentId)
    }
    const sto = setTimeout(() => {
      console.log('sto filter...')
      setData({
        ...data,
        filtered: data.original.filter(elem => elem.age <= +e.target.value)
      })
    }, 200)
    setCurrentId(sto)
  }

  useEffect(() => {
    if (usernameValue) {
      setData({
        ...data,
        filtered: data.original.filter(elem => elem.name.toLowerCase() === usernameValue.toLowerCase())
      })
    }
  }, [usernameValue])


  const filteredUsers = useMemo(() => <User data={data.filtered} />, [data.filtered])
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username } = e.target;
    setUsernameValue(username.value)
  }
  return (
    <div className="container">
      <h1>Users</h1>
      <label>
        Age Range: {value}
        <input type="range" min={12} max={77} onChange={handleChange} />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='username' id='username' />
          <input type="submit" value="search" />
        </form>
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
          {filteredUsers}
        </tbody>
      </table>
    </div>
  );
};

export default App;
