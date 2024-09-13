import { Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Dashboard
      </Typography>
    </Container>
  );
};

export default Home;
