import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from "./LifeCycleMethods";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="text-center container mt-4">
      <button onClick={() => setShow(!show)} className="btn btn-primary">
        SHOW
      </button>
      {show && <LifeCycleMethods />}
    </div>
  );
}

export default App;
