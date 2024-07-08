import "./App.scss";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

import { products, categories } from "./helper/data";

function App() {
  return (
    <div>
      <Header categories={categories} />
      <Products products={products} />
    </div>
  );
}

export default App;
