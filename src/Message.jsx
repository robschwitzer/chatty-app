import React, { Component } from 'react';

class Message extends Component {
  constructor () {
    super ();
  }
  render () {
    let username = <span className="message-username">{ this.props.message.username }</span>;
    let content = <span className="message-content">{ this.props.message.content }</span>;
  return (
    <div>
      { username }
      { content }
    </div>
    );
  }
}

export default Message;