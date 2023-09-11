// import axios from "axios";
import { useState } from "react";
import Users from "./components/Users";

export default function App() {
  const [information] = useState([
    {
      id: 1,
      title: "2023 Intern - Software Engineer (Java or JavaScript)",
      adress: "Yerevan,Armenia",
      folder: "Other",
      crid: "R134783",
      date: new Date().toLocaleDateString(),
      job: "Save Job",
      now: "Apply now",
    },
  ]);

  return (
    <div className="container">
      <Users information={information} />
    </div>
  );
}
