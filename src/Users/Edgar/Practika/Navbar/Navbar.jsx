import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/adduser'>Add user</Link>
        </li>
      </ul>
    </nav>
  )
}
