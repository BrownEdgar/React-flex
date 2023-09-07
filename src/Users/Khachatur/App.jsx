import { useState } from "react";
import Users from './Components/Users'
import './App.scss'
import classNames from "classnames";

const arr = [
	{
		id:1,
		image: "https://media.alaskapublic.org/wp-content/uploads/2020/04/step1.png",
		title: "Process Step One",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, mollitia minus consectetur cum repellat soluta."
	},
	{
		id:2,
		image: "https://media.alaskapublic.org/wp-content/uploads/2020/04/step2.png",
		title: "Process Step Two",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod nihil, eos odio quibusdam iure."
	},
	{
		id:3,
		image: "https://media.alaskapublic.org/wp-content/uploads/2020/04/step3.png",
		title: "Process Step Three",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum."
	},
	{
		id:4,
		image: "https://media.alaskapublic.org/wp-content/uploads/2020/04/step4.png",
		title: "Process Step Four",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, consequuntur natus! Animi consequatur quia quos."
	}
]

export default function App() {
	const [steps, setSteps] = useState(arr)

	return (
		<div className={classNames("App")}>
			<Users steps={steps} />
		</div>
	)
}
