import { useState } from "react";

const Todo = ({ doing, setDoing }) => {
  const [button, setButton] = useState(true);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    const newDoing = {
      id: crypto.randomUUID(),
      text: text,
      day: day,
      isDone: false,
    };

    setDoing([...doing, newDoing]);
    setText("");
    setDay("");
  };

  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <button
          className="btn"
          style={{ backgroundColor: button ? "green" : "purple" }}
          onClick={() => setButton(!button)}
        >
          {button ? "CLOSE" : "SHOW"} TASK BAR
        </button>
      </header>

      {button && (
        <form onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="date">Day & Time</label>
            <input
              type="datetime-local"
              id="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>

          <button className="btn btn-submit" type="submit">
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
};

export default Todo;
