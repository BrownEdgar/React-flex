import { Link } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.BLOG}>Blog</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.ABOUT}>Apout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}