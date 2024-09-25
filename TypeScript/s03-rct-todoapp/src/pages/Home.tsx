import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { Container } from "@mui/material";
import axios from "axios";

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Home = () => {
  //    const [todos,setTodos] = useState([] as ITodoType[]);
  //    const [todos,setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //* yaygın olan kullanım

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //*1.yol
  //    const addTodo = async (text:string) => {
  //     try {
  //         await axios.post(url,{task:text,isDone:false})
  //         getTodos()
  //     } catch (error) {
  //         console.log(error)
  //     }
  //    }

  //2.yol
  // type AddFn = (text: string) => Promise<void>;
  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(url, { ...todo, isDone: !todo.isDone });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Home;
