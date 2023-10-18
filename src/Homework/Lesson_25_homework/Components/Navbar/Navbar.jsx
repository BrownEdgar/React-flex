import { Link } from 'react-router-dom'
import { BsFillBasket2Fill } from 'react-icons/bs'
import "./Navbar.scss"


export default function Navbar({localLength}) {
  return (
    <header>
    <nav>
    <ul>
        <li>
          <Link to = "/">Shop</Link>
        </li>
      </ul>
      <ul>
        <li className='relative'>
          <Link to = "card"><BsFillBasket2Fill /></Link>
          <span>{localLength}</span>
        </li>
      </ul>
    </nav>
  </header>
  )
}
