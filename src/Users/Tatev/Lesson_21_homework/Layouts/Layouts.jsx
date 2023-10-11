import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";


export default function Layouts() {
  return (
    <>
      <header>
        <h1>About page</h1>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}
