import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [remember, setRemember] = useState("");

  const sendToDatabase = (e) => {
    e.preventDefault();
    alert(`
      name: ${name}
      password :${password}
      country : ${country}
      remember : ${remember}
      
      `);
    setName("");
    setPassword("");
    setCountry("");
    setRemember("");
  };
  return (
    <div className="mt-4">
      <div className="text-center">
        <h1>******************************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={sendToDatabase}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name : <span className="text-danger">{name}</span>
          </label>

          <input
            type="text"
            value={name}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password : <span className="text-danger">{password}</span>
          </label>

          <input
            type="password"
            value={password}
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country : <span className="text-danger">{country}</span>
          </label>
          <select
            id="country"
            value={country}
            className="form-select"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Countries</option>
            <option value="Türkiye">TURKEY</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="remember">
            Remember :{" "}
            <span className="text-danger">{remember.toString()}</span>
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
