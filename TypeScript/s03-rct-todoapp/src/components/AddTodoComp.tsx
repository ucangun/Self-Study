import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

//! 1. Kullanım yolu props type
// const AddTodoComp = ({
//   addTodo,
// }: {
//   addTodo: (text: string) => Promise<void>;
// }) => {
//   // const [text,setText] = useState<string>("")
//   const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
//   const handleClick = () => {
//     addTodo(text);
//     setText("");
//   };
//   return (
//     <Box>
//       <TextField
//         id="outlined-disabled"
//         label="New Todo"
//         variant="outlined"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="success"
//         disabled={!text.trim()}
//         onClick={handleClick}
//         endIcon={<SaveIcon />}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };

// export default AddTodoComp;

//* 2. Kullanım yolu props type
interface IAddTodoComp {
  addTodo: (text: string) => Promise<void>;
}

const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  // const [text,setText] = useState<string>("")
  const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
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
        onClick={handleClick}
        endIcon={<SaveIcon />}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
