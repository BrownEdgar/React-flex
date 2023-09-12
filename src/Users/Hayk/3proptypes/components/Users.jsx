import PropTypes from "prop-types";
import "./Users.scss";

export default function Users({ information }) {
  return (
    <div className="container">
      {information.map((info) => {
        return (
          <div className="box" key={info.id}>
            <h1>
              {info.firt_name + " "}
              {info.last_name}
            </h1>
            <span>{info.street}</span>
            <span>{info.house}</span>
            <span>{info.city}</span>
            <span>{info.age}</span>
            <span>{info.salary}</span>
            <span>{info.bestFriend}</span>
          </div>
        );
      })}
    </div>
  );
}
/////////Chi stacvum mots)))
Users.propTypes = {
  information: PropTypes.objectOf({
    id: PropTypes.number,
    firt_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    addres: PropTypes.objectOf(
      PropTypes.exact({
        street: PropTypes.string,
        house: PropTypes.number,
        city: PropTypes.string,
      })
    ),
    age: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    bestFriend: PropTypes.string.isRequired,
  }),
};
