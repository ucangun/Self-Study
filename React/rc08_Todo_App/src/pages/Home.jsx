import { useState } from "react";
import Data from "../helper/Data";
import TodoList from "../components/TodoList";

const Home = () => {
  const [doing, setDoing] = useState(Data);

  return (
    <div>
      <TodoList doing={doing} setDoing={setDoing} />
    </div>
  );
};

export default Home;
