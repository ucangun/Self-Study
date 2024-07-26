import React, { useEffect, useState } from "react";

const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";


  

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {"" ? (
          <p>Loading.....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
            {/* diziyi bastır */}
            </article>
            <article>
             
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
