import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const AddTodoComp = ({
  addTodo,
}: {
  addTodo: (text: string) => Promise<void>;
}) => {
  // const [text, setText] = useState<string>("");
  const [text, setText] = useState("");

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box>
      <TextField
        id="outlined-disabled"
        label="New Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        disabled={!text.trim()}
        endIcon={<SaveIcon />}
        onClick={handleClick}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
