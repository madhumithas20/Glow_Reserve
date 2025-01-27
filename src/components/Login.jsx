// import React from 'react';
// import './Login.css';

// const Login = () => {
//   return (
//     <div className="login">
//       <h2>Login Page</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" name="username" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="modal-container">
      <div className="login-container">
        <h2>Login Page</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

