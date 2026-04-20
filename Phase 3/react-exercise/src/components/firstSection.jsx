import React from 'react';
import macbookPro from '../assets/images/home/macbook-pro.jpg';

function FirstSection() {
  return (
        // <!-- macbook-pro-section -->
    <section id="macbook-pro-section">
      <div class="texts">
        <div class="inch">16-inch model</div>
        <div class="name">MacBook Pro</div>
        <div class="promotion">The best for the brightest</div>
        <div class="links">
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="image-container">
        <img src={macbookPro} alt="macbook-pro image" />
      </div>
    </section>
  )
}

export default FirstSection