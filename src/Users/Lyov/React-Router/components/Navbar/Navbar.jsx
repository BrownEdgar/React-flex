import ROUTES from '../../routes'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS}>Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
