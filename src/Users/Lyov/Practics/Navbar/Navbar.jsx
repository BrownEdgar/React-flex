import './Navbar.scss'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Adduser'>Add User</Link>
        </li>
      </ul>
    </nav>
  )
}
