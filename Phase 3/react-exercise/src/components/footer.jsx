import React from 'react';
import flag from '../assets/images/icons/16.png';

function Footer() {
  return (
          <footer>
        <div className="long-text">
          1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
          promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
          good condition. Additional trade‑in values require purchase of a new
          iPhone, subject to availability and limits. Must be at least 18. Apple
          or its trade-in partners reserve the right to refuse or limit any
          Trade In transaction for any reason. In‑store trade‑in requires
          presentation of a valid, government-issued photo ID (local law may
          require saving this information). Sales tax may be assessed on full
          value of new iPhone. Additional terms from Apple or Apple’s trade-in
          partners may apply. Monthly pricing: Available to qualified customers
          and requires 0% APR, 24‑month installment loan with Citizens One, and
          iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. Full terms
          apply.
        </div>
        <hr />
        {/* <!-- links --> */}
        <div className="links">
          <div className="category">
            <p>Shop and Learn</p>
            <ul>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Tv</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">AirPod</a></li>
              <li><a href="#">HomePod</a></li>
              <li><a href="#">iPod touch</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="container">
            <div className="category">
              <p>Services</p>
              <ul>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple News</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Card</a></li>
                <li><a href="#">iCloud</a></li>
              </ul>
            </div>
            <div className="category">
              <p>Account</p>
              <ul>
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
              </ul>
            </div>
          </div>
          <div className="category">
            <p>Apple Store</p>
            <ul>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Field Trip</a></li>
              <li><a href="#">Apple Store App</a></li>
              <li><a href="#">Refurbished and Clearance</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shopping Help</a></li>
            </ul>
          </div>
          <div className="container">
            <div className="category">
              <p>For Business</p>
              <ul>
                <li><a href="#">Apple and Business</a></li>
                <li><a href="#">Shop for Business</a></li>
              </ul>
            </div>
            <div className="category">
              <p>For Education</p>
              <ul>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for College</a></li>
              </ul>
            </div>
            <div className="category">
              <p>For Health</p>
              <ul>
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
              </ul>
            </div>
            <div className="category">
              <p>For Government</p>
              <ul>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for College</a></li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="category">
              <p>Apple Values</p>
              <ul>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
              </ul>
            </div>
            <div className="category">
              <p>About Apple</p>
              <ul>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- links --> */}
        <div className="more">
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          <hr />
          <div className="last">
            <div>Copy &copy; 2019 Apple Inc. All rights reserved.</div>
            <div>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flag-container">
                <img src={flag}/>
              </div>
              <p>United States</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer