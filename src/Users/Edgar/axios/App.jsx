import axios from 'axios';
import { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/posts')
		.then(res => console.log(res))
	})

	return (
		<div>
			<h1>Vazgen App</h1>
		</div>
	)
}
