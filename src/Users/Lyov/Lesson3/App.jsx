import { useState } from 'react'
import Users3 from './Users3/Users3'

export default function App() {
  const [info] = useState([
    {
      id:1,
      image: './src/Users/Lyov/Lesson3/Images/1.jpg',
      title: 'Process Step One',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore animi nemo, veniam ab voluptatibus voluptatum assumenda sit dolores iusto ipsam nobis repudiandae a ipsum aliquid nulla, cumque quia maiores.'
    },
    {
      id:2,
      image: './src/Users/Lyov/Lesson3/Images/2.jpg',
      title: 'Process Step One',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore animi nemo, veniam ab voluptatibus voluptatum assumenda sit dolores iusto ipsam nobis repudiandae a ipsum aliquid nulla, cumque quia maiores.'
    },
    {
      id:3,
      image: './src/Users/Lyov/Lesson3/Images/3.jpg',
      title: 'Process Step One',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore animi nemo, veniam ab voluptatibus voluptatum assumenda sit dolores iusto ipsam nobis repudiandae a ipsum aliquid nulla, cumque quia maiores.'
    },
    {
      id:4,
      image: './src/Users/Lyov/Lesson3/Images/4.jpg',
      title: 'Process Step One',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore animi nemo, veniam ab voluptatibus voluptatum assumenda sit dolores iusto ipsam nobis repudiandae a ipsum aliquid nulla, cumque quia maiores.'
    }
    
  ])
  const [data, setData] = useState(info)
  const deleteId = (id) => {
    const filter = data.filter(data => data.id !== id)
    setData(filter)
  }
  return (
    <div>
      <Users3 data={data} deleteId={deleteId}/>
    </div>
  )
}
