// src/services/productService.js
const API_URL = 'http://test-server.com/api';

const productService = {
  getProducts: async (filters, page) => {
    // Fetch products based on filters and pagination
    const response = await fetch(`${API_URL}/products?page=${page}&category=${filters.category}&company=${filters.company}`);
    const data = await response.json();
    return data;
  },

  getProductById: async (productId) => {
    // Fetch product details by ID
    const response = await fetch(`${API_URL}/products/${productId}`);
    const data = await response.json();
    return data;
  },
};

export default productService;
