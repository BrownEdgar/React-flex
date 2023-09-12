import { useState } from "react";
import Users from "./components/Users";

const users = {
  id: 1,
  firt_name: "Sebastian",
  last_name: "Rogriges",
  addres: {
    street: "Halabyan",
    house: 54,
    city: "Yerevan",
  },
  age: 25,
  salary: 560_000,
  bestFriend: "Jhon",
};



export default function App() {
  const [information] = useState(users);

  return (
    <div className="container">
      <Users information={information} />
    </div>
  );
}
