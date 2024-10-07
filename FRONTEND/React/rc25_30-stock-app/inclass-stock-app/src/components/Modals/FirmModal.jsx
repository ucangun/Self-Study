import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose, initialState }) {
  const { postStockData, putStockData } = useStockCall();
  /*
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  */
  const [info, setInfo] = React.useState(initialState);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
    }

    // setInfo({
    //   name: "",
    //   phone: "",
    //   address: "",
    //   image: "",
    // });
    handleClose();
  };

  /* 
  React.useEffect(() => {
    setInfo(initialState);
  }, [initialState]);
*/
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open Modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Firm Name"
              id="name"
              name="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Address"
              id="address"
              name="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Phone"
              id="phone"
              name="phone"
              type="text"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Image"
              id="image"
              name="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              {info._id ? "Update Firm" : "Submit Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
