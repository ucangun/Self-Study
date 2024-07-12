import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
      <Container className="cardContainer rounded-4 my-4 p-3">
        <Row className="g-3">
          {data.map((player, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
