// import React from 'react';
// import './Header.css';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Nykaa_logo.jpg';

// const Header = () => {
//   const cartCount = useSelector((state) => state.cart.totalCount);

//   return (
//     <header className="header">
//       <Link to="/" className="logo">
//         <img src={logo} alt="Logo" />
//       </Link>
//       <div className="header-right">
//         <nav>
//           <ul>
//             <li><Link to="/">Products</Link></li>
//             <li><span>About</span></li>
//             <li><Link to="/cart">Cart: {cartCount}</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Signup</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/Nykaa_logo.jpg';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.totalCount);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-center">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Details</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/">Orders</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/">Admin Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
