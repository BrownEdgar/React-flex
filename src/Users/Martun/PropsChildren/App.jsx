import { useState } from "react"
import  Component  from "./Component"
import Modal from "./Modal/Modal"

export default function App() {
    const [isOpen, setIsOpen] =useState(false)
    const removeFalse = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
    return (
        <div>
            <button onClick={removeFalse}>
                open modal
            </button>
        { isOpen ? <Modal removeFalse={removeFalse}/> : null}

        </div>
    )
}