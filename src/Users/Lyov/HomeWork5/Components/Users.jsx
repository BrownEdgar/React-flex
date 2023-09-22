import './Users.scss'

export default function Users({ id, film, handleFilterById, handleDelete }) {
  return (
    <div className="Container">
      <div className='Container-title'>
      <h2>Title</h2>
      <h2>Genre</h2>
      <h2>Stock</h2>
      <h2>Rate</h2>
       </div>
    
      <ul>
        {
          film.filter((elem) =>
            id === '' ? true : elem.id === parseInt(id)
          )
          .map(elem => (
            <li key={elem.id}>
            <li>{elem.Title}</li>
            <li>{elem.Genre}</li>
            <li>{elem.Stock}</li>
            <li>{elem.Rate}</li>
              <button onClick={() => handleDelete(elem.id)}>Delete</button>
            </li>
          ))
        }
        <input type="text" placeholder="Search by Id" value={id} onChange={handleFilterById} />
      </ul>
    </div>
  )
}
