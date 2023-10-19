import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Edit.scss"


export default function Edit({users, setUsers}) {
  const { id } = useParams();
  const [user, setUser] = useState(null)
  console.log(id);
  
  useEffect(() => {
    const editUser = users.find(user => user.id === id)
    setUser(editUser)
  }, [id])

  const handleChange = (e) =>{
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value
    })
    
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    const result =users.map(elem => (elem.id === user.id ? user : elem))
    setUsers(result)
  }

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <h1>Edit user</h1>
        {user && (
          <>
          <div>
            <label htmlFor="full_name">Full name</label>
            <input type="text" id="full_name" value ={user.full_name} required onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value ={user.email} required onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="description">About me</label>
            <textarea
            name="description"
            id="about"
            cols="30"
            rows="10"
            value ={user.about}
            onChange={handleChange}>
          </textarea>
        </div>
        <div>
          <input type="submit" value="Add user" />
        </div>
          </>
        )}
      </form>
    </div>
  )
}
