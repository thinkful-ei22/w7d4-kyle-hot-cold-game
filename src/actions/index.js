export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
});

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
  type: TOGGLE_MODAL
});