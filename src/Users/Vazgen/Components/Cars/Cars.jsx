import React from "react";
import './Cars.scss'
import classNames from "classnames";


const Users = ({ info }) => {
  return (
    <div className="Info">
        {info.map((info) => (
          <div className={classNames("Info__item")} key={info.id}>
            <img className={classNames("Info__img")} src={info.image} alt="car" />
            <h3 className ={classNames("Info__title")}>{info.title}</h3>
            <p className ={classNames("Info__desc")}>{info.desc}</p>
          </div>
        ))}
    </div>
  );
};

export default Users;
