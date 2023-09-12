import PropTypes from "prop-types"
import "./Child.scss"

export default function Child({ data }) {
  return (
    <div className="Child" key ={data.id}>
      <h1 className="Child_title">{data.firt_name} {data.last_name}</h1>
      <span className="Child_id">{data.id}</span>
      <h3 className="hild_bestFriend">age: {data.bestFriend}</h3>
      <h5 className="Child_age">age: {data.age}</h5>
      <p className="Child_address"> address: {data.addres.street} {data.addres.house} {data.addres.city}</p>
      <p className="Child_salary">{data.salary}</p>
    </div>
  )
}

Child.propTypes ={
    data: PropTypes.exact({
        id: PropTypes.number,
        firt_name: PropTypes.string,
        last_name: PropTypes.string,
        addres: PropTypes.exact({
            street: PropTypes.string,
            house: PropTypes.number,
            city: PropTypes.string
        }),
        age:  PropTypes.number,
        salary: PropTypes.number,
        bestFriend: PropTypes.string
    })
}