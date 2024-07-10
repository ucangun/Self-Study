import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  return (
    <div className="mt-4">
      <div className="text-center">
        <h1>******************************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name : <span className="text-danger">{name}</span>
          </label>

          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
