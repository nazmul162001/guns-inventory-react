import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav style={{height: '80px', backgroundColor: '#9854'}} className='d-flex justify-content-between align-items-center px-5'>
      <div className="logo-container fs-3 fw-bold">Logo</div>
      <div className="nav-container">
        <a className='text-decoration-none text-dark fs-5 px-3' href="/">Home</a>
        <a className='text-decoration-none text-dark fs-5 px-3' href="/">About</a>
        <a className='text-decoration-none text-dark fs-5 px-3' href="/">Inventory</a>
        <a className='text-decoration-none text-dark fs-5 px-3' href="/">Contact Us</a>
      </div>
    </nav>
  );
};

export default Header;