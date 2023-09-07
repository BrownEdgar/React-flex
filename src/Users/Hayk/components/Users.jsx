import "./Users.scss";

export default function Users({ information }) {
  return (
    <div className="container">
      {information.map((info) => {
        return (
          <div className="box" key={info.id}>
            <img className="box__image" src={info.image} alt="" />
            <h5 className="box__title">{info.title}</h5>
            <p className="box__desc">{info.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
