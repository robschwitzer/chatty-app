import React, { Component } from 'react';

class Navbar extends Component {
  constructor () {
    super ();
  }
  render () {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <h3 className='user-counter' > {this.props.counter} users </h3>
      </nav>
    );
  }
}

export default Navbar;