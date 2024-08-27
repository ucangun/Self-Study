import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { gorevler } = useSelector((state) => state.todoReducer);

  return (
    <div>
      <div>
        {gorevler.map((gorev, i) => (
          <TodoItem gorev={gorev} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
