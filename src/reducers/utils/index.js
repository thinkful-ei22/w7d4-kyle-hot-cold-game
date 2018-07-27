import store from '../../store';

const findDistance = (guess, target = store.getState().targetNumber) => {
  return Math.abs(target - guess);
};

export const generateFeedback = (guess) => {
  const distance = findDistance(guess);
  const lastDistance = findDistance(store.getState().guessList[store.getState().guessList.length - 1]) || 101;
  let feedback;
  if (distance === 0 || store.getState().guessList.includes(store.getState().targetNumber)) {
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
  } else if (store.getState().guessList.includes(guess)) {
    feedback = 'You guessed that already! Pick a different number';
  } else if (Number.isNaN(guess)) {
    feedback = 'Please input a number';
  } else {
    feedback = 'guess again!';
  }
  return feedback;
};

export const generateNewTarget = () => (Math.floor(Math.random() * 100 + 1));