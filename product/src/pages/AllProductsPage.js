// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import productService from '../services/productService';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    // Fetch initial products and metadata
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch products when filters or pagination change
    fetchData();
  }, [filters, pagination]);

  const fetchData = async () => {
    // Fetch products based on filters and pagination
    const { data, metadata } = await productService.getProducts(filters, pagination.currentPage);
    setProducts(data);
    setPagination({
      ...pagination,
      totalPages: metadata.totalPages,
    });
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handlePageChange = (page) => {
    setPagination({
      ...pagination,
      currentPage: page,
    });
  };

  return (
    <div>
      <h1>All Products</h1>
      <FilterBar categories={categories} companies={companies} onFilterChange={handleFilterChange} />
      <ProductList products={products} />
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default AllProductsPage;
