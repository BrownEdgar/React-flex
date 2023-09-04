import axios from "axios";
import { useEffect, useState } from "react";
import Users from './Components/Users/Users'
import './App.css'

export default function App() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios.get("https://dummyjson.com/users")
		.then((res) => setUsers(res.data.users))
	})



	return (
		<div className="App">
			<h1>Khachatur App</h1>
			<Users users={users} />
		</div>
	)
}
