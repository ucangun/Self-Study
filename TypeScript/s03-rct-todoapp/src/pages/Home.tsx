import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}

const Home = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (text: string) => {
    try {
      await axios.post(url, { task: text, isDone: false });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo} />
      <TodoList />
    </Container>
  );
};

export default Home;
