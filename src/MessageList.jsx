import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super();
  }

  render () {
    let messages = this.props.messages.map((message, id) => {
      return <Message key={id} message={message} />
    });

    return (
      <main className="messages">
        {messages}
        {/*<div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>*/}
      </main>
    );
  }
}

export default MessageList;