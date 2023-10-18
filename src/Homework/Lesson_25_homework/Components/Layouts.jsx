import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar"

export default function Layouts({localLength}) {
  return (
    <div>
      <Navbar localLength={localLength}/>
      <Outlet />
    </div>
  )
}
