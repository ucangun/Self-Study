import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = ({ doing, setDoing }) => {
  const deleteTodo = (id) => {
    const actualDoing = doing.filter((item) => item.id !== id);
    setDoing(actualDoing);
    localStorage.setItem("doing", JSON.stringify(actualDoing));
  };

  const checkTodo = (id) => {
    const actualDoing = doing.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setDoing(actualDoing);
    localStorage.setItem("doing", JSON.stringify(actualDoing));
  };

  return (
    <div>
      {doing.map((x) => (
        <div className={x.isDone ? "done" : "gorev"} key={x.id}>
          <h3>
            {x.text}
            <div>
              <FaCheckCircle
                onClick={() => checkTodo(x.id)}
                style={{ color: "green", fontSize: "20px", cursor: "pointer" }}
              />
              <MdDeleteForever
                onClick={() => deleteTodo(x.id)}
                style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
              />
            </div>
          </h3>
          <h6>{x.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
