import { useEffect, useState } from "react";

import useStockCall from "../hooks/useStockCall";
import { Button, Container, Typography } from "@mui/material";

import SaleModal from "../components/Modals/SaleModal";
import SaleTable from "../components/Tables/SaleTable";

const Sales = () => {
  const { getProSalBrands } = useStockCall();

  const [open, setOpen] = useState(false);

  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProSalBrands();
  }, []); // eslint-disable-line

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      {open && (
        <SaleModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
      <SaleTable handleOpen={handleOpen} setInitialState={setInitialState} />
    </Container>
  );
};

export default Sales;
