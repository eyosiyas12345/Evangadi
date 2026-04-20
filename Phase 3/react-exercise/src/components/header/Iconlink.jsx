import React from 'react'

function Iconlink(props) {
  return (
            <li>
                <a href="#"><img src={props.icon} /></a>
            </li>
  );
}

export default Iconlink