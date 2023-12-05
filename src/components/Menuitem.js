import React from 'react';
import { Link } from 'react-router-dom';

function Menuitem(props) {
  return (
    <li>
      <Link to={props.item.href}>{props.item.label}</Link>
    </li>
  );
}

export default Menuitem;
