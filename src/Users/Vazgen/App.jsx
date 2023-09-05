import axios from "axios";
import { useEffect, useState } from "react";
import Users from './Components/Users/Users'
import './App.scss'

export default function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios.get('https://dummyjson.com/users')
			.then((response) => {
				setUsers(response.data.users);
			})
	}, []);

	return (
		<div className="App">
			<h2 className="App_title">Users List</h2>
			<Users users={users} />
		</div>
	);
}
