import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData, getStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      //* id varsa edit işlemi
      putStockData("products", info);
    } else {
      //* id yoksa create işlemi
      postStockData("products", info);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-category-label"
                id="demo-simple-category"
                value={info.categoryId}
                name="categoryId"
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="demo-simple-select"
                value={info.brandId}
                name="brandId"
                label="Brand"
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              {info._id ? "Update Product" : "Submit Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
