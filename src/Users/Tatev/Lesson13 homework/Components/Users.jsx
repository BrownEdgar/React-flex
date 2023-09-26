import PropTypes from "prop-types"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import "./Users.scss"



export default function Users({ users }) {
  const [password, setPassword] = useState({})

  const seePassword = (id) => {
    setPassword({ ...password, [id]: !password[id] })
  }

  return (
    <div className="user">
      {
        users.map(user => {
          const x = password[user.id] || false
          return (
            <div className="user-item" key={user.id}>
              <p><span className="title">Email:</span> <span>{user.email}</span></p>
              <p><span className="title">Username:</span> <span>{user.userName}</span></p>
              <span>Password: </span>
              <p>{x ? user.password : "*".repeat(10)}</p>
              <span onClick={() => seePassword(user.id)}>
                {
                  x ? <AiFillEyeInvisible className="icon" /> : <AiFillEye className="icon" />
                }
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    email: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.string
  }))
}