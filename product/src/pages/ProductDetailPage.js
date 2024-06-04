// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import ProductDetail from '../components/ProductDetail';
import productService from '../services/productService';

const ProductDetailPage = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID from URL params
    fetchData(match.params.productId);
  }, [match.params.productId]);

  const fetchData = async (productId) => {
    // Fetch product details
    const productData = await productService.getProductById(productId);
    setProduct(productData);
  };

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? <ProductDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetailPage;
