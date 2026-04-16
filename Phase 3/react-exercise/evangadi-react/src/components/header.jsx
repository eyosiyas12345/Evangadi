import React from 'react'

function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <a href="#"><img src="images/icons/logo.png" alt="apple logo" /></a>
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
              ><img src="images/icons/search-icon.png" alt="search"
            /></a>
          </li>
          <li>
            <a href=""><img src="images/icons/cart.png" alt="cart icon" /></a>
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