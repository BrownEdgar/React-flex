import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCardAlt, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/card">
            <FontAwesomeIcon icon={faCreditCardAlt} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
