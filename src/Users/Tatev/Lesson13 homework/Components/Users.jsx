import PropTypes from "prop-types"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import "./Users.scss"



export default function Users({users}) {
  const [userId, setUserId] = useState({})

  const visiblePassword =(id)=> {
    setUserId({...userId, [id]: false})
  }

  const togglePassword = (id) => {
    setUserId[id] === true
  }
  // const [icon, setIcon] = useState(false)

  // const seePassword=(id) =>{
  //   setIcon(!icon)
  // }

  // const star =(number)=>{
  //   let string =""
  //   for(let i = 1; i <= number.length; i++){
  //     string += "*"
  //   }
  //   return string
  // }

  return (
    <div className="user">
        {
          users.map(user =>{
            return(
              <div className="user-item" key ={user.id}>
                <p><span className="title">Email:</span> <span>{user.email}</span></p>
                <p><span className="title">Username:</span> <span>{user.userName}</span></p>
                <span>Password: </span>
                <input 
                type={visiblePassword(user.id) ? "text" : "password"} 
                value={user.id}/>

                <span onClick={togglePassword}>
                  {
                  userId[user.id] ? <AiFillEyeInvisible className="icon"/> : <AiFillEye className="icon"/>
                  }
                </span>

                {/* {
                  icon ? (
                    <input type="text" value={user.password} className="input-password"/>
                  ) : (
                    <input type="password" value={star(user.password)} className="input-password"/>
                  )
                }
                <span onClick={seePassword}>
                  {
                  icon ? <AiFillEyeInvisible className="icon"/> : <AiFillEye className="icon"/>
                  }
                </span> */}
              </div>
            )
          })
        }
    </div>
  )
}


Users.propTypes={
  users: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    email: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.string
  }))
}