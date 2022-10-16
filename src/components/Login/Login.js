import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>

      <form className="form-filed">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="btn-submit" type="submit">Login</button>
      </form>
      <p className="signup-text">New to Ema-john? <Link className="link-text" to = '/signup'>Create New Account</Link> </p>
    </div>
  );
};

export default Login;
