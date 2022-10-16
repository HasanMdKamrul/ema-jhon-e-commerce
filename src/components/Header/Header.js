import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const {user} = useContext(AuthContext);

    console.log(user)
  
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">LogIn</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
                {
                    user?.email
                }
            </div>
        </nav>
    );
};

export default Header;