import Users from './Components/Users'
import { useState } from 'react';
import classNames from 'classnames';
import './App.scss'


const arr =[
	{
		id: 1,
		image: "./src/Users/Tatev/Lesson 8 homework 1/Images/1.jpg",
		title: "Process Step One",
		desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone, and feel the charm of existence in this spot, which was created for the bliss"
	},
	{
		id: 2,
		image: "./src/Users/Tatev/Lesson 8 homework 1/Images/2.jpg",
		title: "Process Step Two",
		desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss I am alone and feel the charm of existence in this spot, which was created for the bliss"
	},
	{
		id: 3,
		image: "./src/Users/Tatev/Lesson 8 homework 1/Images/3.jpg",
		title: "Process Step Three",
		desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss"
	},
	{
		id: 4,
		image: "./src/Users/Tatev/Lesson 8 homework 1/Images/4.jpg",
		title: "Process Step Four",
		desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss"
	},
]

export default function App() {
	const [datas, setDatas] = useState(arr)
	
	const deleteById =(id) =>{
		const result = datas.filter(data => data.id !== id)
		setDatas(result)
	}

	

	return (
		<div className = {classNames("App")}>
			<Users datas={datas} deleteById={deleteById}/>
		</div>
	)
}
