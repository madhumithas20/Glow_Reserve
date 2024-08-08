// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//   return (
//     <div className="signup">
//       <h2>Signup Page</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" name="username" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;




import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="modal-container">
      <div className="signup-container">
        <h2>Signup Page</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
