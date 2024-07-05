import data from "../../data";
import "./Card.scss";

const Card = () => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card">
            <h1>{item.name}</h1>
            <h2>{item.job}</h2>
            <p>{item.comment}</p>
            <img src={item.img} alt={item.img} />

            <div className="btn-div">
              <button className="btn-div--small">Small</button>
              <button className="btn-div--large">Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
