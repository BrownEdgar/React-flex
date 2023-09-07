<<<<<<< HEAD

=======
import './Users.scss'
import classNames from "classnames";
>>>>>>> 1c3b0b56aaa7a7c763accf5d8e1e235b43bc76c4

export default function Users({steps}) {
    return (
<<<<<<< HEAD
        <div className="Users">
            {users.map((user => {
                return (
									<div className="Users__item" key={user.id}>
										<h2 className="Users__name">{user.firstname} {user.lastname}</h2>
										<p className="Users__mail">{user.email}</p>
										<p className="Users__username">{user.username}</p>
										<img className="Users__image" src={user.image} alt="userimg" />
										<p className="Users__age">Age: {user.age}</p>
									</div>
								)
            }))}
=======
        <div className="Steps">
            {
                steps.map((steps) => (
                    <div className={classNames("Steps__item")} key={steps.id}>
                        <img src={steps.image} alt="img" />
                        <h1 className={classNames("Steps__title")}>{steps.title}</h1>
                        <h2 className={classNames("Steps__desc")}>{steps.desc}</h2>
                    </div>
                ))
            }
>>>>>>> 1c3b0b56aaa7a7c763accf5d8e1e235b43bc76c4
        </div>
            
    )
}