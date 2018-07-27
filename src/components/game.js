import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      targetNumber: null,
      feedback: 'Make your Guess!',
      guessList: []
    };

  }
  
  componentDidMount() {
    if(!this.state.targetNumber) {
      this.startNewGame();
    }
  }

  setNewTarget() {
    const targetNumber = Math.floor(Math.random() * 100 + 1);
    this.setState({targetNumber});
  }

  startNewGame() {
    this.setState({
      feedback: 'Make your Guess!',
      guessList: []
    });
    this.setNewTarget();
  }

  handleGuess(guess) {
    if (!Number.isNaN(guess) && (!this.state.guessList.includes(guess) || !this.state.guessList.includes(this.state.targetNumber))) {
      this.setState({ guessList: [...this.state.guessList, guess]});
    }
  }

  findDistance(guess, target = this.state.targetNumber) {
    return Math.abs(target - guess);
  }

  handleDistanceChange(guess) {
    const distance = this.findDistance(guess);
    const lastDistance = this.findDistance(this.state.guessList[this.state.guessList.length - 1]) || 101;
    let feedback;
    if (distance === 0 || this.state.guessList.includes(this.state.targetNumber)) {
      feedback = 'You Won! Click new game to play again';
    } else if (distance < 2) {
      feedback = 'You\'re burning up!';
    } else if (distance > 80) {
      feedback = 'You\'re freezing!';
    } else if (distance > 50) {
      feedback = 'cold';
    } else if (distance < 15 && lastDistance > distance) {
      feedback = 'getting hotter';
    } else if (distance < 15 && lastDistance < distance) {
      feedback = 'getting cooler';
    } else if (lastDistance < distance) {
      feedback = 'getting colder';
    } else if (lastDistance > distance) {
      feedback = 'getting warmer';
    } else if (this.state.guessList.includes(guess)) {
      feedback = 'You guessed that already! Pick a different number';
    } else if (Number.isNaN(guess)) {
      feedback = 'Please input a number';
    } else {
      feedback = 'guess again!';
    }
    this.setState({feedback});
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentGuess = parseInt(e.target.userGuess.value, 10);
    this.handleGuess(currentGuess);
    e.target.userGuess.value = '';
    this.handleDistanceChange(currentGuess);
  }

  render() {
    const hasWon = this.state.guessList.includes(this.state.targetNumber);
    return (
      <div>
        <Header newGame={() => this.startNewGame()} />
        <GuessSection
          feedback={this.state.feedback}
          onSubmit={e => this.handleSubmit(e)}
          hasWon={hasWon} />
        <GuessCount count={this.state.guessList.length} />
        <GuessList guesses={this.state.guessList} />
      </div>
    );
  }
}

