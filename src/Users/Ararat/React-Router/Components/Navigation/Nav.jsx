import { Link } from 'react-router-dom'
import './Nav.css'
import ROUTES from '../../routes'

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SERVICE}>Service</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation