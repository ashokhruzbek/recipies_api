import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
    <div className='logo'>Meals</div>
    <ul className='nav-links'>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active_link' : ''}>Home</NavLink></li>
        <li><NavLink to='/cuisine'>Cuisine</NavLink></li>
        <li><NavLink to='/category'>Category</NavLink></li>
    </ul>
</div>

  );
};

export default Header;