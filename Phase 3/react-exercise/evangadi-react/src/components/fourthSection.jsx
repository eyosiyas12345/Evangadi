import React from 'react';
import watchLogo from '../assets/images/icons/watch-series5-logo.png'
import servantLogo from '../assets/images/icons/servant-logo.png';
import appleCard from '../assets/images/icons/apple-card-logo.png';
import ipadLogo from '../assets/images/icons/new-ipad-logo.png';
import tvLogo from '../assets/images/icons/apple-tv-logo.png';

function FourthSection() {
  return (
        // <!-- 6 Grids -->
    <section className="grid-section">
      {/* <!-- watch --> */}
      <div className="grid-card watch-card">
        <div className="logo">
          <img src={watchLogo} alt="watch logo" />
        </div>
        <div className="description">
          <p>With the new Always-On Retina display.</p>
          <p>You've never seen a watch like this.</p>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- card --> */}
      <div className="grid-card card-card">
        <div className="logo">
          <img src={appleCard} alt="" />
        </div>
        <div className="description">
          <p>Get 3% Daily Cash on purchases</p>
          <p>from Apple using Apple Card.</p>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- tv --> */}
      <div className="grid-card tv-card">
        <div className="logo">
          <img src={tvLogo} alt="" />
        </div>
          <div className="description">
            <img src={servantLogo}/>
          </div>
          <div className="watch-more">
              <a href="#">Watch the trailer</a>
          </div>
        </div>
      {/* <!--airpod-card --> */}
      <div className="grid-card airpod-card">
        <div className="logo">AirPods pro</div>
        <div className="description">
          <p>Magic like you've never heard.</p>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
      </div>
      {/* <!--macbook-pro-card--> */}
      <div className="grid-card macbook-pro-card">
        <div className="texts">
          <div className="description"><p>16-inch model</p></div>
          <div className="name">MacBook Pro</div>
          <div className="description">
            <p>
              The best for the brightest.
            </p></div>
          <div className="links">
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
      </div>
      {/* <!-- iPad--> */}
      <div className="grid-card ipad-card">
        <div className="logo">
          <img src={ipadLogo} alt="apple logo" />
        </div>
        <div className="description">
          <p>Like a computer. Unlike any computer.</p>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- end of cards --> */}
    </section>
  );
}

export default FourthSection