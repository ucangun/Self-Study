import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import LifeCycleMethods from "./LifeCycleMethods";
// import Clock from "./Clock";
import People from "./useEffect-fetch-axios/People";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="text-center container mt-4">
      <button onClick={() => setShow(!show)} className="btn btn-danger">
        SHOW
      </button>
      {/* {show && <LifeCycleMethods />} */}
      {/* {show && <Clock />} */}

      <People />
    </div>
  );
}

export default App;
