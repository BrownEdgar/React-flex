import './Users.scss'

const Users = ({ users }) => {
  return (
    <div className="Users">
        {users.map((user) => (
          <div className="Users__items" key={user.id}>
            <h2 className="Users__name">{user.firstName} {user.lastName}</h2>
            <p className="Users__mail">{user.email}</p>
            <p className="Users__phone">{user.phone}</p>
            <img className="Users__img" src={user.image} alt="usersimg" />
            <p className="Users__age">AGE: {user.age}</p>
          </div>
        ))}
    </div>
  );
};

export default Users;
