import { useState } from "react";
import Data from "../helper/Data";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Home = () => {
  const [doing, setDoing] = useState(Data);

  return (
    <div>
      <AddTodo doing={doing} setDoing={setDoing} />
      <TodoList doing={doing} setDoing={setDoing} />
    </div>
  );
};

export default Home;
