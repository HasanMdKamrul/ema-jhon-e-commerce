import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {

    const {logIn} = useContext(AuthContext);

    const [error,setError] = useState('');

    const submitHandle = event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       

        console.log(email,password);

        // ** login

       const logInFunctionality = async()=>{
        try {
            await  logIn(email,password);
            console.log('Logged In user')
        } catch (error) {
            setError(error)
            console.log(error)
        }
       };

       logInFunctionality()
       

        
    }

  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>

      <form onSubmit={submitHandle} className="form-filed">
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
