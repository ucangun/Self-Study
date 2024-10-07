import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";
import Card from "./components/MyCard";
import data from "./data";

function App() {
  return (
    <div>
      <MyNavbar />
      <Slider />
      <Card veri={data} />
    </div>
  );
}

export default App;
