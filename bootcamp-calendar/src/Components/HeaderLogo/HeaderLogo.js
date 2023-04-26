import React from 'react';
import logo from './LogoSOC.png';
import "./HeaderLogo.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="School of Code logo" />
        <h1> School of Code - Bootcamp 14 - Weekly Schedule </h1>
        
      </div>
    </header>
  );
}

export default Header;