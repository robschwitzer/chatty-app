import React, { Component } from 'react';

class ChatBar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: this.props.username
    }
  }

  sendMessage(event) {
    if(event.key === 'Enter') {
      //use props from app.js to add new usrname/message combo
      this.props.newMessage(this.state.username, event.target.value, 'message')
      //reset message form to empty
      event.target.value = '';
      // this.refs.test.value = ""; //if you want to clear username field on msg send
    }
  }

  setUsername(event) {
    let username = event.target.value || this.props.username
    this.setState({
      username
    });

    if (this.state.username !== username) {
      this.props.newMessage(this.state.username, `${this.state.username} has changed their name to ${username}`, 'notification')
      return null;
    }
  }

  render () {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" ref="test" placeholder="Enter a username" onBlur={ this.setUsername.bind(this) } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.sendMessage.bind(this) } />
      </footer>
    );
  }

}

export default ChatBar;