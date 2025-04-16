import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo4.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
    <div className='logo'><img  src={logo} alt="" /></div>
    <ul className='nav-links'>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active_link' : ''}>Home</NavLink></li>
        <li><NavLink to='/cuisine' className={({ isActive }) => isActive ? 'active_link' : ''} >Cuisine</NavLink></li>
        <li><NavLink to='/category' className={({ isActive }) => isActive ? 'active_link' : ''} >Category</NavLink></li>
    </ul>
</div>

  );
};

export default Header;