import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import ProductModal from "../components/Modals/ProductModal";
import ProductTable from "../components/Tables/ProductTable";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };

  const [initialState, setInitialState] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  console.log("Products:", products);
  console.log("Products:", initialState);
  useEffect(() => {
    getStockData("products");
    getStockData("brands");
    getStockData("categories");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>

      <ProductTable />

      {open && (
        <ProductModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Products;
