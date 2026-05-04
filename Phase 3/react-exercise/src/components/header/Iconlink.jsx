import React from 'react'

function Iconlink(props) {
  return (
            <li>
                <Link to={props.destiny}><img src={props.icon} /></Link>
            </li>
  );
}

export default Iconlink