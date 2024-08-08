import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isInCart) {
      navigate('/cart'); // Navigate to cart page
    } else {
      onAddToCart(product); // Add product to cart
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
      <button className="add-to-cart-button" onClick={handleButtonClick}>
        {isInCart ? 'Go to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;