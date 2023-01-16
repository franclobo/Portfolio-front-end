import React from 'react';

function Navbar() {
  return (
    <div className="desktop-header">
      <ul className="navbar">
        <li className="menu-item">
          <a href="#Hello" className="menu-link">
            Hello
          </a>
        </li>
        <li className="menu-item">
          <a href="#Portfolio" className="menu-link">
            Potfolio
          </a>
        </li>
        <li className="menu-item">
          <a href="#About" className="menu-link">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="#Contact" className="menu-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
