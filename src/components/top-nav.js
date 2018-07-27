import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav onClick={props.onClick}>
      <ul className="clearfix">
        <li>
          <a className="what" href="#">
            What ?
          </a>
        </li>
        <li>
          <a className="new" href="#">
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}

