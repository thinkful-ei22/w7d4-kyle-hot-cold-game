import { MAKE_GUESS, START_NEW_GAME, TOGGLE_MODAL } from '../actions';
import { generateFeedback, generateNewTarget } from './utils';

const initialState = {
  targetNumber: generateNewTarget(),
  feedback: 'Make your Guess!',
  guessList: [],
  showInfo: false
};

export const guessReducer = ( state = initialState, action ) => {
  switch(action.type) {
  case(MAKE_GUESS):
    return Object.assign({}, state, {
      guessList: [...state.guessList, action.guess],
      feedback: generateFeedback(action.guess)
    });
  case(START_NEW_GAME):
    return Object.assign({}, state, {
      targetNumber: generateNewTarget(),
      feedback: 'Make your Guess!',
      guessList: [],
      showInfo: false
    });
  case(TOGGLE_MODAL):
    return Object.assign({}, state, {
      showInfo: !state.showInfo
    });
  default:
    return state;
  }
};