import { arttir, azalt, reset } from "../../redux/reducers/counterReducer";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { sayac, text1 } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac} </h1>
      <h2>{text1} </h2>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
