import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./components/Users";

export default function App() {
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

  return (
    <div>
      <Users users={user} />
    </div>
  );
}
