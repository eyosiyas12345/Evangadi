import React from 'react'

function Navlink(props) {
  return (
    <li className="text-link"><a href="#">{props.linkName}</a></li>
  );
}

export default Navlink