import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  return (
    <div>
      {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h3"
          gutterBottom
          align="center"
          color="error"
          sx={{
            background: "#eee",
            mt: 4,
            border: "1px solid red",
          }}
        >
          Typography Container Box Button
        </Typography>
        {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
        <Typography variant="button" gutterBottom>
          SPAN Lorem, ipsum.
        </Typography>
        <Typography variant="body1" gutterBottom>
          P TAG BODY 1 Lorem, ipsum dolor.
        </Typography>
        <Typography variant="body2" gutterBottom>
          P TAG BODY 2 Lorem, ipsum dolor.
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 4,
          gap: 2,
        }}
      >
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
