import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
      <Container className="cardContainer">
        <Row>
          {data.map((player, index) => (
            <Col key={index}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
