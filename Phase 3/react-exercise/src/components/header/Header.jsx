import React from 'react';
import logo from '../../assets/images/icons/logo.png';
import searchIcon from '../../assets/images/icons/search-icon.png';
import cartIcon from '../../assets/images/icons/cart.png';
import Navlink from './Navlink';
import Iconlink from './Iconlink';
import Mac from '../../pages/mac/Mac'

function Header() {
  return (
    <header>
      <div className="container">
        <ul>

          <Iconlink icon={logo} destiny="/"/>
          <Navlink linkName = "Mac" destiny = "/mac"/>
          <Navlink linkName = "iphone" destiny = "/iphone"/>
          <Navlink linkName = "ipad"
          destiny = "/ipad"/>
          <Navlink linkName = "watch"
          destiny = "/watch"/>
          <Navlink linkName = "tv"
          destiny = "/tv"/>
          <Navlink linkName = "Music"
          destiny = "/music"/>
          <Navlink linkName = "Support"
          destiny = "/support"/>
          <Iconlink icon={searchIcon} destiny="/search"/>
          <Iconlink icon={cartIcon} destiny="/cart"/>
          
           <li className="menu-bar"><a href="#">
            <i className="fa fa-bars" aria-hidden="true"></i>
           </a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header