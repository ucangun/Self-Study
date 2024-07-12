import { Container, Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container className="text-center">
      <Image width="200px" src={logo} alt="nba logo" />
      <h1 className="fw-bold font-monospace my-2 display-5">NBA Legends</h1>
    </Container>
  );
};

export default Header;
