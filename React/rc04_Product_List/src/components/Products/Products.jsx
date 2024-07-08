import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="productList">
      {products.map((a) => (
        <div>
          <ProductCard />
        </div>
      ))}
    </div>
  );
};

export default Products;
