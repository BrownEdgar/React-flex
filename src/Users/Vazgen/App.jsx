import { useState } from "react";
import Job from "./Components/Job/Job";
import "./App.scss";
const arr = [
  {
    title: "2023 Intern - Software Engineer (Java or JavaScript)",
    location: "Yerevan , Armenia",
    info: "Other",
    idcode: "R134783",
    date: new Date().toLocaleDateString(),
  },
];

export default function App() {
  const [offer] = useState(arr);

  return (
    <div className="App">
      <Job offer={offer} />
    </div>
  );
}
