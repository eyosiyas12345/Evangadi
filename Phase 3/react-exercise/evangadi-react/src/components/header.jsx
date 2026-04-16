import React from 'react';
import logo from '../assets/images/icons/logo.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart.png';

function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <a href="#"><img src={logo} alt="apple logo" /></a>
          </li>
          <li className="text-link"><a href="#">Mac</a></li>
          <li className="text-link"><a href="#">iphone</a></li>
          <li className="text-link"><a href="#">ipad</a></li>
          <li className="text-link"><a href="#">watch</a></li>
          <li className="text-link"><a href="#">tv</a></li>
          <li className="text-link"><a href="#">Music</a></li>
          <li className="text-link"><a href="#">Support</a></li>
          <li>
            <a href="#"
              ><img src={searchIcon} alt="search"
            /></a>
          </li>
          <li>
            <a href="#"><img src={cartIcon} alt="cart icon" /></a>
          </li>
           <li className="menu-bar"><a href="#">
            <i className="fa fa-bars" aria-hidden="true"></i>
           </a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header