import React from 'react';
import logo from '../../assets/images/icons/logo.png';
import searchIcon from '../../assets/images/icons/search-icon.png';
import cartIcon from '../../assets/images/icons/cart.png';
import Navlink from './Navlink';
import Iconlink from './Iconlink';

function Header() {
  return (
    <header>
      <div className="container">
        <ul>

          <Iconlink icon={logo}/>
          <Navlink linkName = "Mac"/>
          <Navlink linkName = "iphone"/>
          <Navlink linkName = "ipad"/>
          <Navlink linkName = "watch"/>
          <Navlink linkName = "tv"/>
          <Navlink linkName = "Music"/>
          <Navlink linkName = "Support"/>
          <Iconlink icon={searchIcon}/>
          <Iconlink icon={cartIcon}/>
          
           <li className="menu-bar"><a href="#">
            <i className="fa fa-bars" aria-hidden="true"></i>
           </a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header