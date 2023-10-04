import { PropTypes } from "prop-types"
import "./Users.scss"

export default function Users({users}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
          users.filtered.map(user => (
            <tr key ={user.id} className="item">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))         
          }
        </tbody>
      </table>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.exact({
    original: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number
    })),
    filtered: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number
    }))
  })
}