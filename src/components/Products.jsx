import React, { useState } from 'react';
import { PRODUCTS } from '../constants/constants';
import ProductCard from './ProductCard';
import Header from './Header';
import './Products.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items); // Access cart items from state

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter(product =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="products-container">
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          <option value="all">All</option>
          <option value="Beauty">Beauty</option>
          {/* Add other categories here */}
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const isInCart = cartItems.some(item => item.id === product.id); // Check if product is in cart
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              isInCart={isInCart} // Pass isInCart prop
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;

