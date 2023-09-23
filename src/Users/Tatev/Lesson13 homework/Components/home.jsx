import PropTypes from "prop-types"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import "./Users.scss"



export default function Users({users}) {
  const [password, setPassword] = useState(null)
  
  const seePassword=(id) =>{
    setPassword(id)
  }

  return (
    <div className="user">
        {
          users.map(user =>{
            return(
              <div className="user-item" key ={user.id}>
                <p><span className="title">Email:</span> <span>{user.email}</span></p>
                <p><span className="title">Username:</span> <span>{user.userName}</span></p>
                <span>Password: </span>
                <span>{password === user.id ? user.password : "*".repeat(10)}</span>
                <span>
                {
                  password === user.id ? 
                  <AiFillEyeInvisible className="icon" onClick={() => seePassword(null)}/> : 
                  <AiFillEye className="icon" onClick={() => seePassword(user.id)}/>
                }
                </span>
              </div>
            )
          })
        }
    </div>
  )
}

Users.propTypes={
  users: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    email: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.string
  }))
}