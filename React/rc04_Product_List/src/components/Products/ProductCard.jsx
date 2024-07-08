const ProductCard = ({ id, title, price, image }) => {
  return (
    <div className="card" key={id}>
      <div className="price">
        <h3>{price}</h3>
      </div>
      <img src={image} alt={title} />
      <div className="card_over">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

// const ProductCard = ({ product }) => {
//  const{price,image,title}=product
//   return (
//     <div className="card">
//       <div className="price">
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} />
//       <div className="card_over">
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
