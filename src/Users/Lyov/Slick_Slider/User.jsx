

export default function User({ user }) {
  return (
    <div className="User">
      <img src={user.image} alt={user.maideName} />
      <div className="User-content">
        <h2>
          {user.firstName}
          {""}
          {user.lastName}
        </h2>
        <p>
          <span>Email: {user.email}</span>
        </p>
      </div>
    </div>
  )
}
