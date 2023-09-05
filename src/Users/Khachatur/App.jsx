import axios from "axios";
import { useEffect, useState } from "react";
import Users from './Components/Users'
import './App.css'

export default function App() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios.get("https://dummyjson.com/users")
		.then((res) => {
			console.log(res.data.users);
			setUsers(res.data.users)
		})
	}, [])



	return (
		<div className="App">
			<h1>Khachatur App</h1>
			<Users users={users} />
		</div>
	)
}
