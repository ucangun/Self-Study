import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";
import FirmModal from "../components/Modals/FirmModal";

const Firms = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false),
      setInitialState({
        name: "",
        phone: "",
        address: "",
        image: "",
      });
  };

  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  console.log(initialState);

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
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      {open && (
        <FirmModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}

      <Grid container spacing={2} mt={2}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard
              handleOpen={handleOpen}
              {...firm}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;
