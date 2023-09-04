import "./Users.scss";

export default function Users({ users }) {
  return (
    <div className="Users">
      {users.map((user) => {
        return (
          <div key={user.id} className="Users__item">
            <h1>name:{user.firstName}</h1>
            <h2>lastname:{user.lastName}</h2>
            <p>age:{user.age}</p>
            <p>gender:{user.gender}</p>
            <p>email:{user.email}</p>
            <p>phone:{user.phone}</p>
            <p>birtDate:{user.birthDate}</p>
            <p>height:{user.height}</p>
            <p>weight:{user.weight}</p>
            <p>addres:{user.address.address}</p>
          </div>
        );
      })}
    </div>
  );
}
