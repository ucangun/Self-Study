import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <Container>
      <Header />
      <AddTodoComp />
      <TodoList />
    </Container>
  );
};

export default Home;
