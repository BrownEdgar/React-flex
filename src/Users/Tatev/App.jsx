import './App.scss'
import Users from './Components/Users'
import axios from 'axios';
import { useState } from 'react';

export default function App() {
	const [users, setUsers] = useState(null)

	const getUsers =() =>{
		axios(import.meta.env.VITE_DB_URL)
		.then(res => res.data)
		.then(data => data.users)
		.then(users => setUsers(users))
	}
	
	return (
		<div className = "App">
			<h1>Users info</h1>
			<button onClick ={getUsers}>See Users</button>
			<Users users ={users}/>
		</div>
	)
}
