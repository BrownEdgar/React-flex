import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import User from "./User"
import "./App.css"


const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [users, setUsers] = useState([])

  const settings = {
    dots: true,
    // autoplay: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,  //mknikov chi toxi poxi
    fade: false,  //ashxatuma mi hatov mejinna menak poxum
    centerMode: false, //mejtexiny urish tesqa stanum slick-center classna stanum
  }


  useEffect(() => {
    axios(DB_URL)
    .then(res => setUsers(res.data?.users || []))
    .catch(err => console.error(err))
  }, [])
  

  return (
    <div>
        {/* <Slider {...settings}>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
          <div>
            <h3>Slide 4</h3>
          </div>
          <div>
            <h3>Slide 5</h3>
          </div>
          <div>
            <h3>Slide 6</h3>
          </div>
        </Slider> */}
      <Slider {...settings}>
        {users.map(user => <User user={user} key={user.id} />)}
      </Slider>
    </div>
  )
}
