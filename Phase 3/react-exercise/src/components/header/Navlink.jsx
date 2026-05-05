import React from 'react';
import {Link} from 'react-router-dom';

function Navlink(props) {
  return (
    <li className="text-link">
      <Link to={props.destiny}>
      {props.linkName}
      </Link>
    </li>
  );
}

export default Navlink;