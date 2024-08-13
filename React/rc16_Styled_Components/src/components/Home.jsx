import React from "react";
import Container from "./style/ContainerStyle";
import H1, { Anchor } from "./style/HeaderStyle";
import Button, { TomatoButton } from "./style/ButtonStyle";

const Home = () => {
  return (
    <Container>
      <H1>Styled Components</H1>
      <Anchor href="#">LINK</Anchor>
      <Button primary>TIKLA 1</Button>
      <Button secondary>TIKLA 2</Button>
      <Button>TIKLA 3</Button>

      <TomatoButton>TIKLA 4</TomatoButton>
      <TomatoButton tertiary>TIKLA 5</TomatoButton>
    </Container>
  );
};

export default Home;
