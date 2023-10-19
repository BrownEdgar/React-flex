import { useState } from 'react';
import Modal from './Modal/Modal';
import Component from './Component';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {/* <Component >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quasi!</h1>
      </Component>
      <Component >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quasi!</h1>
        <p>Lorem, ipsum dolor.</p>
        <button>read more</button>
      </Component> */}

      <button onClick={toggleModal}>open modal</button>
      {isOpen ? <Modal toggleModal={toggleModal} title='delete product' withClose variant={'dark'}>
        <button onClick={toggleModal}>OK</button>
        <button onClick={toggleModal}>cancel</button>

      </Modal> : null}
    </div>
  )
}
