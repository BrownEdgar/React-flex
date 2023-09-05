import "./Users.scss"

export default function Users({ users }) {
  return (
    <div className="Users">
      {
        users && users.map(user => {
          return (
            <div key={user.id} className="Users__item">
              <h1 className="Users__title">{user.firstName} {user.lastName}</h1>
              <img className="Users__img" src={user.image} alt="" />
              <p className="Users__age">age: {user.age}</p>
              <p className="Users__gen">gender: {user.gender}</p>
              <p className="Users__email">email: {user.email}</p>
            </div>
          )
        })
      }
    </div>
  )
}
