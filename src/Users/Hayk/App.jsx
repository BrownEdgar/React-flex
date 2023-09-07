// import axios from "axios";
import { useState } from "react";
import Users from "./components/Users";

export default function App() {
<<<<<<< HEAD
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/users", {
			params: {
				limit:5,
				skip:6
			}
		})
      .then((res) => res.data.users)
      .then((user) => setuser(user));
  });
=======
  const [information] = useState([
    {
      id: 1,
      image: "./src/Users/Hayk/Images/1.jpg",
      title: "Process Step One",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 2,
      image: "./src/Users/Tatev/Images/2.jpg",
      title: "Process Step Two",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 3,
      image: "./src/Users/Tatev/Images/3.jpg",
      title: "Process Step Three",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 4,
      image: "./src/Users/Tatev/Images/4.jpg",
      title: "Process Step Four",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
  ]);
>>>>>>> 1c3b0b56aaa7a7c763accf5d8e1e235b43bc76c4

  return (
    <div className="container">
      <Users information={information} />
    </div>
  );
}
