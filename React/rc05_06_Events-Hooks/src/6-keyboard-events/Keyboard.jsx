import React from "react";

const Keyboard = () => {
  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input type="text" className="form-control" />

      <div className="mt-3">
        <p>{}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;