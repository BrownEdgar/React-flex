import  Modal  from "./Modal/Modal";
import {useState} from "react"



export default function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggleModel = ()=>{
    setisOpen(!isOpen)
  }


  return (
    <div>
      <button onClick={toggleModel}>open Modal</button>
         {
           isOpen ? <Modal toggleModel={toggleModel} variant="dark" withClose={false}>
            <button onClick={toggleModel}>delete</button>
           </Modal>: null
         }
    </div>
  )
}
