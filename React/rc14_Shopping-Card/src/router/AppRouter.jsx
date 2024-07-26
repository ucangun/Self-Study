import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import UpdateProduct from "../pages/UpdateProduct";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/update" element={<UpdateProduct />} />
          {/* <Route path="/update:id" element={<UpdateProduct />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
