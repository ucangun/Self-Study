import React from "react";
import Container from "./style/ContainerStyle";
import H1, { Anchor } from "./style/HeaderStyle";

const Home = () => {
  return (
    <Container>
      <H1>Styled Components</H1>
      <Anchor href="#">LINK</Anchor>
      <button>TIKLA 1</button>
      <button>TIKLA 2</button>
      <button>TIKLA 3</button>
      <button>TIKLA 4</button>
      <button>TIKLA 5</button>
    </Container>
  );
};

export default Home;
