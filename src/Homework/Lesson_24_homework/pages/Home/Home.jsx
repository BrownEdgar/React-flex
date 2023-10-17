import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../features/users/usersSlice"
import "./Home.scss"
import { addCount, getCount } from "../../features/count/countSlice"
import { useEffect } from "react"

export default function Home() {
  const users = useSelector(getUsers)
  const count = useSelector(getCount)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCount({count: users.length}))
  }, [dispatch, users.length])
  
  

  return (
    <div className="Container">
      <span>Count: {count} </span>
      <div className="Container-items">
      {
        users.map(user => {
          return (
            <div key = {user.id} className="Container-items-flex">
              <span>ID: {user.id}</span>
              <h2>{user.name} {user.surName}</h2>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              {user.date ? <p>Date: {user.date}</p> : null}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
