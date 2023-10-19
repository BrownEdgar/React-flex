import { Link } from "react-router-dom"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/add">Add users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
