import React, { Component } from 'react';

class Message extends Component {
  constructor () {
    super ();
  }

  render () {
    let username = <span className="message-username">{ this.props.message.username }</span>;
    let content = <span className="message-content">{ this.props.message.content }</span>;

    let notification = <div className="message system">{ this.props.message.content }</div>;

    if (this.props.message.type === 'message') {
      return (
        <div>
          { username }
          { content }
        </div>
        );
    } else if (this.props.message.type === 'notification') {

      return (
        notification
      );
    }
  }
}

export default Message;