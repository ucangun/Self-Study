import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  let errorr = true;

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <div>
      <Container
        sx={{
          marginTop: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">TEXT FIELD</Typography>

        <Box
          sx={{
            mt: 4,
          }}
        >
          {/* margin="dense"=  az bir margin verir */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Enter your E-mail"
            margin="dense"
          />
          <TextField
            required
            id="filled-required"
            label="Filled"
            defaultValue="Enter your E-mail"
            margin="normal"
            variant="filled"
          />
          <TextField
            error={errorr}
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorr && "yanlis girdiniz "}
            variant="filled"
            fullWidth
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {/* https://mui.com/material-ui/react-select/ */}
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* text-fields icon */}

          <FormControl sx={{ m: 1, width: "25vh" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={show ? "text" : "password"}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
