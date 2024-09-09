import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container spacing={2} mt={2}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard {...firm} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;
