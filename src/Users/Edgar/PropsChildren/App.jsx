import { useState } from 'react';
import Modal from './Modal/Modal';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>open modal</button>
      {isOpen ? <Modal toggleModal={toggleModal} title='delete product' withClose variant={'dark'}>
        <button>OK</button>
        <button onClick={toggleModal}>cancel</button>

      </Modal> : null}
    </div>
  )
}
