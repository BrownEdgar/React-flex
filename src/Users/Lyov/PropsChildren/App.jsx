import { useState } from 'react'
import Component from './Component'
import Modal from './Modal/Modal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () =>{
    setIsOpen(!isOpen)
  } 
  return (
    <div>
     <button onClick={toggleModal}>Open Modal</button>
     {isOpen ? <Modal toggleModal={toggleModal} title='About us' variant="dark">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam dolorum modi? Officia, obcaecati animi deserunt labore ducimus dolorem illum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quas explicabo recusandae voluptas totam tenetur quam, cumque numquam laudantium doloribus ratione provident dolores perspiciatis! Omnis cum, commodi repellendus ut sed, eum beatae dolorum deserunt non esse consequatur ullam voluptate consectetur tenetur culpa itaque nulla accusamus quod autem quasi totam officiis.</p>
     </Modal> : null}
    </div>
  )
}
