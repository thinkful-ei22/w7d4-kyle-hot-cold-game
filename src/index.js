import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';


import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


/**
 * REDUX TESTING
 */

import store from './store';
import { makeGuess, startNewGame, toggleModal } from './actions';

store.dispatch(toggleModal());
// expect toggleModal: true
console.log(store.getState());
store.dispatch(toggleModal());
// expect toggleModal: false
console.log(store.getState());

store.dispatch(makeGuess(56));
store.dispatch(makeGuess(58));
store.dispatch(makeGuess(14));
store.dispatch(makeGuess(15));
// expect state to be populated with above guesses
console.log(store.getState());

store.dispatch(startNewGame());
// expect blank state for new game
console.log(store.getState());
