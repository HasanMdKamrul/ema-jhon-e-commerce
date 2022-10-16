import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
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
            </div>
        </nav>
    );
};

export default Header;