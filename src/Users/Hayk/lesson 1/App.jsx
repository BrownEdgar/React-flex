// import axios from "axios";
import { useState } from "react";
import Users from "./components/Users";

export default function App() {
  const [information] = useState([
    {
      id: 1,
      image: "./src/Users/Hayk/Images/1.jpg",
      title: "Process Step One",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 2,
      image: "./src/Users/Hayk/Images/2.jpg",
      title: "Process Step Two",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 3,
      image: "./src/Users/Hayk/Images/3.jpg",
      title: "Process Step Three",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
    {
      id: 4,
      image: "./src/Users/Hayk/Images/4.jpg",
      title: "Process Step Four",
      desc: "I am alone, and feel the charm of existence in this spot, which was created for the bliss...",
    },
  ]);

  return (
    <div className="container">
      <Users information={information} />
    </div>
  );
}
