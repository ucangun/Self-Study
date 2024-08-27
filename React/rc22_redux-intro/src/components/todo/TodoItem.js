import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { sil, degistir } from "../../redux/actions/todoActions";

const TodoItem = ({ gorev }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(sil(gorev.id));
  };

  const handleCompleted = () => {
    dispatch(degistir(gorev.id));
  };

  return (
    <div
      style={{
        textDecoration: !gorev.completed ? "none" : "line-through",
        backgroundColor: !gorev.completed ? "orange" : "#a9a9a9",
        borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{gorev.yazi}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleCompleted}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
