import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
	const [count, setCount] = useState(5)
	useEffect(() => {
		axios({
			baseURL: import.meta.VITE_DB_URL,
			url: '/posts',
		})
			.then(res => console.log(res))
	})

	return (
		<div>
			<h1>Edgar App</h1>
		</div>
	)
}
