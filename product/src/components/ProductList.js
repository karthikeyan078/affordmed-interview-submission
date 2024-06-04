// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.productName} />
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
