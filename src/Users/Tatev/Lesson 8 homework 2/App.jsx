import { HiOutlineLocationMarker } from "react-icons/hi"
import { AiOutlineFolder } from "react-icons/ai"
import { AiOutlineIdcard } from "react-icons/ai"
import { BiCalendar } from "react-icons/bi"
import './App.scss'

const data=new Date(2022, 10, 28)

export default function App() {


	return (
		<div className = "App">
			<h1 className="App_title">2023 Intern - Software Engineer (Java or JavaScript)</h1>
			<div className="info">
				<span><HiOutlineLocationMarker className ="icon-location"/> Yerevan, Armenia</span>
				<span><AiOutlineFolder className ="icon-folder"/> Other</span>
				<span><AiOutlineIdcard/> R134783</span>
				<span><BiCalendar/> {data.toLocaleDateString()}</span>
			</div>
			<button className="btn_save">Save Job</button>
			<button className="btn_apply">Apply now</button>
		</div>
	)
}
