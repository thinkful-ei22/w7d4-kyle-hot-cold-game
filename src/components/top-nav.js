import React from 'react';
import { connect } from 'react-redux';
import { handleClick } from './utils';

import './top-nav.css';

export function TopNav(props) {

  return (
    <nav onClick={e => handleClick(e, props)}>
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

export const mapStateToProps = state => ({
  showInfo: state.showInfo
});

export default connect(mapStateToProps)(TopNav);
