import { useEffect, useState } from 'react';
import axios from 'axios';

function App () {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get('https://dummyjson.com/users');
		.then(res => {
			setInfo(res.data);
		})
		.catch(err => {
			console.log(err);
		})
	}, [])

	return (

		<div className = 'App'> 
			<h1>User List</h1>
      		<ul>
        		{users.map(user => (
          		<li key={user.id}>{user.name}</li>
        	))}
      		</ul>
		</div>
		)

}
export default App;
