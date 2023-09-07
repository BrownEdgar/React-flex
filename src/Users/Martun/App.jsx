import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import classNames from 'classnames'
import Users from './Components/Users'

export default function App() {
	
	const [posts, setPost] = useState([
		{
			id: 1, 
			image: 'https://images.unsplash.com/photo-1611434597131-949cdb202148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
			title: 'Old TV',
			apoutPhotograph: 'Test shot for short film. Static tv in an industry warehouse type setting. Brick wall. Follow me on Insta @zvessels55',
		},
		{
			id: 2, 
			image: 'https://images.unsplash.com/photo-1497491908353-c2624b242ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
			title: 'Sad Face',
			apoutPhotograph: 'I have looked at my father, at different moments in my life. Whether it was when I was coming home from military leave or it was just me coming home from school..',
		},
		{
			id: 3, 
			image: 'https://images.unsplash.com/photo-1571840615922-50fb24649d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2115&q=80',
			title: 'Bombed City WW1',
			apoutPhotograph: 'Damaged City of Lille, During German Occupation, World War I, 1916',
		},
		{
			id: 4, 
			image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
			title: 'Bombed City WW1',
			apoutPhotograph: '1972 Ford Mustang Mach 1',
		},
	])


	return (
		<div className='container'>
			<Users posts={posts}/>
		</div>
		)
}

