import data from "../../data";
import "./Card.scss";

const Card = () => {
  return (
    <div className="container">
      {data.map(({ name, job, comment, img }) => {
        return (
          <div className="card">
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt={img} />

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
