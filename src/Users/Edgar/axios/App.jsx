import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import "./App.css"

const arr = ["users", "posts", 'todos']

export default function App() {
	const [currentIndex, setCurrentIndex] = useState(null)
	const [data, setData] = useState([])

	useEffect(() => {
		console.log(1)
		if (currentIndex !== null) {
			axios({
				method: "get",
				baseURL: 'https://jsonplaceholder.typicode.com/',
				url: 'users'
			})
			.then(res => setData(res.data))
			.catch(err => console.log(err))
		}
	}, [currentIndex])


	const handleClick = (index) => {
		setCurrentIndex(index)
	}
	return (
		<div className='container'>
			<div className="buttons">
				{
					arr.map((elem, index) => {
						return <button
							key={elem}
							className={classNames("btn", {
								active: currentIndex === index,
							})}
							onClick={() => handleClick(index)}
						>
							{elem}
						</button>
					})
				}
			</div>
			<p>
				{
					JSON.stringify(data, null, 1)
				}
			</p>
		</div>
	)
}
