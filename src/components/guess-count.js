import React from 'react';
import { connect } from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
  const count = props.guessList.length;
  return (
    <p className='count'>
      Guess #<span id="count">{count}</span>!
    </p>
  );
}

export const mapStateToProps = state => ({
  guessList: state.guessList
});

export default connect(mapStateToProps)(GuessCount);
