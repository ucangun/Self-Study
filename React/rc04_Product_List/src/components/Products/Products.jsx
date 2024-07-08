import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default Products;

// const Products = ({ products }) => {
//   return (
//     <div className="productList">
//       {products.map((product) => (
//         <div key={product.id}>
//           <ProductCard product={product} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
