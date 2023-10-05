import React from "react";
import "./Job.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendarDays,
  faFolder,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Job = ({ offer }) => {
  return (
    <div className="Job">
      {offer.map((offer) => (
        <div className="Job__item" key={offer.id}>
          <h1 className="Job__title">{offer.title}</h1>
          <div className="Job__other">
            <p className="Job__location">
              <FontAwesomeIcon icon={faLocationDot} /> {offer.location}
            </p>
            <p className="Job__info">
              <FontAwesomeIcon icon={faFolder} /> {offer.info}
            </p>
            <p className="Job__idcode">
              <FontAwesomeIcon icon={faAddressCard} /> {offer.idcode}
            </p>
            <p className="Job__date">
              <FontAwesomeIcon icon={faCalendarDays} /> {offer.date}
            </p>
          </div>
          <div className="Job__Buttons">
            <button className="Job__ButtonF">Save Job</button>
            <button className="Job__ButtonS">Apply now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
