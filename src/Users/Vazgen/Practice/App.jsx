import { useState } from "react";
import Users from "./Users/Users";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Layouts from "./Layouts/Layouts";
import CreateUser from "./CreateUser/CreateUser";
import EditUser from "./EditUser/EditUser";
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      full_name: "Lewis Hamilton",
      about:
        "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes. In Formula One, Hamilton has won a joint-record seven World Drivers Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (104), and podium finishes (196), among others.",
      email: "teamlh@lewishamilton.com",
    },
    {
      id: 2,
      full_name: "Max Verstappen",
      about:
        "Max Emilian Verstappen born 30 September 1997) is a Belgian-Dutch racing driver and the 2021, 2022, and 2023 Formula One World Champion. He competes under the Dutch flag in Formula One with Red Bull Racing.Verstappen is the son of racing driver Jos Verstappen, who also competed in Formula One, and Sophie Kumpen. He had a successful run in junior karting and single-seater categories including KF3, WSK World Series, KZ2 and European Formula 3 beating several records",
      email: "teamrb@verstappen.com",
    },
    {
      id: 3,
      full_name: "Sharl Leclerc",
      about:
        "Charles Marc Hervé Perceval Leclerc (French pronunciation: [ʃaʁl ləklɛʁ]; born 16 October 1997) is a Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari. He won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017.Leclerc made his Formula One debut in 2018 for Sauber, a team affiliated with Ferrari, for which he was part of the Ferrari Driver Academy.",
      email: "teamferrari@leclerc.com",
    },
  ]);
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, about } = e.target;
    const user = {
      id: uuidv4(),
      full_name: full_name.value,
      email: email.value,
      about: about.value,
      created_at: Date.now(),
    };
    setUsers([...users, user]);
    e.target.reset();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route
          path="about"
          element={<Users data={users} deleteID={deleteUser} />}
        />
        <Route
          path="/adduser"
          element={<CreateUser handleSubmit={handleSubmit} />}
        />
        <Route
          path="/edituser/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
