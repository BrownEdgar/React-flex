import { useState } from "react"
import Users2 from "./Users2/users"



export default function app() {
  const [info] = useState([
    {
      id: 1,
      title: "2023 Intern - Software  Engineer (Java or JavaScript) ",
      location: "Yerevan, Armenia",
      file: "Other",
      RefNumber: "R134783",
      date: new Date().toLocaleDateString(), 
    }
  ])
 
  return (
    <div>
      <Users2 info = {info}/>
    </div>
  )
}
