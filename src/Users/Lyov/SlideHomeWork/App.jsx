import { useState } from "react"
import Slider from "react-slick"
import User from "./User"
import './App.css'

export default function App() {
  const [users] = useState([
    {
      id: 1,
      image: './src/Users/Lyov/SlideHomeWork/Image/Candles.png',
      title: 'Candles',
      desc: '3 Items'
    },
    {
      id: 2,
      image: './src/Users/Lyov/SlideHomeWork/Image/Ceramic vases.png',
      title: 'Ceramic vases',
      desc: '2 Items'
    },
    {
      id: 3,
      image: './src/Users/Lyov/SlideHomeWork/Image/Chairs.png',
      title: 'Chairs',
      desc: '5 Items'
    },
    {
      id: 4,
      image: './src/Users/Lyov/SlideHomeWork/Image/Decor.png',
      title: 'Decor',
      desc: '7 Items'
    },
    {
      id: 5,
      image: './src/Users/Lyov/SlideHomeWork/Image/Dining chairs.png',
      title: 'Dining chairs',
      desc: '2 Items'
    },
    {
      id: 6,
      image: './src/Users/Lyov/SlideHomeWork/Image/Glass vases.png',
      title: 'Glass vases',
      desc: 'One item'
    },
    {
      id: 7,
      image: './src/Users/Lyov/SlideHomeWork/Image/Lighting.png',
      title: 'Lighting',
      desc: '5 Items'
    },
    {
      id: 8,
      image: './src/Users/Lyov/SlideHomeWork/Image/Textile.png',
      title: 'Textile',
      desc: '2 Items'
    },
    {
      id: 9,
      image: './src/Users/Lyov/SlideHomeWork/Image/Vases.png',
      title: 'Vases',
      desc: '3 Items'
    },
  ])
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  }

  return (
    <div>
      <h1>Categories</h1>
      <Slider {...settings}>
        {users.map(user => <User user={user} key={user.id} />)}
      </Slider>
    </div>
  )
}
