import classNames from "classnames";
import "./Users.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Users({ data, deleteID }) {
  const [activeID, setActiveID] = useState(null);
  const handleDelete = (id) => {
    if (data.length > 1) {
      deleteID(id);
    }
  };
  return (
    <div className="Users">
      {data.map((user) => {
        return (
          <div
            className={classNames("Users__item", {
              Users__item__active: activeID === user.id,
            })}
            key={user.id}
            onClick={() => setActiveID(user.id)}
          >
            <h2 className="Users__title">{user.full_name}</h2>
            <span>{user.email}</span>
            <p className="Users__description">{user.about}</p>
            {activeID === user.id && (
              <button
                onClick={() => handleDelete(user.id)}
                className="Users__delete"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}
            {activeID === user.id && (
              <Link to={`/edituser/${user.id}`} className="Users__edit">
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
