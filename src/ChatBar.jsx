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
      this.props.newMessage(this.state.username, event.target.value)
      //reset message form to empty
      event.target.value = '';
      // this.refs.test.value = ""; //clears username field on msg send
    }
  }

  updateUsername(event) {
    let username = event.target.value || this.props.username
      this.setState({
        username
    });
  }



  render () {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" ref="test" placeholder="Enter a username" onBlur={ this.updateUsername.bind(this) } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.sendMessage.bind(this) } />
      </footer>
    );
  }

}

export default ChatBar;