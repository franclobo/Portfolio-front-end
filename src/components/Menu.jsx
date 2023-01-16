import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import ImageMenu1 from './Images/image_geometry_menu_1.svg';
import ImageMenu2 from './Images/image_geometry_menu_2.svg';
import './home.scss';

function Menu({ onClose }) {
  return (
    <div className="menuBackground">
      <div className="menuContainer">
        <div className="menu-header">
          <img src={ImageMenu1} className="App-logo" alt="logo" />
          <CloseIcon className="menu-close" onClick={() => onClose(false)} />
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#Hello" className="menu-link" onClick={() => onClose(false)}>
              Hello
            </a>
          </li>
          <li className="menu-item">
            <a href="#Portfolio" className="menu-link" onClick={() => onClose(false)}>
              Potfolio
            </a>
          </li>
          <li className="menu-item">
            <a href="#About" className="menu-link" onClick={() => onClose(false)}>
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#Contact" className="menu-link" onClick={() => onClose(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-footer">
          <img src={ImageMenu2} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Menu;
