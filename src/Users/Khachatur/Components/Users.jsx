import './Users.scss'

export default function Users({users}) {
    return (
        <div className="Users">
            {users.map((user => {
                <div className="Users__item">
                    <h2 className="Users__name">{user.firstname} {user.lastname}</h2>
                    <p className="Users__mail">{user.email}</p>
                    <p className="Users__username">{user.username}</p>
                    <img className="Users__image" src={user.image} alt="userimg" />
                    <p className="Users__age">Age: {user.age}</p>
                </div>
            }))}
        </div>
    )
}