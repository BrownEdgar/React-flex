import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendarDays,
  faFolder,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Users.scss";

export default function Users({ information }) {
  return (
    <div className="container">
      {information.map((info) => {
        return (
          <div className="box" key={info.id}>
            <div className="box__information">
              <h1 className="box__title">{info.title}</h1>
              <span className="box__adress">
                <FontAwesomeIcon icon={faLocationDot} />
                {info.adress}
              </span>
              <span className="box__folder">
                {" "}
                <FontAwesomeIcon icon={faFolder} />
                {info.folder}
              </span>
              <span className="box__crid">
                {" "}
                <FontAwesomeIcon icon={faAddressCard} />
                {info.crid}
              </span>
              <span className="box__date">
                <FontAwesomeIcon icon={faCalendarDays} /> {info.date}
              </span>
            </div>
            <div className="box__margin">
              <span className="box__job">{info.job}</span>
              <span className="box__now"> {info.now}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
