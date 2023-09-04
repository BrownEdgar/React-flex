import "./Users.scss"

export default function Users({users}) {
  return (
    <div className ="Users">
        {
            users && users.map(user => {
                return(
                    <div key = {user.id} className="Users__item">
                        <h1 className="Users__title">{user.firstName} {user.lastName}</h1>
                        <span className ="Users__age">age: {user.age}</span>
                        <span className ="Users__gen">gender: {user.gender}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
