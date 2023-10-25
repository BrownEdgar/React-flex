import { useEffect, useState } from "react"
import axios from 'axios'
import Slider from "react-slick";
import './App.css'
import User from "./User";


const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [users, setUsers] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    // draggable: false,
    // fade:true,
    // lazyLoad:true,
    // vertcial: true,
    // verticalSwiping: true,
    // swipeToSlide: true
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
      {/* <User data={users}/> */}
    </div>
  )
}
