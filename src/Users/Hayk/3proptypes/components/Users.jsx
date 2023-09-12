import PropTypes from "prop-types";
import "./Users.scss";

export default function Users({ information }) {
  return (
    <div className="container">

          <div className="box" >
            <h1>
              {information.firt_name + " "}
              {information.last_name}
            </h1>
            <span>{information.addres.street}</span>
            <span>{information.addres.house}</span>
            <span>{information.addres.city}</span>
            <span>{information.age}</span>
            <span>{information.salary}</span>
            <span>{information.bestFriend}</span>
          </div>

    </div>
  );
}
Users.propTypes = {
  information: PropTypes.exact({
    id: PropTypes.number,
    firt_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    addres:PropTypes.exact({
        street: PropTypes.string,
        house: PropTypes.number,
        city: PropTypes.string,
      }),
    age: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    bestFriend: PropTypes.string.isRequired,
  }),
};
