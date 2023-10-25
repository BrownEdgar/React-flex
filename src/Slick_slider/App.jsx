import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";
import Slider from "react-slick";
import './App.css'
const DB_URL = import.meta.env.VITE_DB_JSON

export default function () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
      };

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(DB_URL)
            .then(res => setUsers(res.data.products))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="parent-box">
            <h1 className="Categories">Categories</h1>
            <Slider {...settings}>
            {users.map(user => <User user={user} key={user.id}/>)}
            </Slider>
        </div>
    )

}