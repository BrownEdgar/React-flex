import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layouts() {
  return (
    <>
      <header className="App__header">
        <h1 className="App__title">Users Panel</h1>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}
