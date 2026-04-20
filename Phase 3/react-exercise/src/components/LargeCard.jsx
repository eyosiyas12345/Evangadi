import React from 'react'

function LargeCard(props) {
  return (
        // <!-- iphone 11 -->
    <section id={props.id}>
      <div className="texts">
        <div className="name">{props.name}</div>
        <div className="phone-advert">{props.advert}</div>
        <div className="phone-price">{props.price}</div>
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
    </section>
  )
}

export default LargeCard