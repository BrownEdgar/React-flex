import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layouts() {
  return (
    <>
      <header className="App__header">
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}
