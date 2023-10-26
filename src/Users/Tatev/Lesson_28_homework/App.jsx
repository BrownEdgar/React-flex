import { useState } from "react"
import Slide from "./Slide/Slide"
import "./App.css"


export default function App() {
  const [datas] = useState([
    {
      id: 1,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/1.webp',
      title: 'Vases',
      item: '3 items'
    },
    {
      id: 2,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/2.webp',
      title: 'Textile',
      item: '2 items'
    },
    {
      id: 3,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/3.webp',
      title: 'Tables',
      item: '2 items'
    },
    {
      id: 4,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/4.webp',
      title: 'Sofas',
      item: '2 items'
    },
    {
      id: 5,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/5.webp',
      title: 'Shelves',
      item: '2 items'
    },
    {
      id: 6,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/6.webp',
      title: 'Other decor',
      item: 'One items'
    },
    {
      id: 7,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/7.webp',
      title: 'Lounge chairs',
      item: '4 items'
    },
    {
      id: 8,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/8.webp',
      title: 'Lighting',
      item: '5 items'
    },
    {
      id: 9,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/9.webp',
      title: 'Glass vases',
      item: 'One items'
    },
    {
      id: 10,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/10.webp',
      title: 'Dinning chairs',
      item: '2 items'
    },
    {
      id: 11,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/11.webp',
      title: 'Chairs',
      item: '5 items'
    },
    {
      id: 12,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/12.jpg',
      title: 'Ceramic vases',
      item: '2 items'
    },
    {
      id: 13,
      image: './src//Users/Tatev/Lesson_28_homework/Photos/13.jpg',
      title: 'Candles',
      item: '3 items'
    },
  ])

  return (
    <div>
      <h1>Categories</h1>
      <Slide datas={datas}/>
    </div>
  )
}
