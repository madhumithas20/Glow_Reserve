// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
// import Header from './Header';
// import './Cart.css';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <>
//       <Header />
//       <div className="cart-container">
//         <div className="cart-items">
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>${item.price.toFixed(2)}</p>
//                   <div className="cart-item-quantity">
//                     <button onClick={() => dispatch(decrementQuantity(item.id))} aria-label="Decrease quantity">-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => dispatch(incrementQuantity(item.id))} aria-label="Increase quantity">+</button>
//                   </div>
//                   <button
//                     className="cart-item-remove-button"
//                     onClick={() => dispatch(removeItem(item.id))}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="cart-summary">
//           <h2>Summary</h2>
//           <p>Total Price: ${totalPrice.toFixed(2)}</p>
//           <button>Checkout</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = useSelector(state => state.cart.totalCount);

  return (
    <div className="cart-container">
      <Header />
      <div className="cart-content">
        <h2>Your Cart</h2>
        <p>Total items: {totalCount}</p>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

