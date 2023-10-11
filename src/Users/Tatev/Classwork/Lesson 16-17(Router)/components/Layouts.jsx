import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {

  console.log(111)
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  )
}
