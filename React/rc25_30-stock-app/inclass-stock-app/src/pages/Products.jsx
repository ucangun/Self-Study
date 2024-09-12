import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import ProductModal from "../components/Modals/ProductModal";
import ProductTable from "../components/Tables/ProductTable";

const Products = () => {
  const { getStockData, getProCatBrand } = useStockCall();
  const { products, loading, error } = useSelector((state) => state.stock);
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
    // getStockData("products");
    // getStockData("brands");
    // getStockData("categories");
    getProCatBrand();
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
      {loading ? (
        <Typography
          align="center"
          variant="h5"
          component="h3"
          color="secondary.second"
        >
          Loading....
        </Typography>
      ) : error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default Products;
