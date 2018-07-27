import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }

  handleClick(e) {
    if (e.target.className === 'what' || e.target.className === 'close') {
      this.setState({showInfo: !this.state.showInfo});
    }
    if (e.target.className === 'new') {
      this.props.newGame();
    }
  }

  render() {
    return (
      <header>
        <TopNav onClick={e => this.handleClick(e)} />
        <InfoModal
          display={this.state.showInfo}
          onClick={e => this.handleClick(e)}
        />
        <h1>HOT or COLD</h1>
      </header>
    );
  }
}
