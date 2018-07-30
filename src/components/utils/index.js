import { toggleModal, startNewGame } from '../../actions';

export const handleClick = (e, props) => {
  if (e.target.className === 'what' || e.target.className === 'close') {
    props.dispatch(toggleModal());
  }
  if (e.target.className === 'new') {
    props.dispatch(startNewGame());
  }
};