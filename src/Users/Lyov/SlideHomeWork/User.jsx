export default function User({ user }) {
  return (
    <div>
      <div className="User" >
        <img src={user.image} />
      </div>
      <h2>{user.title}</h2>
      <p>{user.desc}</p>
    </div>
  )
}
