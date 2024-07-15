const Todo = ({ doing, setDoing }) => {
  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <button className="btn" style={{ backgroundColor: "green" }}>
          CLOSE ADD TASK BAR
        </button>
      </header>

      <form>
        <div className="formControl">
          <label htmlFor="text">Task</label>
          <input type="text" id="text" />
        </div>
        <div className="formControl">
          <label htmlFor="date">Day & Time</label>
          <input type="datetime-local" id="date" />
        </div>

        <button className="btn btn-submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Todo;
