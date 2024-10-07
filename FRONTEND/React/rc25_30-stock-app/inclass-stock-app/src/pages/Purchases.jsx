import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/Modals/PurchaseModal";
import PurchaseTable from "../components/Tables/PurchaseTable";
import { Button, Container, Typography } from "@mui/material";

const Purchases = () => {
  const { getProPurcFirBrands } = useStockCall();

  const [open, setOpen] = useState(false);

  const [initialState, setInitialState] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      firmId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProPurcFirBrands();
  }, []); // eslint-disable-line

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      {open && (
        <PurchaseModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}

      <PurchaseTable
        setInitialState={setInitialState}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default Purchases;
