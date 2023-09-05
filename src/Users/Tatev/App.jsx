import './App.scss'
import Users from './Components/Users'
import axios from 'axios';
import { useState } from 'react';

export default function App() {
	const [users, setUsers] = useState(null)
	console.log(import.meta.env.VITE_DB_URL)
	const getUsers = () => {
		axios(import.meta.env.VITE_DB_URL)
			.then(res => setUsers(res.data.users))

	}

	return (
		<div className="App">
			<h1>Users info</h1>
			<button onClick={getUsers}>See Users</button>
			<Users users={users} />
		</div>
	)
}
