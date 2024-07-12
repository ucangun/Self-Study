import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  return (
    <Card className="rounded-2 m-auto playerCard" role="button">
      <Card.Img className="playerImg" variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
