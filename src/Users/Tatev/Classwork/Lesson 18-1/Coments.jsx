

export default function Coments({ data }) {
  return (
    <div>
      <ul id ="list">
        {
          data.map(coment => {
            return(
              <li key = {coment.id} className="list-item">
                <span>{coment.name}</span>
                <span>{coment.body}</span>
                <span>{coment.id}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
