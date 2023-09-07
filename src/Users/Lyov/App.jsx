import axios from 'axios'
import { useState, useEffect } from 'react'
import Users from './Users/Users'

export default function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			baseURL: 'https://dummyjson.com',
			url: '/users',

		})
			.then(res => {
				setData(res.data.users)
			})
	}, [])
	
	return (
		<div>
			<Users data={data} />
		</div>
	)
}
