import { useEffect,useState} from 'react'
import Users from './Components/Users'

const Arr = [
	{
		id:1,
		imgData: './src/Users/Davit/Images/1.jpg',
		header:"accusamus beatae ",
		title:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, repudiandae!',
},
{
	id:2,
		imgData: './src/Users/Davit/Images/2.jpg',
		header: "reprehenderit ",
		title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae a dolorum delectus quibusdam ab?',
},
{
	id:3,
		imgData: './src/Users/Davit/Images/3.jpg',
		header: "officia porro ",
		title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti facilis doloribus distinctio veniam aspernatur?',
},
{
	id:4,
		imgData: './src/Users/Davit/Images/4.jpg',
		header: "culpa odio",
		title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus soluta optio praesentium, deleniti quia quae veniam harum aspernatur ab?',
},
]
export default function App() {
	const [Data, setData] = useState(Arr)
		
	return (
		<div>
			<Users Data={Data}/>
		</div>
	)
}
