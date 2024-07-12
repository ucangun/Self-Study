import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImg, setShowImg] = useState(true);
  return (
    <Card
      onClick={() => setShowImg(!showImg)}
      className="rounded-2 m-auto playerCard"
      role="button"
    >
      {showImg ? (
        <Card.Img className="playerImg" variant="top" src={img} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => (
            <li key={index} className="h5 list-unstyled">
              🏀 {item}
            </li>
          ))}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
