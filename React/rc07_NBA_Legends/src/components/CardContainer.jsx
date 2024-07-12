import { Container, Row, Col, Form } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  //! 1.Yol
  // let filteredData = "";
  // filteredData = data.filter((a) => a.name.includes(search));

  return (
    <>
      <Form.Control
        className="w-50 m-auto"
        type="search"
        placeholder="Serach for a player..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="cardContainer rounded-4 my-4 p-3">
        <Row className="g-3">
          {/* {filteredData.map((player, index) => ( */}
          {data
            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
            .map((player, index) => (
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
