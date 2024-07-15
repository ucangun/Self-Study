import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = ({ doing, setDoing }) => {
  return (
    <div>
      {doing.map((x) => (
        <div key={x.id}>
          <h3>
            {x.text}
            <div>
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <MdDeleteForever style={{ color: "red", fontSize: "25px" }} />
            </div>
          </h3>
          <h6>{x.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
