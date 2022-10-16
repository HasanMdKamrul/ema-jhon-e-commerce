import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {

    const [error,setError] = useState('');

    const {signUp} = useContext(AuthContext)
   
    const submitHandle = event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email,password,confirm);

        // ** password validation

        if (password !== confirm) {
            setError('Password did not match!')
            return;
        }

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('At least one upper case');
            return;
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            setError('At least one digit');
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('At least one special characters');
            return;
        }

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        signUp(email,password);
    }

  return (
    <div className="form-container">
      <h3 className="form-title">SignUp</h3>

      <form onSubmit={submitHandle} className="form-filed">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <button className="btn-submit" type="submit">
          SignUp
        </button>
      </form>
      <p className="signup-text">
        Already have an account?{" "}
        <Link className="link-text" to="/login">
          Login
        </Link>{" "}
      </p>
      <small className="error-container">{error}</small>
    </div>
  );
};

export default SignUp;
