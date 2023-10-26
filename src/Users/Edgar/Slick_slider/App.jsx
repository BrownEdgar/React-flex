import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from "react-slick";

import './App.css'
import User from './User';

const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [users, setUsers] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  }


  useEffect(() => {
    axios.get(DB_URL)
      .then(res => setUsers(res.data?.users || []))
      .catch(err => console.error(err))
  }, [])


  return (
    <div>
      <Slider {...settings}>
        {users.map(user => <User user={user} key={user.id} />)}
      </Slider>

    </div>
  )
}
