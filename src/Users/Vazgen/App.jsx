import axios from "axios";
import { useEffect, useState } from "react";
import Cars from './Components/Cars/Cars'
import './App.scss'
import classNames from "classnames";

const arr = [
  {
    id: 1,
		image: "https://wallpapers.com/images/hd/mercedes-gts-ctjb57m2mcmylkts.jpg",
		title: "Mercedes AMG GT Black Series",
		desc: "The Mercedes-AMG GT Black Series is a high-performance sports car that has garnered a lot of attention in the automotive world. It's a track-focused variant of the Mercedes-AMG GT lineup, known for its impressive power and aerodynamics. As a car enthusiast, you'll appreciate the following key features:1. **Powerful Engine**: The AMG GT Black Series is powered by a 4.0-liter twin-turbocharged V8 engine. It produces a staggering 720 horsepower, making it one of the most powerful production cars from Mercedes-AMG. 2. **Performance**: This car is designed for extreme performance on the track. It can accelerate from 0 to 60 mph in just around 3 seconds, and it has a top speed of over 200 mph."
	},
	{
		id: 2,
		image: "https://forum.mbenz.it/attachments/mercedes-sl-65-amg-black-series-jpg.199559/",
		title: "Mercedes AMG SL65 Black Series",
		desc: "Overall, the Mercedes-AMG SL65 is a blend of extreme performance and top-tier luxury, making it a fantastic choice for those who appreciate both speed and sophistication in their vehicles.Powerful Engine: The Mercedes-AMG SL65 is known for its remarkable performance, primarily thanks to its engine. It is equipped with a handcrafted 6.0-liter V12 biturbo engine. This powerplant produces an astonishing 621 horsepower and a massive 738 lb-ft of torque.Performance: With such a powerful engine, the SL65 can accelerate from 0 to 60 mph in just over 3 seconds."
	},
	{
		id: 3,
		image: "https://i.ytimg.com/vi/NNVKBZpagKY/maxresdefault.jpg",
		title: "Mercedes AMG SLS Black Series",
		desc: "The Mercedes-Benz SLS AMG Black Series is an iconic and high-performance sports car known for its exceptional power and aggressive styling. Here are some key details about this impressive machine:Powerful Engine: The SLS Black Series is equipped with a handcrafted 6.2-liter V8 engine. This naturally aspirated powerplant produces a remarkable 622 horsepower and 468 lb-ft of torque. It's known for its visceral and raw exhaust note.Performance: With its potent engine, the SLS Black Series can accelerate from 0 to 60 mph in just over 3 seconds, showcasing its blistering speed. It's capable of reaching a top speed of around 196 mph."
	},
	{
		id: 4,
		image: "https://cdn.motor1.com/images/mgl/VEg7z/s1/inden-design-mercedes-c63-amg-black-series-conversion.jpg",
		title: "Mercedes AMG C63 Black Series",
		desc: "The Mercedes-AMG C63 Black Series is a high-performance variant of the C63 AMG, known for its exceptional power and aggressive styling. Here are some key details about this impressive sports car:Powerful Engine: The heart of the C63 Black Series is its handcrafted 6.2-liter V8 engine. This naturally aspirated powerhouse generates a stunning 510 horsepower and 457 lb-ft of torque. It's celebrated for its raw and visceral exhaust note.Performance: With its robust engine, the C63 Black Series can accelerate from 0 to 60 mph in just over 4 seconds. It's a true driver's car, offering thrilling acceleration and impressive handling characteristics."
	},
]

export default function App() {
<<<<<<< HEAD
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios.get('https://dummyjson.com/users')
			.then((response) => {
				setUsers(response.data.users);
			})
	}, []);

	return (
		<div className="App">
			<h2 className="App_title">Users List</h2>
			<Users users={users} />
		</div>
	);
=======
  const [info, setInfo] = useState(arr)


  return (
  <div className = {classNames("App")}>
      <h2>Black Series (AMG)</h2>
      <br />
			<Cars info={info}/>
		</div>
  );
>>>>>>> 1c3b0b56aaa7a7c763accf5d8e1e235b43bc76c4
}
