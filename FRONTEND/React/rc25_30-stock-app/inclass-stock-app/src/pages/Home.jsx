import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const { getPurSales } = useStockCall();

  useEffect(() => {
    getPurSales();
  }, []);

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
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Home;
