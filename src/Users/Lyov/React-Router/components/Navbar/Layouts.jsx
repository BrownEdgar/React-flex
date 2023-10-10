import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


export default function Layouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
