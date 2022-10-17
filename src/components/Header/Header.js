import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const {user,signOutFunctionality} = useContext(AuthContext);
    const [error,setError] = useState('')

    const handleSignOut = ()=>{
        const signoutFunc = async ()=>{
            try {
                await signOutFunctionality();
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        };
        signoutFunc()
    }
  
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
               
                
                {
                    user?.email ? <>
                   
                     <button onClick={handleSignOut} className='btn-signout'>SignOut</button> 
                     <span className='link-text'>{user.email}</span>
                    </> : <> <NavLink to="/login">LogIn</NavLink>
                    <NavLink to="/signup">SignUp</NavLink></>
                }
            </div>
        </nav>
    );
};

export default Header;