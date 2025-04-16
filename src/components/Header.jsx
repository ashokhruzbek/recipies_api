import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo"><img  className='logo' src={logo} alt="" /></Link>
        <nav className="nav">
          <Link to="/cuisine" className="nav-link">Cuisine</Link>
          <Link to="/" className="nav-link">Category</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
