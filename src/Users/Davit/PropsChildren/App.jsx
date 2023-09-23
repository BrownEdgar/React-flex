import Users from "./Comps/Users"
import Modal from "./Modal/Modal"
import { useState } from "react"
const arr = [
  {
    id: 1,
    imgData: './src/Users/Davit/Images/1.jpg',
    header: "accusamus beatae ",
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, repudiandae!',
  },
  {
    id: 2,
    imgData: './src/Users/Davit/Images/2.jpg',
    header: "reprehenderit ",
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae a dolorum delectus quibusdam ab?',
  },
  {
    id: 3,
    imgData: './src/Users/Davit/PropsChildren/Images/3.jpg',
    header: "officia porro ",
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti facilis doloribus distinctio veniam aspernatur?',
  },
  {
    id: 4,
    imgData: './src/Users/Davit/Images/4.jpg',
    header: "culpa odio",
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus soluta optio praesentium, deleniti quia quae veniam harum aspernatur ab?',
  },
]
export default function App() {
  const [Data, setData] = useState(arr)
  const [isOpen, setisOpen] = useState(false);
  const [productId, setProductId] = useState(null)

  const toggleBtn = () => {
    setisOpen(!isOpen)
  }
  const deleteProduct = (id) => {
    const result = Data.filter(card => card.id !== id)
    setData(result)
  }
  return (
    <div>
      <Users Data={Data} toggleBtn={toggleBtn} />
      {isOpen ? <Modal>
        <p className='Modal-title'>Are you sure?</p>
        <button className='Modal-closeBtn' onClick={() => deleteProduct(productId)}>delete</button>
        <button className='Modal-cancelBtn' onClick={toggleBtn}>cancel</button>
      </Modal> : null}
    </div>
  )
}
