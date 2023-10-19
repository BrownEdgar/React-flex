
const User = ({ data }) => {
  console.log('user')
  return (
    <>
      {
        data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          )
        })}
    </>

  );
};



export default User;
