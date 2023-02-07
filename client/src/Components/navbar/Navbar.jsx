import React from 'react';
import{Link} from"react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className='navContainer'>
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className='logo'>Vacation Kernel</span>
            </Link>
            <div className="navItems">
                <button className="navBtn">Register</button>
                <button className="navBtn">LogIn</button>
            </div>
        </div>
    </div>
  )
}
