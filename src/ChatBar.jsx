import React, { Component } from 'react';

class ChatBar extends Component {
  constructor (props) {
    super ();
    this.state = {
      username: 'Anonymous',
      content: ''
    }
  }


  enterKey(event) {
    if(event.key === 'Enter') {

      //use props from app.js to add new usrname/message combo
      this.props.newMessage(this.state.username, event.target.value)
      //reset message for to empty
      event.target.value = '';
      this.setState({
        username: 'Anonymous'
      })
      this.refs.test.value = "";
    }
  }

  updateUsername(event) {
    if (event.target.value) {
      this.setState({
        username: event.target.value
      });
    }
  }

  render () {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" ref="test" placeholder="Enter a username" onChange={ this.updateUsername.bind(this) } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.enterKey.bind(this) } />
      </footer>
    );
  }
}

export default ChatBar;