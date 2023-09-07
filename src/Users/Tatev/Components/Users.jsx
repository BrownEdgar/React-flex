import "./Users.scss"
import classNames from "classnames"

<<<<<<< HEAD
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
=======
export default function Users({datas}) {
  return (
    <div className ={classNames("Datas")}>
        {
            datas.map(data => {
                return (
                    <div className ={classNames("Datas_item")} key = {data.id}>
                        <img src={data.image} alt="" />
                        <h3 className ={classNames("Datas_title")}>{data.title}</h3>
                        <p className ={classNames("Datas_desc")}>{data.desc}</p>
                    </div>
                )
            })
        }
>>>>>>> 1c3b0b56aaa7a7c763accf5d8e1e235b43bc76c4
    </div>
  )
}
