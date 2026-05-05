import React from 'react'
import {Link} from 'react-router-dom';

function Iconlink(props) {
  return (
            <li>
                <Link to={props.destiny}><img src={props.icon} /></Link>
            </li>
  );
}

export default Iconlink