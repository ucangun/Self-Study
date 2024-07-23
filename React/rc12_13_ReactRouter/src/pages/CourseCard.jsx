import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import data from "../data";

const CourseCard = () => {
  return (
    <Container>
      <Row className="g-3 text-center">
        {data.map(({ name, text, img, id }) => {
          return (
            <Col
              className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name} </Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
