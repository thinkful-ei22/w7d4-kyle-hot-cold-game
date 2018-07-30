import React from 'react';
import { connect } from 'react-redux';
import { makeGuess } from '../actions';

import './guess-form.css';

export function GuessForm(props) {
  const hasWon = props.guessList.includes(props.targetNumber);
  const display = (hasWon) ? 'hidden' : 'guessForm';

  function handleSubmit(e) {
    e.preventDefault();
    const currentGuess = parseInt(e.target.userGuess.value, 10);
    props.dispatch(makeGuess(currentGuess));
    e.target.userGuess.value = '';
    e.target.userGuess.focus();
  }

  return (
    <form 
      onSubmit={ e => handleSubmit(e)}
      className={display}
      >
      <input
        type="text"
        name="userGuess"
        id="userGuess"
        title="Enter your Guess"
        className="text"
        maxLength="3"
        autoComplete="off"
        placeholder="Enter your Guess"
        required
      />
      <input
        type="submit"
        id="guessButton"
        className="button"
        name="submit"
        value="Guess"
      />
    </form>
  );
}

export const mapStateToProps = state => ({
  guessList: state.guessList,
  targetNumber: state.targetNumber
});

export default connect(mapStateToProps)(GuessForm);
